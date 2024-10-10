"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArrowButton from '../ButtonAnimated';

const AfiliadoSection: React.FC = () => {
  const [isAfiliado, setIsAfiliado] = useState(true);
  const [timer, setTimer] = useState(10);

  // Manejamos el temporizador
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          setIsAfiliado(!isAfiliado); // Cambia de estado cuando el temporizador llega a 0
          return 10; // Reinicia el temporizador a 10 segundos
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [isAfiliado]);

  // Alterna entre Afiliado y Donatario
  const toggleAfiliado = () => {
    setTimer(10);
    setIsAfiliado(!isAfiliado);
  };

  return (
    <section className="py-12 px-6 bg-violet-50 rounded-xl shadow-lg max-w-screen-lg mx-auto">
      <h1 className="sr-only">Regístrate como Afiliado o Donatario</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
        <div className="text-center lg:text-left lg:w-3/5 pl-8">
          <h2 className="text-4xl font-bold mb-6 text-cyan-700 flex flex-row gap-4 items-center">
            <p
              className={`text-stone-600 text-6xl underline ${
                isAfiliado ? 'decoration-lime-500' : 'decoration-rose-500'
              } transition-transform duration-700`}
            >
              {isAfiliado ? '01' : '02'}
            </p>
            {isAfiliado ? "Regístrate como Afiliado" : "Regístrate como Donatario"}
          </h2>
          <p className="text-lg leading-relaxed text-stone-700 mb-8">
            {isAfiliado
              ? "Únete a nuestra comunidad y forma parte de quienes están haciendo el cambio. Regístrate ahora y empieza a colaborar con nosotros."
              : "Haz un cambio en el mundo donando a quienes más lo necesitan. Tu ayuda puede transformar vidas y crear un futuro mejor."}
          </p>
          <div className="mb-6 w-full h-2 bg-gray-200 rounded-full">
            <div
              style={{ width: `${(timer / 10) * 100}%` }}
              className={`h-2 ${
                isAfiliado ? 'bg-lime-500' : 'bg-rose-500'
              } rounded-full transition-all duration-1000`}
              aria-hidden="true"
            ></div>
          </div>
          <Link href="/registrarse" title="Formulario de registro">
            <ArrowButton text="Registrarse" className="" />
          </Link>
          <button
            onClick={toggleAfiliado}
            className="mt-4 mx-4 text-xl text-cyan-700 hover:text-2xl"
          >
            {isAfiliado ? "Donatario" : "Afiliado"}
          </button>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-2/5 flex justify-center transition-all duration-700">
          <Image
            src={isAfiliado ? "/images/afiliado.jpeg" : "/images/donatario.jpeg"}
            alt={isAfiliado ? "Jaguar voluntario entregando comida" : "Donación en progreso"}
            width={400}
            height={400}
            priority
            sizes="(max-width: 400px) 100vw, 400px"
            className={`rounded-lg shadow-2xl border-4 ${
              isAfiliado ? 'border-lime-600' : 'border-red-600'
            } transition-transform duration-700 ${isAfiliado ? 'scale-100' : 'scale-105'}`}
          />
        </div>
      </div>
    </section>
  );
};

export default AfiliadoSection;
