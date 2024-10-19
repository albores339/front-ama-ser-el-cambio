"use client"

import { useState, useEffect } from 'react';
import { UserGroupIcon, UserPlusIcon, CalendarIcon } from '@heroicons/react/24/solid';
import AnimatedGradientText from '../animata/animated-gradient-text'; // Importa tu componente

const AfiliadoCounter: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const targetNumber = 1359; // Número objetivo para afiliados
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
      className="flex flex-col md:flex-row justify-center items-center p-4 mx-auto text-4xl font-semibold mb-10 md:mb-20 lg:gap-10 gap-8 md:gap-2"
    >
      <div className='flex flex-row items-center lg:gap-6 justify-around'>
        <UserPlusIcon className='text-cyan-700 h-24 w-24 mx-2'/>
        <div className='flex flex-col text-center text-cyan-700'>
          {/* Ajusta el tamaño del número fijo para hacerlo más pequeño */}
          <p className='text-5xl md:text-6xl'>8</p> 
          <p>Años</p>
        </div>
      </div>
      <div className='flex flex-row items-center justify-around lg:gap-6'>
        <UserGroupIcon className='text-cyan-700 h-24 w-24 mx-2'/>
        <div className='flex flex-col text-center text-cyan-700'>
          {/* Usa AnimatedGradientText para el número que va creciendo */}
          <AnimatedGradientText className='text-7xl md:text-6xl lg:text-7xl'>
            {Math.floor(counter)}
          </AnimatedGradientText>
          <p>Afiliados</p>
        </div>
      </div>
      <div className='flex flex-row items-center lg:gap-6 justify-around'>
        <CalendarIcon className='text-cyan-700 h-24 w-24 mx-2'/>
        <div className='flex flex-col text-center text-cyan-700'>
          {/* Ajusta el tamaño del número fijo para hacerlo más pequeño */}
          <p className='text-5xl md:text-6xl'>288</p> 
          <p>Eventos</p>
        </div>
      </div>
    </div>
  );
};

export default AfiliadoCounter;
