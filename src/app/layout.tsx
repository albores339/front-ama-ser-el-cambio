"use client"; // Marcar el componente como Client Component

import { Montserrat } from 'next/font/google';
import Script from 'next/script';
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer";
import WhatsappButton from "./components/boton-chat";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
  const pathname = usePathname();
  const noLayoutPages = ["/login", "/registrarse"];
  const showLayout = !noLayoutPages.includes(pathname);

  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} flex flex-col min-h-screen`} // Aplica flexbox para la estructura del layout
        style={{ backgroundColor: "white" }}
      >
        {GA_TRACKING_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} strategy="lazyOnload" />
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
        <AuthProvider>
          {/* Navbar visible si es requerido */}
          {showLayout && <Navbar />}

          {/* Contenedor principal que crece para ocupar el espacio disponible */}
          <main className={`${showLayout ? "mt-16" : ""} flex-grow mx-auto w-full bg-white`}>
            {children}
          </main>

          {/* Botón de WhatsApp y Footer visibles si es requerido */}
          {showLayout && <WhatsappButton />}
          {showLayout && <Footer />}
        </AuthProvider>
      </body>
    </html>
  );
}
