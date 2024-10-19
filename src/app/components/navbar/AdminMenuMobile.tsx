import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useAuth } from "@/app/context/AuthContext"; // Ajusta la ruta según sea necesario
import {
  HomeModernIcon,
  PencilSquareIcon,
  UsersIcon,
  InboxIcon,
  MegaphoneIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

interface AdminMenuProps {
  closeMenu: () => void;
}

const AdminMenu: React.FC<AdminMenuProps> = ({ closeMenu }) => {
  const { logout } = useAuth();
  const router = useRouter();
  const menuRef = useRef<HTMLUListElement>(null);

  const handleLogout = async () => {
    logout();
    closeMenu();

    // Mostrar la alerta antes de redirigir
    await Swal.fire({
      title: 'Sesión cerrada',
      text: 'Has cerrado sesión exitosamente.',
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });

    // Redirigir después de que se cierre la sesión
    router.push("/");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <ul ref={menuRef} className="flex flex-col py-10 mt-4 rounded-lg text-xl font-semibold text-stone-700 mx-8">
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
          href="/users"
          onClick={closeMenu}
          className="flex items-center py-2 px-3 rounded hover:bg-cyan-700 hover:text-white"
        >
          <UsersIcon className="w-5 h-5 mr-2 text-cyan-600" /> Tablero de Usuarios
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
          <ArrowRightEndOnRectangleIcon className="w-5 h-5 mr-2 text-cyan-600" /> Cerrar Sesión
        </button>
      </li>
    </ul>
  );
};

export default AdminMenu;
