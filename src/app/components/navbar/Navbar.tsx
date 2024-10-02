// components/Navbar.tsx
import React, { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import NavbarAdmin from "./NavbarAdmin";
import NavbarUser from "./NavbarUser";
import NavbarGuest from "./NavBarGuest";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAdmin, isUser } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  if (isAdmin) {
    return <NavbarAdmin isOpen={isOpen} toggleMenu={toggleMenu} />;
  }

  if (isUser) {
    return <NavbarUser isOpen={isOpen} toggleMenu={toggleMenu} />;
  }

  return <NavbarGuest isOpen={isOpen} toggleMenu={toggleMenu} />;
};

export default Navbar;
