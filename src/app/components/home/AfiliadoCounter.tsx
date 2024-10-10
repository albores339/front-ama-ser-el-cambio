// components/AfiliadoCounter.tsx
"use client";

import { useState, useEffect } from 'react';
import AnimatedGradientText from '../animata/animated-gradient-text';// Asegúrate de que la ruta sea correcta
import { UserGroupIcon, UserPlusIcon } from '@heroicons/react/24/solid';

const AfiliadoCounter: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const targetNumber = 1359; // Número objetivo
  const duration = 3000; // Duración de la animación en milisegundos
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = document.getElementById('afiliado-counter')?.getBoundingClientRect();
      if (rect && rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll); // Eliminar el evento una vez que el contador es visible
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Limpiar el evento al desmontar
  }, []);

  useEffect(() => {
    if (isVisible) {
      const increment = targetNumber / (duration / 50); // Define el incremento
      const interval = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter + increment >= targetNumber) {
            clearInterval(interval);
            return targetNumber;
          }
          return Math.min(prevCounter + increment, targetNumber);
        });
      }, 50);

      return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }
  }, [isVisible]);

  return (
    <div
      id="afiliado-counter"
      className="flex flex-col md:flex-row justify-center items-center p-4 mx-auto text-5xl font-bold mb-16 gap-20"
    >
        <div className='flex flex-row items-center'>
            <UserGroupIcon className='text-cyan-600 h-24 w-24 mx-2'/>
            <AnimatedGradientText className='flex flex-col text-center'>
            <p className='text-8xl'>{Math.floor(counter)}</p> <p>Afiliados</p>
            </AnimatedGradientText>
        </div>
        <div className='flex flex-row items-center'>
            <UserPlusIcon className='text-cyan-600 h-24 w-24 mx-2'/>
            <AnimatedGradientText className='flex flex-col text-center'>
            <p className='text-8xl'>8</p> <p>Años</p>
            </AnimatedGradientText>
        </div>
    </div>
  );
};

export default AfiliadoCounter;
