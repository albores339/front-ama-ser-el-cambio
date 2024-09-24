// src/app/layout.tsx (sin "use client")

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WhatsappButton from "./components/boton-chat";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ama Ser el Cambio",
  description: "Página oficial de Ama Ser el Cambio AC, una asociación civil sin fines de lucro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "white" }}
      >
        <div className="mt-20 max-w-screen-lg mx-auto bg-white">
          {children}
        </div>
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
