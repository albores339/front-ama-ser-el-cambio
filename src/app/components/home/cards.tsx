import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Para enlazar a la nueva página

const FantasticPhotoCardsSection: React.FC = () => {
  const cards = [
    {
      title: 'Apoyo al Deporte',
      imageUrl: '/images/deporte.jpg',
      description: 'Carrera de 5km con premios para los participantes.',
      gradient: 'from-red-500 to-yellow-500',
    },
    {
      title: 'Apoyo Alimenticio',
      imageUrl: '/images/comida.png',
      description: 'Reparto de alimentos en hospitales y asilos.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Apoyo Ciudadano',
      imageUrl: '/images/ciudadano.png',
      description: 'Capacitación en educación vial y apoyo ciudadano.',
      gradient: 'from-lime-500 to-green-500',
    },
  ];

  return (
    <section className="py-16 text-stone-700">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Nuestras Iniciativas</h2>
        <p className="text-lg">Descubre las acciones que estamos tomando para cambiar el mundo</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 items-center">
        {cards.map((card, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div className={`relative bg-gradient-to-tr ${card.gradient} p-1 rounded-full shadow-2xl hover:shadow-xl transform hover:scale-105 transition-transform duration-300`}>
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden aspect-square">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <h3 className={`text-2xl font-bold text-${card.gradient.split(' ')[0]}`}>{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botón "Ver Más" */}
      <div className="text-center mt-12">
        <Link href="/iniciativas"
        className="inline-block bg-lime-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-lime-600">
            Ver Más Iniciativas
        </Link>
      </div>
    </section>
  );
};

export default FantasticPhotoCardsSection;
