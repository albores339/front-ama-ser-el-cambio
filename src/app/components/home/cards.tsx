import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Para enlazar a la nueva página

const FantasticPhotoCardsSection: React.FC = () => {
  const cards = [
    {
      title: 'Apoyo al Deporte',
      imageUrl: '/images/deporte.jpeg',
      description: 'Entrega de Trofeos en torneo a Jóvenes de Albergues.',
      gradient: 'from-red-500 to-yellow-500',
    },
    {
      title: 'Apoyo Alimenticio',
      imageUrl: '/images/comida.jpg',
      description: 'Reparto de alimentos en hospitales y asilos.',
      gradient: 'from-cyan-300 to-blue-500',
    },
    {
      title: 'Apoyo Ciudadano',
      imageUrl: '/images/ciudadano.jpeg',
      description: 'Observadores Electorales en el Proceso de Elecciones 2024.',
      gradient: 'from-lime-500 to-green-500',
    },
  ];

  return (
    <section className="py-16 text-stone-600 max-w-screen-lg mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-cyan-700">Nuestras Iniciativas</h2>
        <p className="text-lg">Descubre las acciones que estamos tomando para cambiar el mundo</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 items-center">
        {cards.map((card, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div className={`relative bg-gradient-to-tr ${card.gradient} p-2 rounded-full shadow-2xl hover:shadow-xl transform hover:scale-105 transition-transform duration-300 animated-border`}>
              <div className="relative w-72 h-72 rounded-full overflow-hidden aspect-square">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <h3 className={`text-2xl font-bold text-${card.gradient.split(' ')[0]}`}>{card.title}</h3>
              <p className="text-lg">{card.description}</p>
            </div>
        </div>
        
        ))}
      </div>

      {/* Botón "Ver Más" */}
      <div className="text-center mt-12">
        <Link href="/iniciativas"
        className="inline-block bg-lime-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-lime-600">
            Ver Más Iniciativas
        </Link>
      </div>
    </section>
  );
};

export default FantasticPhotoCardsSection;
