// src/app/dashboard.tsx

"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  UserGroupIcon,
  CurrencyDollarIcon,
  HeartIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

interface Stat {
  label: string;
  value: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string;
  link: string;
}

const StatCard = ({
  label,
  value,
  icon: Icon,
  gradient,
}: {
  label: string;
  value: string | number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string;
}) => (
  <div className={`p-4 shadow-md rounded-lg text-white ${gradient}`}>
    <div className="flex items-center">
      <Icon className="h-8 w-8 mr-3" />
      <p>{label}</p>
    </div>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </div>
);

const Dashboard = () => {
  const [stats, setStats] = useState<Stat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, contactsResponse, alertsResponse] = await Promise.all([
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users`),
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`),
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/avisos`),
        ]);

        setStats([
          {
            label: "Afiliados",
            value: usersResponse.data.length,
            icon: UserGroupIcon,
            gradient: "bg-gradient-to-r from-cyan-500 to-cyan-800",
            link: "/dashboard/usuarios",
          },
          {
            label: "Bandeja de entrada",
            value: contactsResponse.data.length,
            icon: CurrencyDollarIcon,
            gradient: "bg-gradient-to-r from-lime-500 to-lime-800",
            link: "/dashboard",
          },
          {
            label: "Avisos",
            value: alertsResponse.data.length,
            icon: HeartIcon,
            gradient: "bg-gradient-to-r from-cyan-500 to-cyan-800",
            link: "/dashboard/avisos",
          },
          {
            label: "Donatarios",
            value: 0, // Puedes cambiar esto si lo necesitas
            icon: PresentationChartBarIcon,
            gradient: "bg-gradient-to-r from-lime-500 to-lime-800",
            link: "/dashboard/usuarios",
          },
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Cargando...</div>;

  return (
    <div className="flex min-h-screen bg-violet-100 rounded-lg">
      <main className="flex-1 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <Link href={stat.link} key={index}>
              <StatCard
                label={stat.label}
                value={stat.value}
                icon={stat.icon}
                gradient={stat.gradient}
              />
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Resumen de Donaciones</h2>
            {/* Integrar gráfico aquí */}
          </section>

          <section className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Fuentes de tráfico</h2>
            {/* Integrar gráfico aquí */}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
