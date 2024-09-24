// src/app/layout.tsx

import type { Metadata } from "next";
import { Montserrat } from '@next/font/google';
import "./globals.css";
import LayoutWrapper from "./client"; // Importar el componente separado

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Puedes agregar más pesos según lo necesites
  variable: '--font-montserrat', // Nombre de la variable CSS que puedes usar luego
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
        className={montserrat.variable}
        style={{ backgroundColor: "white" }}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
