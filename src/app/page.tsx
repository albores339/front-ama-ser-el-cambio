import React from 'react';
import Head from 'next/head';
import CardContainer from './components/cards';
import Contactanos from './components/contactanos';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <>
      {/* Configuración de la cabecera del documento */}
      <Head>
        <title>Ama Ser el Cambio A.C.</title>
        <meta
          name="description"
          content="Página oficial de Ama Ser el Cambio AC, una asociación civil sin fines de lucro."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {/* Hero Section - Redesigned */}
        <header className="relative w-full h-screen bg-gradient-to-b from-cyan-500 to-blue-800 text-white flex flex-col justify-center items-center">

          {/* Imagen de fondo */}
          <Image
            src="/images/hero.webp"
            alt="Voluntariado"
            layout="fill"
            objectFit="cover"
            className="z-0 filter brightness-50"
          />

          {/* Contenido del Hero */}
          <div className="relative z-10 text-center px-6">
            <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">
              Ama Ser el Cambio A. C.
            </h1>
            <p className="text-3xl mt-4 mb-8 text-lime-200 drop-shadow-lg">
              &quot;Manos que dan jamás estarán vacías&quot;
            </p>
            <p className="text-xl mb-12 text-white drop-shadow-lg">
              ¡Súmate a la nueva generación!
            </p>

            <a
              href="#donate"
              className="inline-block mt-6 bg-white text-cyan-600 font-bold py-4 px-10 rounded-full shadow-2xl transition-transform transform hover:scale-110 duration-300 ease-in-out hover:bg-lime-500 hover:text-white"
            >
              Donar Ahora
            </a>
          </div>
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

        {/* Sección de Registro de Afiliados */}
        <section className="py-12 px-6 bg-gradient-to-r from-violet-100 to-purple-200 rounded-xl shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
            {/* Sección de Texto */}
            <div className="text-center lg:text-left lg:w-3/5 pl-8">
              <h2 className="text-4xl font-bold mb-6 text-lime-600">Regístrate como Afiliado</h2>
              <p className="text-lg leading-relaxed text-stone-700 mb-8">
                Únete a nuestra comunidad y forma parte de quienes están haciendo el cambio. Regístrate ahora y empieza a colaborar con nosotros.
              </p>
              <a
                href="/registrarse"
                className="inline-block bg-cyan-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-lime-600"
                aria-label="Regístrate como Afiliado"
              >
                Regístrate
              </a>
            </div>

            {/* Imagen del jaguar */}
            <div className="mt-8 lg:mt-0 lg:w-2/5 flex justify-center">
              <Image
                src="/images/jaguarcito.webp"
                alt="Jaguar voluntario entregando comida"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl border-4 border-lime-600"
              />
            </div>
          </div>
        </section>

        {/* Sección de Proyectos y Actividades */}
        <CardContainer />

        {/* Sección de Donaciones */}
        <section id="donate" className="py-16 px-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-center rounded-lg shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Haz la diferencia con tu donación</h2>
            <p className="text-lg mb-6">
              Tu aporte puede cambiar la vida de muchas personas. Cada donación nos ayuda a continuar con nuestros proyectos de apoyo a los sectores más vulnerables de la sociedad. ¡Únete a nuestra misión!
            </p>
            <a
              href="/donar"
              className="bg-white text-pink-500 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out hover:bg-purple-500 hover:text-white"
            >
              💖 Donar Ahora
            </a>
          </div>
        </section>

        {/* Sección de Ubicación */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Nuestra Ubicación</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">Encuéntranos en nuestra oficina central:</p>
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

        <Contactanos />

        {/* Footer */}
      </main>
    </>
  );
};

export default Home;
