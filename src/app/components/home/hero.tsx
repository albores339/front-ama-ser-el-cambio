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
    <header className="w-full lg:max-h-[420px] my-5 flex flex-col lg:flex-row justify-center items-center rounded-lg p-4 max-w-screen-xl mx-auto overflow-hidden">
      {/* Contenido del héroe */}
      <div className="relative w-full lg:w-1/2 flex flex-col" data-aos="fade-up">
        <Image
          src="https://res.cloudinary.com/dnytuotnv/image/upload/v1730180163/fondo_con_degradado_puro_color_cyan_crjwql.jpg"
          alt="Fondo de degradado"
          width={1000}
          height={1000}
          className="object-cover rounded-t-lg h-full" // Asegúrate de que ocupe toda la altura
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-2">
          <h1 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
            Ama Ser el Cambio Asociación Civil.
          </h1>
          <p className="text-base md:text-lg my-2 drop-shadow-lg">
            {"Manos que Dan, Jamás Estarán Vacías."}
          </p>
          <p className="text-base mb-6 drop-shadow-lg">
            ¡Súmate a la Nueva Generación!
          </p>
          <Link href="/donar">
            <GetStartedButton text='Donar' />
          </Link>
        </div>
      </div>
      <div className='w-full lg:w-1/2 flex flex-row p-2 gap-2 h-full items-center'>
        <div className='relative w-1/2 flex flex-col h-full' data-aos="fade-up">
          <Image
            src="https://res.cloudinary.com/dnytuotnv/image/upload/v1730175657/10_iqtpgr.jpg"
            alt="Haciendo comida para personas de la calle"
            width={1920}
            height={1280}
            className='h-full object-cover shadow-lg' // Asegúrate de que ocupe la mitad de la altura
          />
          <div className='absolute bottom-0 left-0 right-0 font-bold text-white text-center p-2'>
            COMIDA EN HOSPITALES
          </div>
        </div>
        <div className='w-1/2 flex flex-col gap-2 h-full'>
          <div className='relative flex-1' data-aos="fade-up">
            <Image
              src="https://res.cloudinary.com/dnytuotnv/image/upload/v1730171627/2_efjept.jpg"
              alt="Haciendo comida para migrantes"
              width={1920}
              height={1280}
              className='h-1/2 object-cover shadow-lg'
            />
            <div className='absolute bottom-0 left-0 right-0 font-bold text-white text-center p-2'>
              COMIDA A MIGRANTES
            </div>
          </div>
          <div className='relative flex-1' data-aos="fade-up">
            <Image
              src="https://res.cloudinary.com/dnytuotnv/image/upload/v1730171525/f27_vemqb5.jpg"
              alt="Juguetes a niños sin recursos"
              width={1920}
              height={1280}
              className='h-1/2 object-cover shadow-lg'
            />
            <div className='absolute bottom-0 left-0 right-0 font-bold text-white text-center p-2'>
              JUGUETES A NIÑOS SIN RECURSOS
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
