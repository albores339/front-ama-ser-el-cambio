import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, altText }) => {
  return (
    <div className="max-w-sm bg-stone-100 m-4 border border-gray-200 rounded-lg shadow-lg">
      <a href="#">
        <Image className="rounded-t-lg object-cover h-48 w-full" src={imageUrl} alt={altText} loading='lazy' />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-600">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Leer más
          <svg className="w-3.5 h-3.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

const CardContainer: React.FC = () => {
  const cardsData = [
    {
      title: 'Apoyo Alimenticio',
      description: 'Reparto de alimentos en las afueras de hospitales, terminales, asilos, orfanatos, etc.',
      imageUrl: '/images/comida.png', // Cambia esta ruta según tu imagen
      altText: 'Apoyo Alimenticio',
    },
    {
      title: 'Apoyo al Deporte',
      description: 'Carrera de 5km con premios para los participantes, realizada una vez al año.',
      imageUrl: '/images/deporte.png', // Cambia esta ruta según tu imagen
      altText: 'Apoyo al Deporte',
    },
    {
      title: 'Apoyo Ciudadano',
      description: 'Capacitación en educación vial en las afueras de escuelas públicas y avenidas transitadas.',
      imageUrl: '/images/ciudadano.png', // Cambia esta ruta según tu imagen
      altText: 'Apoyo Ciudadano',
    },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardContainer;
