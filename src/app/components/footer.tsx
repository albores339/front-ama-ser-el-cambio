import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyan-700 text-white">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <Image 
              src="/images/favicon.gif" 
              alt="Logo AMA" 
              width={48} 
              height={48} 
              loading="lazy"
              className="h-12 w-auto" 
            />
            <span className="ml-3 text-2xl font-semibold">AMA Ser el Cambio A.C.</span>
          </a>

          <ul className="flex flex-wrap justify-center sm:justify-start mb-4 sm:mb-0">
            <li><a href="/about" className="hover:underline mr-4">Acerca de</a></li>
            <li><a href="/iniciativas" className="hover:underline mr-4">Proyectos</a></li>
            <li><a href="/donar" className="hover:underline mr-4">Donaciones</a></li>
            <li><a href="/contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        <hr className="my-4 border-gray-200" />

        <div className="flex justify-between items-center">
          <span className="text-sm">&copy; 2024 AMA Ser el Cambio AC. Todos los derechos reservados.</span>

          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61558179819875" aria-label="Facebook">
              <FaFacebook className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/amaserelcambio/" aria-label="Instagram">
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <a 
            href="/aviso-privacidad" 
            className="text-sm hover:underline mr-4"
          >
            Aviso de Privacidad
          </a>
          <a 
            href="/terminos-condiciones" 
            className="text-sm hover:underline"
          >
            Términos y Condiciones
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
