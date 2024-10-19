"use client"

import { ReactNode } from "react";
import {
  ArrowRight,
  BookPlus,
  Calendar,
  HeartPulse,
  Megaphone,
  Sun,
  User,
  Users,
} from "lucide-react";

import MovingGradient from "../components/animata/background/moving-gradient";
import { cn } from "../lib/utils";
import Link from "next/link"; // Asegúrate de importar Link
import { requestPermission, listenForMessages } from "@/app/lib/NotificationService";
import { useEffect } from "react";

function NotificationHandler() {
  useEffect(() => {
    requestPermission();
    listenForMessages();
  }, []);

  return null; // Este componente no necesita renderizar nada
}

function BentoCard({
  title,
  icon,
  description,
  children,
  gradient,
  className,
  href, // Agregamos el href como propiedad
}: {
  children?: ReactNode;
  title: ReactNode;
  icon: ReactNode;
  gradient?: string;
  description: ReactNode;
  className?: string;
  href: string; // Definimos el href como string
}) {

  const titleString = title ? title.toString() : 'Sin título';

  return (
    <MovingGradient
      animated={true}
      className={cn("relative rounded-md", className)} // Agregamos relative
      gradientClassName={cn("opacity-10", gradient)}
    >
      <Link href={href} className="absolute inset-0 z-10" aria-label={titleString} /> 

      <section className="flex h-full flex-col gap-2 p-4">
        <header>
          <div className="mb-2 flex items-center gap-2">
            {icon}
            <p className="text-md line-clamp-1 font-bold">{title}</p>
          </div>
        </header>
        <div className="flex-1 text-sm font-medium text-opacity-80">{description}</div>
        {children}
      </section>
    </MovingGradient>
  );
}

function GetGradient() {
  return (
    <BentoCard
      title="Próximos Eventos"
      icon={<Calendar size={24} />}
      description={
        <span>
          Da click aquí y entérate qué estamos haciendo, únete, recuerda que unidos hacemos la fuerza.
        </span>
      }
      className="sm:col-span-1 sm:row-span-2 shadow-lg"
      gradient="from-cyan-900 via-60% via-sky-600 to-indigo-600"
      href="/users/eventos" // Pasamos el link correspondiente
    >
      <div className="group relative flex cursor-pointer flex-col justify-end rounded-md bg-cyan-700 p-2 text-2xl tracking-tight text-white md:text-4xl">
        <div className="font-light">Ver</div>
        <div className="-mt-2 font-bold">Próximos Eventos</div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full border bg-white transition-all duration-700 group-hover:rotate-[360deg] md:h-8 md:w-8">
          <ArrowRight size={16} className="text-cyan-600" />
        </div>
        <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-white opacity-50 transition-all duration-700 group-hover:opacity-25" />
      </div>
    </BentoCard>
  );
}

function LinearGradient() {
  return (
    <BentoCard
      title="Avisos"
      icon={<Megaphone size={24} />}
      description="Este será el medio de comunicación entre los administradores de la web y la comunidad."
      gradient="from-red-300 via-60% via-rose-300 to-red-200"
      className="group sm:col-span-1 shadow-lg"
      href="/users/avisos" // Pasamos el link correspondiente
    >
      <div className="h-4 w-full rounded-sm bg-gray-100 group-hover:animate-pulse group-hover:bg-stone-300" />
      <div className="h-4 w-1/2 rounded-sm bg-gray-100 group-hover:animate-pulse group-hover:bg-stone-300" />
    </BentoCard>
  );
}

function RadialGradient() {
  return (
    <BentoCard
      title="Mi Perfil"
      icon={<User size={24} />}
      description="Descríbenos más de ti."
      gradient="from-lime-300 via-60% via-green-200 to-lime-200"
      className="group sm:col-span-1 shadow-lg"
      href="/users/mi-perfil" // Pasamos el link correspondiente
    >
      <div className="flex w-full flex-row justify-end gap-2 rounded border-yellow-200 bg-yellow-100 p-2">
        <HeartPulse
          size={16}
          className="delay-150 duration-75 group-hover:animate-in group-hover:slide-in-from-right-full"
        />
        <Sun
          size={16}
          className="delay-75 duration-75 group-hover:animate-in group-hover:slide-in-from-right-full"
        />
        <BookPlus
          size={16}
          className="duration-75 group-hover:animate-in group-hover:slide-in-from-right-full"
        />
      </div>
    </BentoCard>
  );
}

function ConicGradient() {
  return (
    <BentoCard
      title="Comunidad"
      icon={<Users size={24} />}
      description="¡Crea un post con tus fotos de los eventos a los que asistas! Compártenos tu experiencia, sé la inspiración de los demás 😉"
      gradient="from-cyan-900 via-60% via-sky-600 to-indigo-600"
      className="sm:col-span-2 shadow-lg"
      href="/users/comunidad" // Pasamos el link correspondiente
    />
  );
}

export default function Gradient() {
  return (
    <div className="max-w-screen-xl py-10 mx-auto px-2 md:px-8">
      <div className="grid grid-cols-1 gap-4 text-black sm:grid-cols-3 lg:grid-cols-3">
        <NotificationHandler />
        <GetGradient />
        <LinearGradient />
        <RadialGradient />
        <ConicGradient />
      </div>
    </div>
  );
}
