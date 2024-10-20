import React from 'react';
import Head from 'next/head';

const AvisoPrivacidad: React.FC = () => {
  return (
    <>
      <Head>
        <title>Aviso de Privacidad | Ama Ser el Cambio AC</title>
        <meta 
          name="description" 
          content="Consulta el Aviso de Privacidad de Ama Ser el Cambio AC en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares." 
        />
      </Head>

      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-stone-800 mb-8">
          Aviso de Privacidad
        </h1>
        <section className="text-stone-700 leading-relaxed text-base md:text-lg">
          <p className="mb-4">
            <strong>Ama Ser el Cambio AC</strong>, en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento, informa lo siguiente:
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">1. Responsable del Tratamiento de sus Datos Personales</h2>
          <p className="mb-4">
            <strong>Ama Ser el Cambio AC</strong> es responsable del tratamiento de sus datos personales, los cuales serán utilizados para proveer los servicios solicitados, facturación y notificaciones relacionadas.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">2. Datos Personales que Recabamos</h2>
          <p className="mb-4">
            Recabamos los siguientes datos personales: nombre completo, dirección, teléfono, correo electrónico y datos de pago.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">3. Finalidades del Tratamiento de Datos Personales</h2>
          <p className="mb-4">
            Sus datos serán utilizados para:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Proveer productos y servicios solicitados.</li>
            <li>Notificar sobre productos o servicios relacionados.</li>
            <li>Informar sobre cambios en productos o servicios.</li>
            <li>Evaluar la calidad del servicio brindado.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">4. Transferencia de Datos Personales</h2>
          <p className="mb-4">
            No transferimos sus datos personales a terceros, salvo cuando la ley lo exija o sea necesario para la prestación de servicios.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">5. Medios para Ejercer los Derechos ARCO</h2>
          <p className="mb-4">
            Puede acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales contactando a <strong>Ama Ser el Cambio AC</strong> a través del correo electrónico <a href="mailto:amaserelcambio@gmail.com" className="text-cyan-800 hover:underline">amaserelcambio@gmail.com</a>.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">6. Cambios al Aviso de Privacidad</h2>
          <p className="mb-4">
            Nos reservamos el derecho de modificar este aviso de privacidad para adaptarlo a cambios legislativos o políticas internas. Las actualizaciones estarán disponibles en nuestra página web <a href="https://front-ama-ser-el-cambio.vercel.app/" className="text-cyan-800 hover:underline">https://front-ama-ser-el-cambio.vercel.app/</a>.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">7. Consentimiento</h2>
          <p className="mb-4">
            Al proporcionar sus datos personales, usted consiente su tratamiento conforme a los términos de este aviso de privacidad.
          </p>

          <p className="text-sm text-gray-500">Última actualización: 27 agosto 2024</p>
        </section>
      </main>
    </>
  );
};

export default AvisoPrivacidad;
