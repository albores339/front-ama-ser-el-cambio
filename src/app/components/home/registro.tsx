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
    <section className="py-6 md:py-12 px-6 bg-violet-50 rounded-xl shadow-lg mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12 max-w-screen-lg mx-auto">
        <div className="text-center lg:text-left lg:w-3/5 mx-auto items-center justify-center">
        <p
              className={`text-stone-600 font-bold text-6xl underline ${
                isAfiliado ? 'decoration-cyan-500' : 'decoration-pink-500'
              } transition-transform duration-700`}
            >
              {isAfiliado ? '01' : '02'}
            </p>
          <h2 className="text-4xl font-bold my-2 md:my-6 text-cyan-700">
            {isAfiliado ? "Regístrate como Afiliado" : "Regístrate como Donatario"}
          </h2>
          <p className="text-lg leading-relaxed text-stone-700 my-4 md:mb-8">
            {isAfiliado
              ? "Únete a nuestra comunidad y forma parte de quienes están haciendo el cambio. Regístrate ahora y empieza a colaborar con nosotros."
              : "Haz un cambio en el mundo donando a quienes más lo necesitan. Tu ayuda puede transformar vidas y crear un futuro mejor."}
          </p>
          <div className="mb-6 w-full h-0.5 bg-stone-200 rounded-full">
            <div
              style={{ width: `${(timer / 10) * 100}%` }}
              className={`h-0.5 ${
                isAfiliado ? 'bg-cyan-500' : 'bg-pink-500'
              } rounded-full transition-all duration-1000`}
              aria-hidden="true"
            ></div>
          </div>
          <Link href="/registrarse" title="Formulario de registro">
            <ArrowButton text="Registrarse" className="" />
          </Link>
          <button
            onClick={toggleAfiliado}
            className="mx-4 my-2 md:m-4 text-xl text-cyan-700 hover:text-2xl"
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
            className={`rounded-lg shadow-xl border-2 ${
              isAfiliado ? 'border-cyan-500' : 'border-pink-500'
            } transition-transform duration-700 ${isAfiliado ? 'scale-100' : 'scale-105'}`}
          />
        </div>
      </div>
    </section>
  );
};

export default AfiliadoSection;
