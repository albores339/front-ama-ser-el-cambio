"use client";

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

const FormularioRegistro: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="name" className="sr-only">Nombre completo</label>
          <input
            id="name"
            {...register('name', { required: 'El nombre es obligatorio' })}
            type="text"
            autoComplete="name"
            className={`appearance-none rounded-t-md relative block w-full px-3 py-2 border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm`}
            placeholder="Nombre completo"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

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
            autoComplete="email"
            className={`appearance-none block w-full px-3 py-2 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm`}
            placeholder="Correo electrónico"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">Número de teléfono</label>
          <input
            id="phone"
            {...register('phone', {
              required: 'El número de teléfono es obligatorio',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Número de teléfono no válido, deben ser 10 dígitos',
              },
            })}
            type="tel"
            autoComplete="tel"
            className={`appearance-none block w-full px-3 py-2 border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm`}
            placeholder="Número de teléfono"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

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
            autoComplete="current-password"
            className={`appearance-none rounded-b-md block w-full px-3 py-2 border ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm`}
            placeholder="Contraseña"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
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
  );
};

export default FormularioRegistro;
