// components/MenuButton.tsx
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

interface MenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, toggleMenu }) => (
  <button
    onClick={toggleMenu}
    className="p-2 w-10 h-10 text-sm rounded-lg hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
  >
    <span className="sr-only">Open main menu</span>
    {isOpen ? (
      <XMarkIcon className="w-6 h-6 text-red-700" aria-hidden="true" />
    ) : (
      <Bars3Icon className="w-6 h-6 text-cyan-700" aria-hidden="true" />
    )}
  </button>
);

export default MenuButton;
