"use client";

import React from "react";
import LoginForm from "../components/login-form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sections from "../components/Sections";
import ContactForm from "../components/Form";
import ScrollToTop from "react-scroll-to-top";
import { NextUIProvider } from "@nextui-org/react";

export default function LoginPage() {
    return (
        <NextUIProvider>
            <div className="relative min-h-screen w-full overflow-x-hidden">
                {/* Site em segundo plano de forma passiva */}
                <div className="pointer-events-none select-none opacity-40 blur-[2px]">
                    <Header />
                    <Sections />
                    <ContactForm />
                    <Footer />
                    <ScrollToTop smooth color="#00796B" className="bg-[#10826B] p-1" />
                </div>

                {/* Card de Login exibido em Overlay */}
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-[3px] overflow-y-auto">
                    <div className="w-full max-w-[420px] animate-fadeIn my-8">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </NextUIProvider>
    );
}
