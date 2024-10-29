// app/dashboard/layout.tsx
import React from "react";
import AdminAside from "../components/dashboard/AsideAdmin";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex gap-4">
      {/* Sidebar / Aside */}
      <AdminAside />

      {/* Main content */}
      <div className="w-4/5 flex-grow">
        <main>{children}</main>
      </div>
    </div>
  );
}
