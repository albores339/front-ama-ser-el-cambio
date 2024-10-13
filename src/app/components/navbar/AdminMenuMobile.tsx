import React from "react";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext"; // Adjust the path as necessary
import {
  HomeIcon,
  InboxIcon,
  MegaphoneIcon,
  UsersIcon,
  HomeModernIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

interface AdminMenuProps {
  closeMenu: () => void;
}

const AdminMenu: React.FC<AdminMenuProps> = ({ closeMenu }) => {
  const { logout } = useAuth(); // Get the logout function from the context

  const handleLogout = () => {
    logout(); // Call the logout function
    closeMenu(); // Optionally close the menu after logout
  };

  return (
    <ul className="flex flex-col py-10 mt-4 rounded-lg text-xl font-bold text-stone-700 mx-8">
      <li>
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center py-2 px-3 hover:bg-cyan-700 hover:text-white rounded"
        >
          <HomeModernIcon className="w-5 h-5 mr-2 text-cyan-600" /> Home
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard"
          onClick={closeMenu}
          className="flex items-center py-2 px-3 rounded hover:bg-cyan-700 hover:text-white"
        >
          <PencilSquareIcon className="w-5 h-5 mr-2 text-cyan-600" /> Dashboard
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard/usuarios"
          onClick={closeMenu}
          className="flex items-center py-2 px-3 rounded hover:bg-cyan-700 hover:text-white"
        >
          <UsersIcon className="w-5 h-5 mr-2 text-cyan-600" /> Usuarios
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard/inbox"
          onClick={closeMenu}
          className="flex items-center py-2 px-3 rounded hover:bg-cyan-700 hover:text-white"
        >
          <InboxIcon className="w-5 h-5 mr-2 text-cyan-600" /> Bandeja de Entrada
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard/avisos"
          onClick={closeMenu}
          className="flex items-center py-2 px-3 rounded hover:bg-cyan-700 hover:text-white"
        >
          <MegaphoneIcon className="w-5 h-5 mr-2 text-cyan-600" /> Avisos
        </Link>
      </li>
      <li>
        <button
          onClick={handleLogout}
          className="flex items-center py-2 px-3 rounded hover:bg-cyan-700 hover:text-white w-full text-left"
        >
          <HomeIcon className="w-5 h-5 mr-2 text-cyan-600" /> Cerrar Sesión
        </button>
      </li>
    </ul>
  );
};

export default AdminMenu;
