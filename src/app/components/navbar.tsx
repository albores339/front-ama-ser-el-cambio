"use client"; // Necesario para componentes del cliente

import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Importamos los iconos de Heroicons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-xl z-50 shadow-md">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        
        {/* Menú hamburguesa a la izquierda */}
        <div className="flex-none">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm rounded-lg hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <XMarkIcon className="w-6 h-6 text-red-500" aria-hidden="true" /> 
            ) : (
              <Bars3Icon className="w-6 h-6 text-cyan-500 font-bold" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Logo centrado */}
        <div className="flex-grow flex justify-center">
          <Link href="/" passHref>
            <div className="flex items-center space-x-2">
              <img
                src="/images/favicon.gif"
                className="h-12"
                alt="Logo favicon AMA"
                aria-label="Inicio"
              />
              <img
                src="/images/logotipo.gif"
                className="h-12"
                alt="Logotipo AMA"
                aria-label="Inicio"
              />
            </div>
          </Link>
        </div>

        {/* Botones a la derecha */}
        <div className="flex-none hidden md:flex space-x-4">
          <Link href="/contact" passHref>
            <span className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Contáctanos
            </span>
          </Link>
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <div className="w-full bg-gray-50 shadow-xl">
          <ul className="flex flex-col font-medium mt-4 rounded-lg">
            <li>
              <Link href="/contact" passHref>
                <span className="block py-2 px-3 text-white bg-cyan-500 rounded">
                  Contáctanos
                </span>
              </Link>
            </li>
            <li>
              <Link href="/login" passHref>
                <span className="block py-2 px-3 text-gray-900 rounded hover:bg-stone-100">
                  Iniciar Sesión
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <span className="block py-2 px-3 text-gray-900 rounded hover:bg-stone-100">
                  Quiénes Somos
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
