"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    sendPasswordResetEmail,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, googleProvider } from "../lib/firebase";
import { Input } from "@nextui-org/react";
import { EyeIcon, EyeSlashIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [infoMessage, setInfoMessage] = useState("");

    const toggleVisibility = () => setIsVisible(!isVisible);

    // Função para identificar o perfil e redirecionar
    const handleRedirectAfterAuth = async (userId: string, userEmail: string | null) => {
        // 1. Verifica se é Admin
        const adminDocRef = doc(db, "admins", userId);
        const adminDoc = await getDoc(adminDocRef);

        if (adminDoc.exists()) {
            // Atualiza o lastLogin do admin
            await setDoc(adminDocRef, { lastLoginAt: serverTimestamp() }, { merge: true });
            router.push("/welcome/admin");
            return;
        }

        // 2. Verifica se é Cliente existente
        const clientDocRef = doc(db, "clients", userId);
        const clientDoc = await getDoc(clientDocRef);

        if (clientDoc.exists()) {
            // Atualiza o lastLogin do cliente
            await setDoc(clientDocRef, { lastLoginAt: serverTimestamp() }, { merge: true });
            router.push("/welcome/client");
        } else {
            // 3. Caso não exista em nenhuma coleção, cria um perfil Cliente automático
            await setDoc(clientDocRef, {
                email: userEmail,
                role: "client",
                createdAt: serverTimestamp(),
                lastLoginAt: serverTimestamp(),
            });
            router.push("/welcome/client");
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Por favor, preencha todos os campos.");
            return;
        }

        setLoading(true);
        setError("");
        setInfoMessage("");

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await handleRedirectAfterAuth(user.uid, user.email);
        } catch (err: any) {
            console.error(err);
            if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
                setError("E-mail ou senha incorretos.");
            } else if (err.code === "auth/invalid-email") {
                setError("Formato de e-mail inválido.");
            } else {
                setError("Erro ao autenticar. Tente novamente.");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        setError("");
        setInfoMessage("");

        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            await handleRedirectAfterAuth(user.uid, user.email);
        } catch (err: any) {
            console.error(err);
            if (err.code !== "auth/popup-closed-by-user") {
                setError("Erro ao autenticar com o Google. Tente novamente.");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = async () => {
        if (!email) {
            setError("Por favor, insira o seu e-mail para recuperar a senha.");
            return;
        }

        setLoading(true);
        setError("");
        setInfoMessage("");

        try {
            await sendPasswordResetEmail(auth, email);
            setInfoMessage("E-mail de recuperação enviado com sucesso. Verifique sua caixa de entrada.");
        } catch (err: any) {
            console.error(err);
            if (err.code === "auth/user-not-found" || err.code === "auth/invalid-email") {
                setError("E-mail inválido ou não cadastrado.");
            } else {
                setError("Erro ao enviar e-mail de recuperação.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-xl p-8 border border-neutral-100 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-24 flex-shrink-0">
                    <img
                        src="/logo.png"
                        alt="KuberLink"
                        className="w-full h-auto object-contain"
                    />
                </div>
                <div className="flex-1">
                    <h2 className="text-[#10826B] text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight">
                        Bem-vindo!
                    </h2>
                    <p className="text-xs text-neutral-500 mt-1 leading-snug">
                        Entre com as suas credenciais ou faça validação pelo Google para acessar o sistema.
                    </p>
                </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
                {error && (
                    <div className="p-3.5 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded-r-lg font-medium animate-fadeIn">
                        {error}
                    </div>
                )}
                {infoMessage && (
                    <div className="p-3.5 bg-blue-50 border-l-4 border-blue-500 text-blue-700 text-sm rounded-r-lg font-medium animate-fadeIn">
                        {infoMessage}
                    </div>
                )}

                <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 ml-1">
                        E-MAIL
                    </label>
                    <Input
                        type="email"
                        placeholder="exemplo@kuberlink.com.br"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                        className="w-full"
                        variant="bordered"
                        radius="lg"
                        size="md"
                        classNames={{
                            inputWrapper: "border-neutral-200 hover:border-[#10826B] focus-within:!border-[#10826B] h-12 transition-all bg-white",
                            input: "text-neutral-800 placeholder-neutral-400 font-sans",
                        }}
                    />
                </div>

                <div className="space-y-1.5 relative">
                    <div className="flex justify-between items-center px-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                            SENHA
                        </label>
                        <button
                            type="button"
                            onClick={handleForgotPassword}
                            disabled={loading}
                            className="text-xs font-semibold text-[#487CBF] hover:underline cursor-pointer transition-all bg-transparent border-none outline-none"
                        >
                            Esqueci minha senha?
                        </button>
                    </div>
                    <Input
                        placeholder="Sua senha secreta"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                        variant="bordered"
                        radius="lg"
                        size="md"
                        classNames={{
                            inputWrapper: "border-neutral-200 hover:border-[#10826B] focus-within:!border-[#10826B] h-12 transition-all bg-white",
                            input: "text-neutral-800 placeholder-neutral-400 font-sans",
                        }}
                        type={isVisible ? "text" : "password"}
                        endContent={
                            <button
                                className="focus:outline-none bg-transparent border-none text-neutral-400 hover:text-neutral-600 cursor-pointer"
                                type="button"
                                onClick={toggleVisibility}
                            >
                                {isVisible ? (
                                    <EyeSlashIcon className="h-5 w-5 pointer-events-none" />
                                ) : (
                                    <EyeIcon className="h-5 w-5 pointer-events-none" />
                                )}
                            </button>
                        }
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 mt-4 bg-[#10826B] hover:bg-[#0c6b57] disabled:bg-neutral-350 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        "Entrar"
                    )}
                </button>
            </form>

            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-neutral-100"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-3 text-neutral-400 font-medium">OU CONTINUE COM</span>
                </div>
            </div>

            <button
                type="button"
                disabled={loading}
                onClick={handleGoogleLogin}
                className="w-full h-12 bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-3 active:scale-[0.98] shadow-sm hover:shadow"
            >
                <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                    />
                    <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                    />
                    <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        fill="#FBBC05"
                    />
                    <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        fill="#EA4335"
                    />
                </svg>
                <span>Entrar com o Google</span>
            </button>

            <div className="mt-6 flex justify-center">
                <Link
                    href="/"
                    className="flex items-center gap-2 px-6 py-2 bg-[#f0fbf8] hover:bg-[#e3f7f1] text-[#10826B] border border-green-150 rounded-full transition-all text-sm font-bold no-underline active:scale-95 shadow-sm"
                >
                    <ArrowLeftIcon className="h-4 w-4 pointer-events-none" />
                    Voltar para o site
                </Link>
            </div>
        </div>
    );
}
