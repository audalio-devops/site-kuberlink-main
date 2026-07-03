"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { doc, getDoc, DocumentData } from "firebase/firestore";
import { auth, db } from "../../lib/firebase";
import { NextUIProvider } from "@nextui-org/react";
import Image from "next/image";

export default function ClientWelcomePage() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [clientData, setClientData] = useState<DocumentData | null>(null);
    const [loading, setLoading] = useState(true);
    const [showRawData, setShowRawData] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (loggedUser) => {
            if (!loggedUser) {
                router.push("/login");
                return;
            }

            try {
                const docRef = doc(db, "clients", loggedUser.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setUser(loggedUser);
                    setClientData(docSnap.data());
                } else {
                    // Não autorizado ou registro pendente
                    await signOut(auth);
                    router.push("/login");
                }
            } catch (err) {
                console.error(err);
                router.push("/login");
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        await signOut(auth);
        router.push("/");
    };

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-neutral-50">
                <div className="h-10 w-10 border-4 border-[#10826B] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // Estruturação dos metadados de autenticação para exibir em JSON
    const authMetadata = user ? {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
        isAnonymous: user.isAnonymous,
        providerId: user.providerId,
        phoneNumber: user.phoneNumber,
        providerData: user.providerData,
        metadata: {
            creationTime: user.metadata.creationTime,
            lastSignInTime: user.metadata.lastSignInTime,
        }
    } : null;

    return (
        <NextUIProvider>
            <main className="w-full min-h-screen bg-slate-900 text-white flex flex-col justify-between font-sans">
                <div className="container mx-auto px-4 py-8 flex-1 flex flex-col items-center justify-center">
                    <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 max-w-xl w-full shadow-2xl relative overflow-hidden transition-all duration-300">
                        {/* Efeito visual de gradiente de fundo */}
                        <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#52CDCB]/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-[#487CBF]/20 rounded-full blur-2xl"></div>

                        <div className="flex justify-center mb-6">
                            <Image src="/logo-branca.png" width={180} height={60} alt="Kuberlink" className="h-12 w-auto object-contain" />
                        </div>

                        <div className="text-center space-y-4 relative z-10">
                            <div className="inline-block px-3 py-1 bg-green-500/20 text-[#52CDCB] border border-[#52CDCB]/30 rounded-full text-xs font-bold uppercase tracking-wider">
                                Área do Cliente
                            </div>

                            {/* Foto do Perfil se disponível */}
                            {user?.photoURL && (
                                <div className="flex justify-center my-4">
                                    <div className="relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#52CDCB] to-[#487CBF] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                                        <img
                                            src={user.photoURL}
                                            alt={user.displayName || "Usuário"}
                                            className="relative rounded-full h-20 w-20 object-cover border-2 border-slate-800 shadow-md"
                                            referrerPolicy="no-referrer"
                                        />
                                    </div>
                                </div>
                            )}

                            <h1 className="text-2xl font-extrabold text-[#52CDCB]">
                                Olá, {user?.displayName || "Cliente"}!
                            </h1>
                            <p className="text-slate-400 text-sm">
                                Seja bem-vindo à sua área privativa na Kuberlink.
                            </p>

                            <div className="mt-8 p-5 bg-slate-850 border border-slate-700/55 rounded-2xl text-left space-y-3 text-sm text-slate-300 font-sans">
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Dados do Perfil</h3>
                                <div><span className="text-[#52CDCB] font-semibold">Nome:</span> {user?.displayName || "Não fornecido"}</div>
                                <div><span className="text-[#52CDCB] font-semibold">E-mail:</span> {user?.email}</div>
                                <div><span className="text-[#52CDCB] font-semibold">UID Firebase:</span> <span className="font-mono text-xs">{user?.uid}</span></div>
                                {clientData?.role && (
                                    <div><span className="text-[#52CDCB] font-semibold">Função:</span> {clientData.role}</div>
                                )}
                                <div>
                                    <span className="text-[#52CDCB] font-semibold">Método de Login:</span>{" "}
                                    <span className="px-2 py-0.5 rounded text-xs bg-slate-700/60 font-semibold uppercase text-slate-200">
                                        {user?.providerData[0]?.providerId === "google.com" ? "Google Account" : "E-mail / Senha"}
                                    </span>
                                </div>
                                {clientData?.lastLoginAt && (
                                    <div>
                                        <span className="text-[#52CDCB] font-semibold">Último Acesso:</span>{" "}
                                        {clientData.lastLoginAt.seconds ? new Date(clientData.lastLoginAt.seconds * 1000).toLocaleString() : "Agora"}
                                    </div>
                                )}
                            </div>

                            {/* Detalhes de Autenticação Expansíveis */}
                            <div className="pt-2 text-left">
                                <button
                                    onClick={() => setShowRawData(!showRawData)}
                                    className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-850 hover:bg-slate-750 border border-slate-700 rounded-xl transition-all text-xs font-semibold text-[#52CDCB] focus:outline-none"
                                >
                                    <span>{showRawData ? "Ocultar" : "Visualizar"} Metadados Recebidos do Google / Auth (JSON)</span>
                                    <svg
                                        className={`w-4 h-4 transform transition-transform duration-200 ${showRawData ? "rotate-180" : ""}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {showRawData && (
                                    <div className="mt-2 p-4 bg-slate-950 border border-slate-800 rounded-xl overflow-x-auto text-left font-mono text-xs text-green-400 max-h-60 whitespace-pre-wrap select-all">
                                        {JSON.stringify(authMetadata, null, 2)}
                                    </div>
                                )}
                            </div>

                            <div className="pt-6">
                                <button
                                    onClick={handleLogout}
                                    className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-md active:scale-95 text-sm"
                                >
                                    Sair do Sistema
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-t border-slate-800 text-center text-xs text-slate-500">
                    &copy; {new Date().getFullYear()} Kuberlink. Área Restrita do Cliente.
                </div>
            </main>
        </NextUIProvider>
    );
}
