// src/app/layout.tsx

import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import Script from 'next/script'; // Importamos el componente Script para agregar Google Analytics
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
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID; // Cargar desde variables de entorno

  return (
    <html lang="es">
      <body
        className={montserrat.variable}
        style={{ backgroundColor: "white" }}
      >
        {/* Agregamos el script de Google Analytics */}
        {GA_TRACKING_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `}
            </Script>
          </>
        )}

        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
