// NavbarAdmin.tsx (Actualización)

import React from "react";
import MenuButton from "./MenuButton";
import Logo from "./Logo";
import AdminMenu from "./AdminMenuMobile";
{/*import { BellIcon, CogIcon } from "@heroicons/react/24/solid";*/}

interface NavbarAdminProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavbarAdmin: React.FC<NavbarAdminProps> = ({ isOpen, toggleMenu }) => (
  <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-2xl z-50 shadow-md border-b-4 border-cyan-500">
    <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-2">
      <div className="flex flex-row gap-4">
        <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
        <Logo />
      </div>
      <div className="flex space-x-4 items-center">
        <a
          href="/dashboard"
          className="hidden md:block bg-cyan-700 text-white px-5 py-2 rounded-2xl hover:bg-cyan-600 transition-all duration-300"
        >
          Dashboard
        </a>
        {/*<button className="relative">
          <BellIcon className="w-8 h-8 text-cyan-700" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
            5
          </span>
        </button>
        <button className="hover:text-cyan-500">
          <CogIcon className="w-8 h-8 text-stone-500" />
        </button>*/}
      </div>
    </div>

    {isOpen && (
      <div className="w-full shadow-xl">
        <AdminMenu closeMenu={toggleMenu} />
      </div>
    )}
  </nav>
);

export default NavbarAdmin;
