"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ReactNode, useState } from "react";
import Sections from "./components/Sections";
import ContactForm from "./components/Form";
import { NextUIProvider } from "@nextui-org/react";
import ScrollToTop from "react-scroll-to-top";

interface LayoutProps {
  children: ReactNode;
}

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <Header />
        <Sections />
        <ContactForm />
        <Footer />
        <ScrollToTop smooth color="#00796B" className="bg-[#10826B]  p-1" />
      </main>
    </NextUIProvider>
  );
}
