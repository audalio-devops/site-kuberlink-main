import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const exo = Exo_2({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kuberlink",
  description: "Kuberlink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={exo.className}>
      <link rel="shortcut icon" href="/favicon.png" />
      <body className="">{children}</body>
    </html>
  );
}
