"use client"; // Para forzar el renderizado en el cliente

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '../context/AuthContext';

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { setToken, setRole } = useAuth(); // Usar el contexto de autenticación para manejar el token

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        const { token, role } = result; // Recibir el token y el rol desde el backend
  
        // Guardar el token y el rol en el Local Storage
        localStorage.setItem('token', token);
        localStorage.setItem('role', role); // Guardar el rol del usuario
  
        // Actualizar el contexto de autenticación con el token y el rol
        setToken(token);
        setRole(role); // Actualizamos el rol en el contexto (esto lo explicaré más adelante)
  
        // Mostrar alerta de éxito
        Swal.fire({
          title: 'Inicio de sesión exitoso',
          text: 'Bienvenido de nuevo.',
          icon: 'success',
          confirmButtonColor: '#0E7490', // Cyan 700
          confirmButtonText: 'Aceptar',
        }).then(() => {
          router.push('/'); // Redirige a la página principal
        });
      } else {
        Swal.fire({
          title: 'Error en el inicio de sesión',
          text: result.message || 'Credenciales inválidas',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
    } catch {
      Swal.fire({
        title: 'Error del servidor',
        text: 'Hubo un problema con el servidor, intenta de nuevo más tarde.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <Head>
        <title>Iniciar sesión | Ama Ser el Cambio AC</title>
        <meta name="description" content="Inicia sesión en Ama Ser el Cambio AC y continúa ayudando a la comunidad." />
      </Head>

      <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 text-stone-700">
        <div className="max-w-md w-full space-y-8">
          <Link href="/">
            <Image
              src="/images/Logo-AMA (1).gif"
              alt="Logo de Ama Ser el Cambio AC"
              width={300}
              height={300}
              priority
              decoding="async"
              className="mx-auto my-8"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </Link>

          <h2 className="text-center text-3xl font-extrabold mt-4">
            Iniciar sesión
          </h2>

          <p className="mt-2 text-center text-sm">
            ¿Aún no tienes una cuenta?{' '}
            <Link href="/registrarse" className="font-medium text-cyan-700 hover:text-cyan-800">
              Regístrate
            </Link>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              {/* Campo Email */}
              <div>
                <label htmlFor="email" className="sr-only">Correo electrónico</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Correo electrónico"
                  className={`appearance-none rounded-t-md relative block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-stone-400'} placeholder-stone-500 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm`}
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

              {/* Campo Contraseña */}
              <div>
                <label htmlFor="password" className="sr-only">Contraseña</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  className={`appearance-none rounded-b-md relative block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-stone-400'} placeholder-stone-500 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm`}
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

            {/* Botón de envío */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-700 hover:bg-cyan-800 my-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                disabled={loading}
              >
                {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
