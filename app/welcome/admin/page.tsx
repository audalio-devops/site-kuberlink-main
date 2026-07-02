"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { doc, getDoc, DocumentData } from "firebase/firestore";
import { auth, db } from "../../../lib/firebase";
import { NextUIProvider } from "@nextui-org/react";
import Image from "next/image";

export default function AdminWelcomePage() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [adminData, setAdminData] = useState<DocumentData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (loggedUser) => {
            if (!loggedUser) {
                router.push("/login");
                return;
            }

            try {
                const docRef = doc(db, "admins", loggedUser.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setUser(loggedUser);
                    setAdminData(docSnap.data());
                } else {
                    // Não autorizado como admin
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

    return (
        <NextUIProvider>
            <main className="w-full min-h-screen bg-slate-900 text-white flex flex-col justify-between font-sans">
                <div className="container mx-auto px-4 py-16 flex-1 flex flex-col items-center justify-center">
                    <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 max-w-lg w-full shadow-2xl relative overflow-hidden">
                        {/* Efeito visual de gradiente de fundo */}
                        <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#487CBF]/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-[#10826B]/20 rounded-full blur-2xl"></div>

                        <div className="flex justify-center mb-6">
                            <Image src="/logo-branca.png" width={180} height={60} alt="Kuberlink" className="h-12 w-auto object-contain" />
                        </div>

                        <div className="text-center space-y-4 relative z-10">
                            <div className="inline-block px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-xs font-bold uppercase tracking-wider">
                                Painel Administrativo
                            </div>
                            <h1 className="text-2xl font-extrabold text-[#52CDCB]">
                                Olá, Admin!
                            </h1>
                            <p className="text-slate-400 text-sm">
                                Seja bem-vindo à área administrativa da Kuberlink.
                            </p>

                            <div className="mt-8 p-4 bg-slate-850 border border-slate-700/55 rounded-2xl text-left space-y-2 text-sm text-slate-300 font-mono">
                                <div><span className="text-[#5965F3]">UID:</span> {user?.uid}</div>
                                <div><span className="text-[#5965F3]">E-mail:</span> {user?.email}</div>
                                {adminData?.role && (
                                    <div><span className="text-[#5965F3]">Cargo:</span> {adminData.role}</div>
                                )}
                                {adminData?.lastLoginAt && (
                                    <div>
                                        <span className="text-[#5965F3]">Último Acesso:</span>{" "}
                                        {adminData.lastLoginAt.seconds ? new Date(adminData.lastLoginAt.seconds * 1000).toLocaleString() : "Agora"}
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
                    &copy; {new Date().getFullYear()} Kuberlink. Painel Administrativo Seguro.
                </div>
            </main>
        </NextUIProvider>
    );
}
