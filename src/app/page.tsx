// pages/index.tsx
import React from 'react';
import Head from 'next/head';

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

      <main className="bg-gray-50 min-h-screen">
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
        <section className="bg-gray-100 py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Nuestros Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Apoyo Alimenticio</h3>
              <p className="text-gray-700">
                Reparto de alimentos en las afueras de hospitales, terminales, asilos, orfanatos, etc.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Apoyo al Deporte</h3>
              <p className="text-gray-700">
                Carrera de 5km con premios para los participantes, realizada una vez al año.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Apoyo Ciudadano</h3>
              <p className="text-gray-700">
                Capacitación en educación vial en las afueras de escuelas públicas y avenidas transitadas.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Contacto */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Contáctanos</h2>
          <p className="text-lg mb-4 text-gray-700">Correo: amaserelcambio@gmail.com</p>
          <p className="text-lg text-gray-700">Teléfono: 9611551352</p>
        </section>

        {/* Footer */}
        <footer className="bg-blue-500 text-white text-center py-6">
          <p>© 2024 Ama Ser el Cambio AC - Todos los derechos reservados</p>
          <p>Síguenos en: Facebook - Ama Ser el Cambio AC</p>
        </footer>
      </main>
    </>
  );
};

export default Home;
