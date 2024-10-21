"use client"; // Agregar esto al principio del archivo

import React, { useState, useEffect } from 'react';

const Map: React.FC = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);

  useEffect(() => {
    // Código para hacer que el mapa sea visible cuando sea necesario
    setIsMapVisible(true);
  }, []);

  return (
    <section className="my-16">
      <h2 className="text-2xl md:text-4xl font-bold text-cyan-700 text-center mb-4 md:mb-8">Nuestra Ubicación</h2>
      {isMapVisible && (
        <div className="w-full h-96 mx-auto max-w-screen-xl px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.3036668955924!2d-93.13256132484915!3d16.761560984022786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd9ba264bfae5%3A0x3244176b94a09529!2sAma%20ser%20el%20cambio%20AC!5e0!3m2!1ses-419!2smx!4v1727149076334!5m2!1ses-419!2smx"
            title="Mapa de la ubicación de Ama Ser el Cambio"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default Map;
