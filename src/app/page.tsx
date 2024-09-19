// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import CardContainer from './components/cards';

const Home: React.FC = () => {
  return (
    <>
      {/* Configuración de la cabecera del documento */}
      <Head>
        <title>Ama Ser el Cambio AC</title>
        <meta
          name="description"
          content="Página oficial de Ama Ser el Cambio AC, una asociación civil sin fines de lucro."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-blue-500 to-green-600 text-white text-center py-20">
          <h1 className="text-5xl font-bold">Ama Ser el Cambio AC</h1>
          <p className="text-2xl mt-4">"Manos que dan jamás estarán vacías"</p>
          <p className="text-lg mt-2">¡Súmate a la nueva generación!</p>
        </header>

        {/* Sección "Quiénes Somos" */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">¿Quiénes Somos?</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            "Ama Ser el Cambio" es una asociación civil sin fines de lucro ni afinidad política o religiosa que busca
            el bienestar común de la sociedad mediante el apoyo a sectores vulnerables para el desarrollo integral de
            las comunidades.
          </p>
        </section>

        {/* Sección de Proyectos y Actividades */}
        <CardContainer/>

        {/* Sección de Contacto */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Contáctanos</h2>
          <p className="text-lg mb-4 text-gray-700">Correo: amaserelcambio@gmail.com</p>
          <p className="text-lg text-gray-700">Teléfono: 9611551352</p>
        </section>

        {/* Footer */}
      </main>
    </>
  );
};

export default Home;
