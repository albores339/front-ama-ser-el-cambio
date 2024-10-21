import React from 'react'; 
import Image from 'next/image';
import Link from 'next/link';
import { BorderBeam } from '@/components/ui/border-beam';
import DotPattern from '@/components/ui/dot-pattern';

const FantasticPhotoCardsSection: React.FC = () => {
  const cards = [
    {
      title: 'Apoyo al Deporte',
      imageUrl: '/images/deporte.jpeg',
      description: 'Entrega de Trofeos en torneo a Jóvenes de Albergues.',
    },
    {
      title: 'Apoyo Alimenticio',
      imageUrl: '/images/comida.jpg',
      description: 'Reparto de alimentos en hospitales y asilos.',
    },
    {
      title: 'Apoyo Ciudadano',
      imageUrl: '/images/ciudadano.jpeg',
      description: 'Observadores Electorales en el Proceso de Elecciones 2024.',
    },
  ];

  return (
    <section className="relative pt-10 text-stone-600 max-w-screen-xl mx-auto px-4 overflow-hidden">
      {/* DotPattern positioned absolutely as background */}
      <DotPattern
        className="absolute inset-0 w-full h-full z-0 opacity-30"
        style={{ maskImage: 'radial-gradient(300px_circle_at_center, white, transparent)' }}
      />
      
      <div className="text-center m-3 relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 text-cyan-700">Nuestras Iniciativas</h2>
        <p className="text-base md:text-lg">Descubre las acciones que estamos tomando para cambiar el mundo</p>
      </div>

      <div className="relative flex flex-col lg:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 items-center z-1">
        {cards.map((card, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div className="relative w-72 h-72 shadow-xl rounded-full overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 my-1 md:my-4">
              {/* BorderBeam positioned absolutely to be behind the Image with additional props */}
              <BorderBeam
                className="absolute inset-0 w-full h-full z-10 rounded-full"
                size={300} // Tamaño del beam
                duration={5} // Duración de la animación
                anchor={50} // Punto de anclaje
                borderWidth={2} // Ancho del beam
                colorFrom="#06B6D4" // Color inicial
                colorTo="#F43F5E" // Color final
                delay={0} // Retraso antes de iniciar la animación
              />

              {/* Image positioned absolutely to overlay BorderBeam */}
              <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden z-2">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  fill
                  className="rounded-full object-cover border border-stone-300 p-1"
                />
              </div>
            </div>
            <div className="text-center mt-2">
              <h3 className="text-xl md:text-2xl font-bold text-cyan-700">{card.title}</h3>
              <p className="text-base md:text-lg">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botón "Ver Más" */}
      <div className="text-center mt-6 md:mt-12 relative z-10">
        <Link href="/iniciativas"
          className="inline-block bg-lime-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-lime-600">
            Ver Más Iniciativas
        </Link>
      </div>
    </section>
  );
};

export default FantasticPhotoCardsSection;
