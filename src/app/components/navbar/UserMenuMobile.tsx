// components/UserMenu.tsx
import React from "react";
import Link from "next/link";
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
  const { logout } = useAuth(); // Get the logout function from the context

  const handleLogout = () => {
    logout(); // Call the logout function
  };

  return (
    <ul className="flex flex-col font-bold mt-4 rounded-lg text-stone-700 mx-8 py-10 text-xl">
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
