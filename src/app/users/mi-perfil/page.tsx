"use client";

import { useAuth } from "@/app/context/AuthContext"; // Asegúrate de que el contexto esté disponible
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LockClosedIcon, InboxIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/solid";
import Swal from 'sweetalert2'; // Importa SweetAlert2

interface ProfileFormData {
  name: string;
  email: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

const EditProfile = () => {
  const { token } = useAuth(); // Obtener el token del contexto

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<ProfileFormData>(); // Inicializamos el hook form

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        // Asignamos los valores obtenidos al formulario
        setValue("name", data.name);
        setValue("email", data.email);
        setValue("phone", data.phone || "");
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token, setValue]);

  const handleUpdateProfile = async (data: ProfileFormData) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/me`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error updating profile");
      }

      // Muestra la alerta de éxito
      Swal.fire({
        title: 'Perfil actualizado correctamente',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      // Muestra la alerta de error
      Swal.fire({
        title: 'Error al actualizar el perfil',
        text: error.message,
        icon: 'error',
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  const password = watch("password");

  return (
    <div className="max-w-lg mx-auto my-28"> {/* Ajuste de márgenes */}
      <h2 className="text-2xl font-semibold mb-6 text-cyan-700">Editar Perfil</h2>
      <form onSubmit={handleSubmit(handleUpdateProfile)} className="space-y-6">
        {/* Nombre */}
        <div>
          <label htmlFor="name" className="block font-medium text-stone-700">Nombre</label>
          <div className="relative">
            <UserIcon className="absolute left-2 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              id="name"
              {...register("name", { required: "El nombre es obligatorio" })}
              className={`w-full pl-10 p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Tu nombre"
            />
          </div>
          {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
        </div>

        {/* Correo Electrónico */}
        <div>
          <label htmlFor="email" className="block font-medium text-stone-700">Correo Electrónico</label>
          <div className="relative">
            <InboxIcon className="absolute left-2 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Correo inválido",
                },
              })}
              className={`w-full pl-10 p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Tu correo electrónico"
            />
          </div>
          {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="phone" className="block font-medium text-stone-700">Teléfono</label>
          <div className="relative">
            <PhoneIcon className="absolute left-2 top-3 h-5 w-5 text-gray-400" />
            <input
              type="tel"
              id="phone"
              {...register("phone", {
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Teléfono inválido, debe tener 10 dígitos",
                },
              })}
              className={`w-full pl-10 p-2 border rounded ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Tu teléfono"
            />
          </div>
          {errors.phone && <p className="text-red-500 mt-1">{errors.phone.message}</p>}
        </div>

        {/* Nueva Contraseña */}
        <div>
          <label htmlFor="password" className="block font-medium text-stone-700">Nueva Contraseña</label>
          <div className="relative">
            <LockClosedIcon className="absolute left-2 top-3 h-5 w-5 text-gray-400" />
            <input
              type="password"
              id="password"
              {...register("password", {
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
              })}
              className={`w-full pl-10 p-2 border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Nueva contraseña"
            />
          </div>
          {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
        </div>

        {/* Confirmar Contraseña */}
        <div>
          <label htmlFor="confirmPassword" className="block font-medium text-stone-700">Confirmar Contraseña</label>
          <div className="relative">
            <LockClosedIcon className="absolute left-2 top-3 h-5 w-5 text-gray-400" />
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                validate: (value) => value === password || "Las contraseñas no coinciden",
              })}
              className={`w-full pl-10 p-2 border rounded ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Confirmar nueva contraseña"
            />
          </div>
          {errors.confirmPassword && <p className="text-red-500 mt-1">{errors.confirmPassword.message}</p>}
        </div>

        {/* Botón de enviar */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800 transition-colors"
        >
          Actualizar Perfil
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
