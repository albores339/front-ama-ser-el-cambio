// components/AdminMenu.tsx
import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  InboxIcon,
  MegaphoneIcon, // Ícono de altavoz
  UsersIcon,
  CurrencyDollarIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

interface AdminMenuProps {
  closeMenu: () => void;
}

const AdminMenu: React.FC<AdminMenuProps> = ({ closeMenu }) => (
  <ul className="flex flex-col font-medium mt-4 rounded-lg">
    <li>
      <Link
        href="/dashboard"
        onClick={closeMenu}
        className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-stone-100"
      >
        <PencilSquareIcon className="w-5 h-5 mr-2 text-cyan-600" /> Dashboard
      </Link>
    </li>
    <li>
      <Link
        href="/dashboard/usuarios"
        onClick={closeMenu}
        className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-stone-100"
      >
        <UsersIcon className="w-5 h-5 mr-2 text-cyan-600" /> Usuarios
      </Link>
    </li>
    <li>
      <Link
        href="/dashboard/inbox"
        onClick={closeMenu}
        className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-stone-100"
      >
        <InboxIcon className="w-5 h-5 mr-2 text-cyan-600" /> Bandeja de Entrada
      </Link>
    </li>
    <li>
      <Link
        href="/"
        onClick={closeMenu}
        className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-stone-100"
      >
        <MegaphoneIcon className="w-5 h-5 mr-2 text-cyan-600" /> Avisos
      </Link>
    </li>
    <li>
      <Link
        href="/dashboard/donaciones"
        onClick={closeMenu}
        className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-stone-100"
      >
        <CurrencyDollarIcon className="w-5 h-5 mr-2 text-cyan-600" /> Donaciones
      </Link>
    </li>
    <li>
      <Link
        href="/"
        onClick={closeMenu}
        className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-stone-100"
      >
        <HomeIcon className="w-5 h-5 mr-2 text-cyan-600" /> Cerrar Sesión
      </Link>
    </li>
  </ul>
);

export default AdminMenu;
