// app/dashboard/layout.tsx
import React from "react";
import AdminAside from "../components/dashboard/AsideAdmin";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex my-24 gap-4">
      {/* Sidebar / Aside */}
      <AdminAside />

      {/* Main content */}
      <div className="w-3/4 flex-grow">
        <main>{children}</main>
      </div>
    </div>
  );
}
