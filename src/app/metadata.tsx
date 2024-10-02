// src/app/layout.tsx (sin "use client")

import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import WhatsappButton from "./components/boton-chat";

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
        className={`antialiased`}
        style={{ backgroundColor: "white" }}
      >
        <div className="mt-20 max-w-screen-xl mx-auto bg-white">
          {children}
        </div>
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
