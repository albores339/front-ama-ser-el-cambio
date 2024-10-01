"use client"; // Necesario para componentes del cliente

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UserIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
  UsersIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid"; // Importamos los iconos necesarios
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { isAdmin, isUser } = useAuth(); // Aquí accedemos al contexto

  const toggleMenu = () => setIsOpen(!isOpen);

  // Función para cerrar el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // Cerrar menú al hacer clic en un enlace
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-xl z-50 shadow-md border-b-4 border-cyan-500">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <button
          onClick={toggleMenu}
          className="p-2 w-10 h-10 text-sm rounded-lg hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-red-500" aria-hidden="true" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-cyan-500" aria-hidden="true" />
          )}
        </button>

        <div className="flex-grow flex px-4">
          <Link href="/" passHref>
            <div className="flex items-center space-x-2">
              <Image
                src="/images/favicon.gif"
                alt="Logo favicon AMA"
                width={48}
                height={48}
                className="h-12 w-auto"
                loading="lazy"
              />
              <Image
                src="/images/logotipo.gif"
                alt="Logotipo AMA"
                width={150}
                height={50}
                className="h-12 w-auto hidden md:block"
                loading="lazy"
              />
            </div>
          </Link>
        </div>

        <div className="space-x-4">
          {isAdmin && (
            <Link
              href="/dashboard"
              className="bg-cyan-700 text-white px-5 py-2 rounded-2xl hover:bg-cyan-600 transition-all duration-300"
            >
              Dashboard
            </Link>
          )}
          {!isAdmin && !isUser && (
            <Link
              href="/donar"
              className="bg-lime-700 text-white px-5 py-2 rounded-2xl hover:bg-lime-600 transition-all duration-300"
            >
              Donar
            </Link>
          )}
        </div>
      </div>

      {isOpen && (
        <div ref={menuRef} className="w-full shadow-xl">
          <ul className="flex flex-col font-medium mt-4 rounded-lg">
            <li>
              <Link
                href="/registrarse"
                onClick={closeMenu}
                className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-stone-100"
              >
                <PencilSquareIcon className="w-5 h-5 mr-2 text-cyan-600" />{" "}
                Registrarse
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                onClick={closeMenu}
                className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-stone-100"
              >
                <UserIcon className="w-5 h-5 mr-2 text-cyan-600" /> Iniciar
                Sesión
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={closeMenu}
                className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-stone-100"
              >
                <HomeIcon className="w-5 h-5 mr-2 text-cyan-600" /> Quiénes
                Somos
              </Link>
            </li>
            <li>
              <Link
                href="/iniciativas"
                onClick={closeMenu}
                className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-stone-100"
              >
                <UsersIcon className="w-5 h-5 mr-2 text-cyan-600" /> Nuestras
                Iniciativas
              </Link>
            </li>
            <li>
              <Link
                href="/donar"
                onClick={closeMenu}
                className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-stone-100"
              >
                <HeartIcon className="w-5 h-5 mr-2 text-red-600" /> Donaciones
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                onClick={closeMenu}
                className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-stone-100"
              >
                <ChatBubbleBottomCenterTextIcon className="w-5 h-5 mr-2 text-cyan-600" />{" "}
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
