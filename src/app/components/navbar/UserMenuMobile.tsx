// components/UserMenu.tsx
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import {
  HomeIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
  UsersIcon,
  PencilSquareIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { useAuth } from "@/app/context/AuthContext";

interface UserMenuProps {
  closeMenu: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ closeMenu }) => {
  const { logout } = useAuth();
  const menuRef = useRef<HTMLUListElement>(null);

  const handleLogout = () => {
    logout();
    Swal.fire({
      title: 'Sesión cerrada',
      text: 'Has cerrado sesión exitosamente.',
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu(); // Cierra el menú si se hace clic fuera de él
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <ul ref={menuRef} className="flex flex-col font-semibold mt-4 rounded-lg text-stone-700 mx-8 py-10 text-xl">
      <li>
        <Link
          href="/perfil"
          onClick={closeMenu}
          className="flex items-center py-2 px-3 rounded hover:bg-cyan-700 hover:text-white"
        >
          <PencilSquareIcon className="w-5 h-5 mr-2 text-cyan-600" /> Mi Perfil
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          onClick={closeMenu}
          className="flex items-center py-2 px-3 rounded hover:bg-cyan-700 hover:text-white"
        >
          <HomeIcon className="w-5 h-5 mr-2 text-cyan-600" /> Quiénes Somos
        </Link>
      </li>
      <li>
        <Link
          href="/iniciativas"
          onClick={closeMenu}
          className="flex items-center py-2 px-3 rounded hover:bg-cyan-700 hover:text-white"
        >
          <UsersIcon className="w-5 h-5 mr-2 text-cyan-600" /> Nuestras Iniciativas
        </Link>
      </li>
      <li>
        <Link
          href="/donar"
          onClick={closeMenu}
          className="flex items-center py-2 px-3 rounded hover:bg-cyan-700 hover:text-white"
        >
          <HeartIcon className="w-5 h-5 mr-2 text-red-600" /> Donaciones
        </Link>
      </li>
      <li>
        <Link
          href="/contacto"
          onClick={closeMenu}
          className="flex items-center py-2 px-3 rounded hover:bg-cyan-700 hover:text-white"
        >
          <ChatBubbleBottomCenterTextIcon className="w-5 h-5 mr-2 text-cyan-600" /> Contacto
        </Link>
      </li>
      <li>
        <button
          onClick={handleLogout}
          className="flex items-center py-2 px-3 rounded hover:bg-cyan-700 hover:text-white w-full text-left"
        >
          <ArrowRightEndOnRectangleIcon className="w-5 h-5 mr-2 text-cyan-600" /> Cerrar Sesión
        </button>
      </li>
    </ul>
  );
};

export default UserMenu;
