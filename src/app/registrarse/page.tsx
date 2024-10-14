import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import ShineBorder from '@/components/ui/shine-border'; // Asegúrate de que la ruta es correcta
import { HomeModernIcon, ArrowLongLeftIcon } from '@heroicons/react/24/solid';

// Importar el formulario de registro de forma dinámica
const FormularioRegistro = dynamic(() => import('../components/registro/FormularioRegistro'), { ssr: false });

const Registrarse: React.FC = () => {
  return (
    <>
      <Head>
        <title>Registrarse | Ama Ser el Cambio AC</title>
        <meta name="description" content="Crea tu cuenta en Ama Ser el Cambio AC y únete a nuestra comunidad para contribuir al cambio." />
      </Head>

      <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 text-stone-700 md:bg-violet-50">
        <div className="flex items-center w-full space-y-0 md:space-y-0 flex-col md:flex-row max-w-screen-lg shadow-2xl rounded-xl lg:pr-4 bg-white my-4 mb-8 py-4">
          {/* Contenedor de la Imagen */}
          <ShineBorder
            className='flex-shrink-0 w-full md:w-1/2 p-4 flex flex-col text-center text-cyan-700 justify-center lg:py-8 rounded-lg m-4 shadow-md'
            color={["#06B6D4", "#8B5CF6", "#FB7185"]} // Colores para el efecto shine
          >
            <Link href="/">
              <Image
                src="/images/Logo-AMA (1).gif"
                alt="Logo de Ama Ser el Cambio AC"
                width={300}
                height={300}
                priority
                decoding="async"
                className="mx-auto lg:my-16"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </Link>
            <p>¡Gracias por formar parte de esta comunidad!</p>
          </ShineBorder>
          
          {/* Contenedor del Formulario */}
          <div className='bg-cyan-700 rounded-xl py-14 w-full md:w-1/2 flex flex-col items-center'> 
            <Link href="/" className="flex flex-row mb-4">
              <ArrowLongLeftIcon className='w-10 h-10 text-white' /> 
              <HomeModernIcon className='w-10 h-10 text-white' />
            </Link>

            <h2 className="text-center text-3xl font-extrabold text-white mt-4">
              Crea tu cuenta
            </h2>

            <p className="mt-2 text-center text-sm text-white my-2">
              ¿Ya tienes una cuenta?{' '}
              <Link href="/login" className="font-medium text-white hover:text-cyan-200">
                Inicia sesión
              </Link>
            </p>

            {/* Componente FormularioRegistro */}
            <FormularioRegistro />
          </div>
        </div>
      </main>
    </>
  );
};

export default Registrarse;
