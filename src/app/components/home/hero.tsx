"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Asegúrate de importar los estilos de AOS
import GetStartedButton from '../BotonDonar';

const HeroSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa AOS con una duración de 1000ms
  }, []);

  return (
    <header className="relative w-full h-full bg-gradient-to-b from-cyan-500 to-blue-800 text-white flex flex-col justify-center items-center">
      {/* Imagen de fondo */}
      <Image
        src="/images/hero.webp"
        alt="Hero image"
        width={1280}
        height={720}
        sizes="100vw"
        priority
        decoding="async"
        className="object-cover w-full h-full absolute top-0 left-0 z-0 brightness-50"
      />

      {/* Contenido del héroe */}
      <div className="relative z-1 text-center px-6 py-20" data-aos="fade-up">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">
          Ama Ser el Cambio A.C.
        </h1>
        <p className="text-3xl mt-4 mb-8 text-lime-200 drop-shadow-lg">
          {"Manos que Dan, Jamás Estarán Vacías."}
        </p>
        <p className="text-xl mb-12 text-white drop-shadow-lg">
          ¡Súmate a la Nueva Generación!
        </p>
        <Link href="/donar">
          <GetStartedButton text='Donar'></GetStartedButton>
        </Link>
      </div>
    </header>
  );
};

export default HeroSection;
