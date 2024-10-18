import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isAdmin: boolean;
  isUser: boolean;
  token: string | null;
  setToken: (token: string | null) => void;
  role: string | null;
  setRole: (role: string | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAdmin: false,
  isUser: false,
  token: null,
  setToken: () => {},
  role: null,
  setRole: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedRole = localStorage.getItem("role");

    if (savedToken && savedRole) {
      setToken(savedToken);
      setRole(savedRole);
    }
  }, []);

  useEffect(() => {
    setIsAdmin(role === "admin");
    setIsUser(role === "user");
  }, [role]);

  const logout = () => {
    setToken(null);
    setRole(null);
    setIsAdmin(false);
    setIsUser(false);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ isAdmin, isUser, token, setToken, role, setRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
