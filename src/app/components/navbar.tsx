// src/app/components/Navbar.tsx
"use client"; // Agrega esto para que sea un componente del cliente

// src/components/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Importamos los iconos de Heroicons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b-4 border-cyan-500 bg-gray-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Menú hamburguesa a la izquierda */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-cyan-500" /> // Ícono de cerrar
          ) : (
            <Bars3Icon className="w-6 h-6 text-cyan-500 font-bold" /> // Ícono de hamburguesa
          )}
        </button>

        {/* Logo centrado */}
        <div className="flex-grow flex justify-center">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="/images/favicon.gif"
              className="h-12"
              alt="Flowbite Logo"
            />
          </Link>
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="/images/logotipo.gif"
              className="h-10"
              alt="Flowbite Logo"
            />
          </Link>
        </div>

        {/* Botón "Contáctanos" a la derecha */}
        <div className="hidden md:flex">
          <Link href="/contact" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Contáctanos
          </Link>
        </div>
      </div>

      {/* Menú hamburguesa desplegable */}
      {isOpen && (
        <div className="w-full bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <ul className="flex flex-col font-medium mt-4 rounded-lg">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
