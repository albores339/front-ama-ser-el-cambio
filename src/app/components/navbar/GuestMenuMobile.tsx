// components/GuestMenu.tsx
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
  UsersIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

interface GuestMenuProps {
  closeMenu: () => void;
}

const GuestMenu: React.FC<GuestMenuProps> = ({ closeMenu }) => {
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <ul
      ref={menuRef}
      className="flex flex-col font-semibold gap-2 mt-4 rounded-lg text-stone-700 mx-8 py-10 md:py-6 text-xl"
    >
      <li>
        <Link
          href="/registrarse"
          onClick={closeMenu}
          className="flex items-center py-2 px-3 rounded hover:bg-cyan-700 hover:text-white"
        >
          <PencilSquareIcon className="w-5 h-5 mr-2 text-cyan-600" /> Registrarse
        </Link>
      </li>
      <li>
        <Link
          href="/login"
          onClick={closeMenu}
          className="flex items-center py-2 px-3 rounded hover:bg-cyan-700 hover:text-white"
        >
          <UserIcon className="w-5 h-5 mr-2 text-cyan-600" /> Iniciar Sesión
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
    </ul>
  );
};

export default GuestMenu;
