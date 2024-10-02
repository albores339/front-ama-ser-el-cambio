"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer";
import WhatsappButton from "./components/boton-chat";

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  // Páginas donde no se mostrarán el Navbar y Footer
  const noLayoutPages = ["/login", "/registrarse"];

  const showLayout = !noLayoutPages.includes(pathname);

  return (
    <>
      {showLayout && <Navbar />}
      <div className={showLayout ? "mt-20 max-w-screen-xl mx-auto bg-white" : "max-w-screen-lg mx-auto bg-white"}>
        {children}
      </div>
      {showLayout && <WhatsappButton />}
      {showLayout && <Footer />}
    </>
  );
};

export default LayoutWrapper;
