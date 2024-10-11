// components/AdminAside.tsx
import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  InboxIcon,
  CurrencyDollarIcon,
  MegaphoneIcon
} from "@heroicons/react/24/solid";

const AdminAside: React.FC = () => {
  return (
    <aside className="hidden w-1/5 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-800 text-white h-screen md:flex md:flex-col p-6 m-2">
      <h1 className="text-2xl font-bold mb-6">Tablero de Administrador</h1>
      <nav className="space-y-2">
        <Link href="/dashboard">
          <button className="flex items-center p-2 text-sm text-white hover:bg-stone-800 rounded-lg">
            <HomeIcon className="w-5 h-5 mr-2" />
            Dashboard
          </button>
        </Link>
        <Link href="/dashboard/usuarios">
          <button className="flex items-center p-2 text-sm text-white hover:bg-stone-800 rounded-lg">
            <UsersIcon className="w-5 h-5 mr-2" />
            Usuarios
          </button>
        </Link>
        {/*<Link href="/dashboard">
          <button className="flex items-center p-2 text-sm text-white hover:bg-stone-800 rounded-lg">
            <ChartBarIcon className="w-5 h-5 mr-2" />
            Estadísticas
          </button>
        </Link>*/}
        <Link href="/dashboard/inbox">
          <button className="flex items-center p-2 text-sm text-white hover:bg-stone-800 rounded-lg">
            <InboxIcon className="w-5 h-5 mr-2" />
            Bandeja de Entrada
          </button>
        </Link>
        <Link href="/dashboard/avisos">
          <button className="flex items-center p-2 text-sm text-white hover:bg-stone-800 rounded-lg">
            <MegaphoneIcon className="w-5 h-5 mr-2" />
            Avisos
          </button>
        </Link>
      </nav>
    </aside>
  );
};

export default AdminAside;
