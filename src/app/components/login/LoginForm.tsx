// components/LoginForm.tsx
"use client";

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';

type FormData = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { setToken, setRole } = useAuth();

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
        const { token, role } = result;
        
        // Guardar token y rol en el contexto de autenticación y Local Storage
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);

        setToken(token);
        setRole(role);

        // Alerta de éxito con temporizador
        Swal.fire({
          title: 'Inicio de sesión exitoso',
          text: 'Bienvenido de nuevo.',
          icon: 'success',
          confirmButtonColor: '#0E7490',
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then(() => {
          // Redirigir según el rol del usuario
          if (role === 'admin' || role === 'user' || role === 'donador') {
            router.push('/user');
          } else {
            // Aquí puedes especificar una ruta alternativa para otros roles en el futuro
            router.push('/'); // Redirige a la página principal u otra según lo necesario
          }
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
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6 text-stone-700">
      <div className="rounded-md shadow-sm w-72 lg:w-96">
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
          {errors.email && <p className="text-white text-xs mt-1">{errors.email.message}</p>}
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
          {errors.password && <p className="text-white text-xs mt-1">{errors.password.message}</p>}
        </div>
      </div>

      {/* Botón de envío */}
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-white text-base font-medium rounded-md text-white bg-cyan-700 hover:bg-cyan-800 my-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          disabled={loading}
        >
          {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
