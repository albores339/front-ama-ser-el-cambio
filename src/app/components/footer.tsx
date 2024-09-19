import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importamos los íconos desde React Icons
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyan-600 shadow text-white">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <Image src="/images/Logo-AMA (1).gif" className="h-16 mr-3" alt="Logo AMA" loading='lazy' />
            <span className="self-center text-2xl font-semibold">AMA Ser el Cambio A.C.</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
            <li>
              <a href="/about" className="mr-4 hover:underline md:mr-6">Acerca de</a>
            </li>
            <li>
              <a href="/projects" className="mr-4 hover:underline md:mr-6">Proyectos</a>
            </li>
            <li>
              <a href="/donations" className="mr-4 hover:underline md:mr-6">Donaciones</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contacto</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto" />
        <div className="flex justify-between items-center">
          <span className="text-sm">© 2024 AMA Ser el Cambio AC. Todos los derechos reservados.</span>
          <div className="flex space-x-6">
            <a href="https://facebook.com" className="">
              <FaFacebook className="h-6 w-6" aria-hidden="true" />
            </a>
            <a href="https://twitter.com" className="">
              <FaTwitter className="h-6 w-6" aria-hidden="true" />
            </a>
            <a href="https://instagram.com" className="">
              <FaInstagram className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
