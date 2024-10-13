import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Para enlazar a la nueva página

const FantasticPhotoCardsSection: React.FC = () => {
  const cards = [
    {
      title: 'Apoyo al Deporte',
      imageUrl: '/images/deporte.jpeg',
      description: 'Entrega de Trofeos en torneo a Jóvenes de Albergues.',
      gradient: 'from-cyan-500 from-30% via-cyan-700 via-50% to-pink-500 to-80%',
    },
    {
      title: 'Apoyo Alimenticio',
      imageUrl: '/images/comida.jpg',
      description: 'Reparto de alimentos en hospitales y asilos.',
      gradient: 'from-cyan-500 from-30% via-cyan-700 via-50% to-pink-500 to-80%',
    },
    {
      title: 'Apoyo Ciudadano',
      imageUrl: '/images/ciudadano.jpeg',
      description: 'Observadores Electorales en el Proceso de Elecciones 2024.',
      gradient: 'from-cyan-500 from-30% via-cyan-700 via-50% to-pink-500 to-80%',
    },
  ];

  return (
    <section className="py-16 text-stone-600 max-w-screen-xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-cyan-700">Nuestras Iniciativas</h2>
        <p className="text-lg">Descubre las acciones que estamos tomando para cambiar el mundo</p>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 items-center">
        {cards.map((card, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div className={`relative bg-gradient-to-tr ${card.gradient} p-1 rounded-full shadow-2xl hover:shadow-xl transform hover:scale-105 transition-transform duration-300 animated-border mb-4`}>
              <div className="relative w-72 h-72 rounded-full overflow-hidden aspect-square">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  fill
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
