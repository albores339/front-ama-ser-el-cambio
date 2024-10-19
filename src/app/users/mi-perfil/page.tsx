"use client";

import { useAuth } from "@/app/context/AuthContext";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserCircleIcon, InboxIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/solid";
import Swal from 'sweetalert2';
import ShineBorder from "@/components/ui/shine-border";
import Link from "next/link";
import Image from "next/image";

interface ProfileFormData {
  name: string;
  email: string;
  phone?: string;
}

const EditProfile = () => {
  const { token } = useAuth();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProfileFormData>();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
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

      Swal.fire({
        title: 'Perfil actualizado correctamente',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      const errorMessage = (error instanceof Error) ? error.message : "Ocurrió un error inesperado.";
      Swal.fire({
        title: 'Error al actualizar el perfil',
        text: errorMessage,
        icon: 'error',
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4 py-8">
      <div className="flex flex-col md:flex-row w-full max-w-screen-lg shadow-2xl rounded-xl overflow-hidden">
        <ShineBorder
          className='flex-shrink-0 w-full md:w-1/2 p-6 flex flex-col items-center text-center text-cyan-700 bg-white'
          color={["#06B6D4", "#8B5CF6", "#FB7185"]}
        >
          <Link href="/">
            <Image
              src="/images/Logo-AMA (1).gif"
              alt="Logo de Ama Ser el Cambio AC"
              width={300}
              height={300}
              priority
              decoding="async"
              className="mx-auto lg:my-8"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </Link>
          <p className="mt-2">¡Gracias por formar parte de esta comunidad!</p>
        </ShineBorder>

        <div className="bg-cyan-700 rounded-xl py-10 w-full md:w-1/2 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
            <UserCircleIcon className="h-10 w-10 mr-2" />
            Editar Perfil
          </h2>
          <form onSubmit={handleSubmit(handleUpdateProfile)} className="space-y-6 w-full px-4">
            <div>
              <label htmlFor="name" className="block font-medium text-white">Nombre</label>
              <div className="relative">
                <UserIcon className="absolute left-2 top-3 h-5 w-5 text-cyan-500" />
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "El nombre es obligatorio" })}
                  className={`w-full pl-10 p-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Tu nombre"
                />
              </div>
              {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block font-medium text-white">Correo Electrónico</label>
              <div className="relative">
                <InboxIcon className="absolute left-2 top-3 h-5 w-5 text-cyan-500" />
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Correo inválido",
                    },
                  })}
                  className={`w-full pl-10 p-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Tu correo electrónico"
                />
              </div>
              {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block font-medium text-white">Teléfono</label>
              <div className="relative">
                <PhoneIcon className="absolute left-2 top-3 h-5 w-5 text-cyan-500" />
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Teléfono inválido, debe tener 10 dígitos",
                    },
                  })}
                  className={`w-full pl-10 p-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Tu teléfono"
                />
              </div>
              {errors.phone && <p className="text-red-500 mt-1">{errors.phone.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-cyan-800 text-white rounded-md hover:bg-cyan-900 transition-colors"
            >
              Actualizar Perfil
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
