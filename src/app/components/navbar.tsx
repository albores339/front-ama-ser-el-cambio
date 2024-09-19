// src/app/components/Navbar.tsx
"use client"; // Agrega esto para que sea un componente del cliente

import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = React.useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-white text-blue-600 w-full fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Icono de Menú Mobile */}
        <div className="flex items-center">
          <button
            onClick={toggleNav}
            className="text-blue-600 focus:outline-none lg:hidden"
          >
            {navOpen ? (
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Links del Navbar */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/conocenos" className="hover:underline">
            Conócenos
          </Link>
        </div>

        {/* Espacio para el Logo */}
        <Link href={"/"} className="flex-grow flex items-center justify-center">
          <img src="/images/logotipo.gif" alt="Logo" className="h-14" />
        </Link>

        {/* Menu Mobile */}
        <div
          className={`${
            navOpen ? 'block' : 'hidden'
          } lg:hidden absolute top-16 left-0 w-full bg-blue-500 text-white py-4 space-y-4`}
        >
          <Link href="/conocenos" className="block text-center hover:underline">
            Conócenos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;