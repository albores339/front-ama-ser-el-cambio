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
    <ul className="flex flex-col font-medium mt-4 rounded-lg">
      <li>
        <Link
          href="/perfil"
          onClick={closeMenu}
          className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-stone-100"
        >
          <PencilSquareIcon className="w-5 h-5 mr-2 text-cyan-600" /> Mi Perfil
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          onClick={closeMenu}
          className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-stone-100"
        >
          <HomeIcon className="w-5 h-5 mr-2 text-cyan-600" /> Quiénes Somos
        </Link>
      </li>
      <li>
        <Link
          href="/iniciativas"
          onClick={closeMenu}
          className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-stone-100"
        >
          <UsersIcon className="w-5 h-5 mr-2 text-cyan-600" /> Nuestras Iniciativas
        </Link>
      </li>
      <li>
        <Link
          href="/donar"
          onClick={closeMenu}
          className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-stone-100"
        >
          <HeartIcon className="w-5 h-5 mr-2 text-red-600" /> Donaciones
        </Link>
      </li>
      <li>
        <Link
          href="/contacto"
          onClick={closeMenu}
          className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-stone-100"
        >
          <ChatBubbleBottomCenterTextIcon className="w-5 h-5 mr-2 text-cyan-600" /> Contacto
        </Link>
      </li>
      <li>
        <button
          onClick={handleLogout}
          className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-stone-100 w-full text-left"
        >
          <ArrowRightEndOnRectangleIcon className="w-5 h-5 mr-2 text-cyan-600" /> Cerrar Sesión
        </button>
      </li>
    </ul>
  );
};

export default UserMenu;
