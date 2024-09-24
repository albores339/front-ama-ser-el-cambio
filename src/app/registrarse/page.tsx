import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaGoogle } from 'react-icons/fa'; // Iconos de Facebook y Google

const Registrarse: React.FC = () => {
  return (
    <>
      <Head>
        <title>Registrarse | Ama Ser el Cambio AC</title>
        <meta
          name="description"
          content="Crea tu cuenta en Ama Ser el Cambio AC y únete a nuestra comunidad para contribuir al cambio."
        />
      </Head>

      <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 my-10">
        <div className="max-w-md w-full space-y-8">
          <Link href={"/"} className="flex flex-col items-center">
            {/* Logo centrado */}
            <Image
              src="/images/Logo-AMA (1).gif" // Ruta de la imagen del logo (asegúrate de que esté en la carpeta /public/images)
              alt="Ama Ser el Cambio AC Logo"
              width={300}
              height={300}
              className="mx-auto mb-4"
            />

            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Crea tu cuenta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              ¿Ya tienes una cuenta?{' '}
              <Link href="/login" className="font-medium text-cyan-600 hover:text-cyan-500">
                Inicia sesión
              </Link>
            </p>
          </Link>

          {/* Botones de autenticación con Google y Facebook */}
          <div className="flex flex-col space-y-4">
            <button
              className="group relative w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
              aria-label="Registrarse con Facebook"
              disabled
            >
              <FaFacebook className="mr-2 h-5 w-5" />
              Continuar con Facebook
            </button>
            <button
              className="group relative w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-300"
              aria-label="Registrarse con Google"
              disabled
            >
              <FaGoogle className="mr-2 h-5 w-5" />
              Continuar con Google
            </button>
          </div>

          <div className="relative flex justify-center items-center my-4">
            <span className="absolute bg-white px-4 text-gray-500">O</span>
            <hr className="w-full border-gray-300" />
          </div>

          <form className="space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  placeholder="Nombre completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  placeholder="Correo electrónico"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  placeholder="Contraseña"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Registrarse;
