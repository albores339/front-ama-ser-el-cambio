"use client"; // Esto es necesario para que el componente sea renderizado en el lado del cliente

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: number;
};

const FormularioRegistro: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Guardar el token en el localStorage o en cookies
        localStorage.setItem('token', result.token); // Puedes usar cookies si prefieres
        localStorage.setItem('role', result.role); // Guarda el rol

        Swal.fire({
          title: 'Registro exitoso',
          text: 'Tu cuenta ha sido creada correctamente.',
          icon: 'success',
          confirmButtonColor: '#0E7490', // Cyan 700
          confirmButtonText: 'Aceptar',
        }).then(() => {
          // Redirigir a la página principal o al dashboard
          router.push('/');
        });
      } else {
        Swal.fire({
          title: 'Error en el registro',
          text: Array.isArray(result.message) ? result.message.join(', ') : result.message,
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
    <form className="space-y-6 text-stone-700" onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-md shadow-sm -space-y-px">
        {/* Campo Nombre */}
        <div>
          <label htmlFor="name" className="sr-only">Nombre completo</label>
          <input
            id="name"
            {...register('name', { required: 'El nombre es obligatorio' })}
            type="text"
            className={`appearance-none rounded-t-md block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-stone-400'} placeholder-stone-500 text-gray-900`}
            placeholder="Nombre completo"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Campo Correo */}
        <div>
          <label htmlFor="email" className="sr-only">Correo electrónico</label>
          <input
            id="email"
            {...register('email', {
              required: 'El correo es obligatorio',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Correo no válido',
              },
            })}
            type="email"
            className={`appearance-none block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-stone-400'} placeholder-stone-500 text-gray-900`}
            placeholder="Correo electrónico"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Campo Teléfono */}
        <div>
          <label htmlFor="phone" className="sr-only">Número de teléfono</label>
          <input
            id="phone"
            {...register('phone', {
              required: 'El número de teléfono es obligatorio',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Número de teléfono no válido',
              },
            })}
            type="tel"
            className={`appearance-none block w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-stone-400'} placeholder-stone-500 text-gray-900`}
            placeholder="Número de teléfono"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        {/* Campo Contraseña */}
        <div>
          <label htmlFor="password" className="sr-only">Contraseña</label>
          <input
            id="password"
            {...register('password', {
              required: 'La contraseña es obligatoria',
              minLength: {
                value: 6,
                message: 'La contraseña debe tener al menos 6 caracteres',
              },
            })}
            type="password"
            className={`appearance-none block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-stone-400'} placeholder-stone-500 text-gray-900`}
            placeholder="Contraseña"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        {/* Campo Confirmar Contraseña */}
        <div>
          <label htmlFor="confirmPassword" className="sr-only">Repetir contraseña</label>
          <input
            id="confirmPassword"
            {...register('confirmPassword', {
              required: 'Repite la contraseña',
              validate: (value) => value === watch('password') || 'Las contraseñas no coinciden',
            })}
            type="password"
            className={`appearance-none block w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-stone-400'} placeholder-stone-500 text-gray-900`}
            placeholder="Repite la contraseña"
          />
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-700 hover:bg-cyan-800"
          disabled={loading}
        >
          {loading ? 'Registrando...' : 'Registrarse'}
        </button>
      </div>
    </form>
  );
};

export default FormularioRegistro;
