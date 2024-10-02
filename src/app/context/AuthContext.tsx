"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isAdmin: boolean;
  isUser: boolean;
  token: string | null;
  setToken: (token: string | null) => void;
  role: string | null;
  setRole: (role: string | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  isAdmin: false,
  isUser: false,
  token: null,
  setToken: () => {},
  role: null,
  setRole: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null); // Manejo del rol

  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedRole = localStorage.getItem("role"); // Obtener el rol almacenado en el localStorage

    if (savedToken && savedRole) {
      setToken(savedToken);
      setRole(savedRole);

      // Actualizar el estado según el rol
      setIsAdmin(savedRole === "admin");
      setIsUser(savedRole === "user");
    }
  }, [token, role]); 

  return (
    <AuthContext.Provider value={{ isAdmin, isUser, token, setToken, role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto
export const useAuth = () => useContext(AuthContext);
