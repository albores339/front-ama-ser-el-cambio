"use client"; // <-- Esta línea forza el renderizado del componente en el cliente

import React from 'react';
import { useForm } from 'react-hook-form';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Iniciar sesión | Ama Ser el Cambio AC</title>
        <meta name="description" content="Inicia sesión en Ama Ser el Cambio AC y continúa ayudando a la comunidad." />
      </Head>

      <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Link href={"/"}>
            <Image
              src="/images/Logo-AMA (1).gif"
              alt="Logo de Ama Ser el Cambio AC"
              width={300}
              height={300}
              priority // Marca la imagen como prioritaria
              decoding="async"
              className="mx-auto my-8"
              sizes="(max-width: 768px) 100vw, 300px" // Optimiza el tamaño según la pantalla
            />
          </Link>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mt-4">
            Iniciar sesión
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ¿Aún no tienes una cuenta?{' '}
            <Link href="/registrarse" className="font-medium text-cyan-800 hover:text-cyan-700">
              Regístrate
            </Link>
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Correo electrónico"
                  className={`appearance-none rounded-t-md relative block w-full px-3 py-2 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm`}
                  {...register('email', {
                    required: 'El correo es obligatorio',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: 'Correo no válido',
                    },
                  })}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  className={`appearance-none rounded-b-md relative block w-full px-3 py-2 border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm`}
                  {...register('password', {
                    required: 'La contraseña es obligatoria',
                    minLength: {
                      value: 6,
                      message: 'La contraseña debe tener al menos 6 caracteres',
                    },
                  })}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-700 hover:bg-cyan-800 my-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
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
