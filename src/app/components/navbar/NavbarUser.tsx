// components/NavbarUser.tsx
import React from "react";
import MenuButton from "./MenuButton";
import Logo from "./Logo";
import UserMenu from "./UserMenuMobile";

interface NavbarUserProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavbarUser: React.FC<NavbarUserProps> = ({ isOpen, toggleMenu }) => (
  <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-xl z-50 shadow-md border-b-4 border-cyan-500">
    <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
      <div className="flex flex-row gap-4">
        <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
        <Logo />
      </div>
      <div className="space-x-4">
        <a
          href="/perfil"
          className="bg-lime-700 text-white px-5 py-2 rounded-2xl hover:bg-lime-600 transition-all duration-300"
        >
          Perfil
        </a>
      </div>
    </div>

    {isOpen && (
      <div className="w-full shadow-xl">
        <UserMenu closeMenu={toggleMenu} />
      </div>
    )}
  </nav>
);

export default NavbarUser;
