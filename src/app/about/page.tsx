import React from 'react';
import Head from 'next/head';

const QuienesSomos: React.FC = () => {
  return (
    <>
      <Head>
        <title>Quiénes Somos | Ama Ser el Cambio AC</title>
        <meta
          name="description"
          content="Conoce más sobre Ama Ser el Cambio AC, una asociación civil que busca el bienestar común de la sociedad."
        />
      </Head>
      <main className="py-16 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">¿Quiénes Somos?</h1>
        <section className="text-lg leading-relaxed text-gray-700 mb-12">
          <p className="mb-6">
            "Ama Ser el Cambio" es una asociación civil sin fines de lucro ni afinidad política ni religiosa, que busca el bienestar común de la sociedad mediante el apoyo a sectores vulnerables para el desarrollo integral de las comunidades.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-cyan-600">Objeto Social</h2>
          <p className="mb-6">
            Apoyar a los sectores vulnerables para el desarrollo integral de las comunidades con proyectos productivos, económicos, sociales, culturales, ambientales, deportivos, familiares y de salud, para el fortalecimiento y crecimiento regional.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-cyan-600">Misión</h2>
          <p className="mb-6">
            Ser una asociación civil innovadora, ágil, proactiva y responsable para fortalecer a los diversos sectores productivos, sociales, culturales, deportivos y vulnerables en la región.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-cyan-600">Visión</h2>
          <p className="mb-6">
            Apoyar, integrar y consolidar una sociedad con dedicación, capacidad y altruismo en las zonas urbanas y rurales para fortalecer el crecimiento productivo y el bienestar familiar.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-cyan-600">Valores</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Inclusión</li>
            <li>Respeto</li>
            <li>Honestidad</li>
            <li>Diversidad</li>
            <li>Equidad de género</li>
            <li>Solidaridad</li>
            <li>Responsabilidad</li>
            <li>Perseverancia</li>
            <li>Cuidado ambiental</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default QuienesSomos;
