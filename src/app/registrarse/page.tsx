import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

//const ButtonRedesSociales = dynamic(() => import('../components/registro/RegistroRedes'), { ssr: false });
const FormularioRegistro = dynamic(() => import('../components/registro/FormularioRegistro'), { ssr: false });

const Registrarse: React.FC = () => {
  return (
    <>
      <Head>
        <title>Registrarse | Ama Ser el Cambio AC</title>
        <meta name="description" content="Crea tu cuenta en Ama Ser el Cambio AC y únete a nuestra comunidad para contribuir al cambio." />
      </Head>

      <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 my-10">
        <div className="max-w-md w-full space-y-8">
          <Link href="/" className="flex flex-col items-center">
            <Image
              src="/images/Logo-AMA (1).gif"
              alt="Logo de Ama Ser el Cambio AC"
              width={300}
              height={300}
              priority // Marca la imagen como prioritaria
              decoding="async"
              className="mx-auto"
              sizes="(max-width: 768px) 100vw, 300px" // Optimiza el tamaño según la pantalla
            />
          </Link>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">Crea tu cuenta</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              ¿Ya tienes una cuenta?{' '}
              <Link href="/login" className="font-medium text-cyan-700 hover:text-cyan-800">Inicia sesión</Link>
            </p>
            
          {/* Queda pendiente */}
          {/*<div className="flex flex-col space-y-4"> 
            <ButtonRedesSociales provider="facebook" text="Continuar con Facebook" />
            <ButtonRedesSociales provider="google" text="Continuar con Google" />
          </div>

          <div className="relative flex justify-center items-center my-4">
            <span className="absolute bg-white px-4 text-stone-700">O</span>
            <hr className="w-full border-gray-300" />
          </div>*/}

          <FormularioRegistro />
        </div>
      </main>
    </>
  );
};

export default Registrarse;
