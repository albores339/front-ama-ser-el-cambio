"use client"; // Marca la página como un Client Component

import Head from 'next/head';
import Image from 'next/image';
import { FaUniversity, FaKey, FaFileAlt } from 'react-icons/fa';
import PaypalButton from '../components/PaypalButton'; // Importa tu componente de PayPal

const Donaciones: React.FC = () => {
  return (
    <>
      <Head>
        <title>Donaciones | Ama Ser el Cambio AC</title>
        <meta name="description" content="Haz una donación para apoyar a Ama Ser el Cambio AC y sus proyectos en beneficio de los sectores más vulnerables de la sociedad." />
      </Head>
      <main className="max-w-5xl mx-auto">
        {/* Sección de imagen inspiradora */}
        <div className="relative w-full h-96 mb-6">
          <Image
            src="/images/donacion.webp" // Ruta a la imagen generada
            alt="Inspiración para donar"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-white drop-shadow-md m-4">Haz una Donación</h1>
            <p className="text-xl text-white mb-6 max-w-xl text-center">
              Tu donación puede marcar una diferencia en la vida de muchas personas. ¡Únete a nuestra misión y apoya el cambio!
            </p>
            <a
              href="#detalles"
              className="inline-block bg-lime-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-lime-600 transition-all"
            >
              Descubre Cómo Donar
            </a>
          </div>
        </div>

        <section id="detalles" className="text-lg leading-relaxed text-gray-700 my-16 text-center">
          <p className="mb-6">
            Cada donación es una oportunidad para mejorar la vida de personas en situaciones vulnerables. Tu aporte nos permite continuar con nuestros proyectos de apoyo en diversos sectores. ¡Únete a nuestra misión!
          </p>

          <h2 className="text-4xl font-bold text-cyan-600 mb-4">Detalles de Donación</h2>

          {/* Información Legal */}
          <div className="my-12 max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Información Legal</h2>
            <div className="flex flex-col md:flex-row justify-between items-center space-x-6 text-lg">
              <div className="flex items-center">
                <FaKey className="mr-2 text-gray-500" />
                <span>CLUNI: ASC160520074BD</span>
              </div>
              <div className="flex items-center">
                <FaFileAlt className="mr-2 text-gray-500" />
                <span>RFC: ASC160520NJA</span>
              </div>
              <div className="flex items-center">
                <FaFileAlt className="mr-2 text-gray-500" />
                <span>RPP: 112828</span>
              </div>
            </div>
          </div>

          {/* Sección de Transferencia Bancaria */}
          <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Transferencia Bancaria</h3>
            <p className="text-lg mb-4">
              Si prefieres hacer una donación mediante transferencia bancaria, aquí tienes los datos de nuestra cuenta.
            </p>
            <div className="flex flex-col items-center mb-4">
              <FaUniversity className="text-5xl text-blue-500 mb-4" />
              <p className="text-lg"><strong>Banco:</strong> Inbursa</p>
              <p className="text-lg"><strong>Cuenta:</strong> 50042343396</p>
              <p className="text-lg"><strong>CLABE:</strong> 036100500423433961</p>
            </div>
          </div>

          {/* Sección de Donar con PayPal */}
          <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Donar con Paypal</h3>
            <p className="text-lg mb-6">
              Selecciona el monto que deseas donar y realiza tu donación aunque no tengas cuenta a través de PayPal de forma fácil y segura.
            </p>
          <PaypalButton  />

          </div>
        </section>
      </main>
    </>
  );
};

export default Donaciones;