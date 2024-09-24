import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Login: React.FC = () => {
  return (
    <>
      <Head>
        <title>Iniciar sesión | Ama Ser el Cambio AC</title>
        <meta
          name="description"
          content="Inicia sesión en Ama Ser el Cambio AC y continúa ayudando a la comunidad."
        />
      </Head>

      <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Link href={"/"}>
            <Image
              src="/images/Logo-AMA (1).gif"
              alt="Logo de Ama Ser el Cambio AC"
              className="mx-auto"
              width={300}
              height={300}
            />
            <h2 className="text-center text-3xl font-extrabold text-gray-900 mt-4">
              Iniciar sesión
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              ¿Aún no tienes una cuenta?{' '}
              <Link href="/registrarse" className="font-medium text-cyan-600 hover:text-cyan-500">
                Regístrate
              </Link>
            </p>
          </Link>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
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
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
