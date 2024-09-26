// pages/contacto.tsx
import React from 'react';
import Head from 'next/head';
import Contactanos from '../components/contactanos';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contáctanos | Ama Ser el Cambio AC</title>
        <meta
          name="description"
          content="Ponte en contacto con Ama Ser el Cambio AC para colaborar o resolver cualquier duda que tengas."
        />
      </Head>

      <main className="py-16 px-6 max-w-7xl mx-auto">
        {/* Componente de Formulario de contacto */}
        <section>
          <Contactanos />
        </section>

        {/* Sección de redes sociales */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Síguenos en nuestras redes sociales</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://www.facebook.com/profile.php?id=61558179819875" className="text-cyan-600 text-4xl hover:text-lime-500 transition-all duration-300">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/amaserelcambio" className="text-cyan-600 text-4xl hover:text-lime-500 transition-all duration-300">
              <FaInstagram />
            </a>
            <a href="https://wa.me/5219611551352" className="text-cyan-600 text-4xl hover:text-lime-500 transition-all duration-300">
              <FaWhatsapp />
            </a>
          </div>
        </section>

        {/* Mapa embebido con la ubicación */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Nuestra Ubicación</h2>
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.3036668955924!2d-93.13256132484915!3d16.761560984022786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd9ba264bfae5%3A0x3244176b94a09529!2sAma%20ser%20el%20cambio%20AC!5e0!3m2!1ses-419!2smx!4v1727149076334!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
