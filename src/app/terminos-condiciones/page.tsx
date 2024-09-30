import React from 'react';
import Head from 'next/head';

const TerminosCondiciones: React.FC = () => {
  return (
    <>
      <Head>
        <title>Términos y Condiciones | Ama Ser el Cambio AC</title>
        <meta 
          name="description" 
          content="Lee los Términos y Condiciones de Ama Ser el Cambio AC sobre el uso de nuestro sitio web y servicios." 
        />
      </Head>

      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Términos y Condiciones
        </h1>
        <section className="text-gray-700 leading-relaxed text-lg">
          <p className="mb-4">
            Bienvenido a <strong>Ama Ser el Cambio AC</strong>. Al acceder y utilizar nuestro sitio web, aceptas los siguientes términos y condiciones. Si no estás de acuerdo con ellos, por favor, no utilices nuestro sitio.
          </p>

          <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los Términos</h2>
          <p className="mb-4">
            Al acceder y utilizar nuestro sitio, aceptas cumplir con estos términos, así como con todas las leyes aplicables. Si no estás de acuerdo con alguno de estos términos, no deberías usar nuestro sitio.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Uso del Sitio</h2>
          <p className="mb-4">
            Este sitio está destinado para uso personal y no comercial. No puedes modificar, reproducir, distribuir ni vender ningún contenido del sitio web.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. Propiedad Intelectual</h2>
          <p className="mb-4">
            Todo el contenido en este sitio es propiedad de <strong>Ama Ser el Cambio AC</strong> o de sus proveedores de contenido y está protegido por las leyes de derechos de autor.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Enlaces a Terceros</h2>
          <p className="mb-4">
            Nuestro sitio puede contener enlaces a sitios de terceros. No tenemos control sobre el contenido de esos sitios y no asumimos ninguna responsabilidad por ellos.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Limitación de Responsabilidad</h2>
          <p className="mb-4">
            <strong>Ama Ser el Cambio AC</strong> no será responsable por daños derivados del uso o la imposibilidad de usar este sitio web.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Modificaciones de los Términos</h2>
          <p className="mb-4">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Cualquier cambio será publicado en esta página.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Ley Aplicable y Jurisdicción</h2>
          <p className="mb-4">
            Estos términos se rigen por las leyes de [País/Estado]. Cualquier disputa será resuelta en los tribunales de [Ciudad, País/Estado].
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Contacto</h2>
          <p className="mb-4">
            Si tienes preguntas sobre estos términos, puedes contactarnos a través del correo <a href="mailto:amaserelcambio@gmail.com" className="text-cyan-800 hover:underline">amaserelcambio@gmail.com</a>.
          </p>

          <p className="text-sm text-gray-500">Última actualización: 27 agosto 2024</p>
        </section>
      </main>
    </>
  );
};

export default TerminosCondiciones;
