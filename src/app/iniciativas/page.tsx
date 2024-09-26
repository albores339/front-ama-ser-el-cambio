import React from 'react';
import Image from 'next/image';

const IniciativasPage: React.FC = () => {
  const iniciativas = [
    {
      title: 'Apoyo al Deporte',
      description: 'Carrera de 5km con premios económicos y en especie para los participantes, realizada una vez al año.',
      imageUrl: '/images/deporte.jpg',
    },
    {
      title: 'Apoyo Alimenticio',
      description: 'Reparto de alimentos en hospitales, asilos, orfanatos y más.',
      imageUrl: '/images/comida.png',
    },
    {
      title: 'Apoyo Ciudadano',
      description: 'Capacitación en educación vial para mejorar la seguridad en escuelas y avenidas transitadas.',
      imageUrl: '/images/ciudadano.png',
    },
    {
      title: 'Apoyo a Niños Vulnerables',
      description: 'Apoyo con útiles escolares, becas, ropa y gestiones en salud pública.',
      imageUrl: '/images/niños.jpg',
    },
    {
      title: 'Apoyo al Ambiente',
      description: 'Reforestación de 6 km en el municipio de El Parral, realizada por etapas.',
      imageUrl: '/images/ambiente.jpg',
    },
    {
      title: 'Bellas Artes',
      description: 'Cursos de pintura y actividades culturales para jóvenes talentos.',
      imageUrl: '/images/Imagen7.jpg',
    },
  ];

  return (
    <section className="py-16 px-8 text-stone-700">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Nuestras Iniciativas</h2>
        <p className="text-lg">Conoce más sobre nuestras actividades y proyectos para mejorar la sociedad.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {iniciativas.map((iniciativa, index) => (
          <div key={index} className="relative bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
              <Image
                src={iniciativa.imageUrl}
                alt={iniciativa.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">{iniciativa.title}</h3>
            <p className="text-gray-600 mb-4">{iniciativa.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IniciativasPage;
