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
        <meta property="og:title" content="Quiénes Somos | Ama Ser el Cambio AC" />
        <meta property="og:description" content="Conoce más sobre Ama Ser el Cambio AC, una asociación civil que busca el bienestar común de la sociedad apoyando sectores vulnerables." />
        <meta property="og:image" content="/images/logo-ama.webp" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="py-16 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">¿Quiénes Somos?</h1>
        <section className="text-lg leading-relaxed text-gray-700">
          <p className="mb-6">
            {`"Ama Ser el Cambio" es una asociación civil sin fines de lucro ni afinidad política ni religiosa, que busca el bienestar común de la sociedad mediante el apoyo a sectores vulnerables.`}
          </p>
          <h2 className="text-3xl font-bold mb-4 text-cyan-600">Objeto Social</h2>
          <p className="mb-6">
            Apoyar a los sectores vulnerables con proyectos productivos, sociales, culturales, y de salud para el crecimiento regional.
          </p>
          <h2 className="text-3xl font-bold mb-4 text-cyan-600">Misión</h2>
          <p className="mb-6">
            Ser una asociación innovadora y responsable para fortalecer a sectores sociales y vulnerables en la región.
          </p>
          <h2 className="text-3xl font-bold mb-4 text-cyan-600">Visión</h2>
          <p className="mb-6">
            Consolidar una sociedad altruista en zonas urbanas y rurales, fortaleciendo el bienestar familiar.
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
