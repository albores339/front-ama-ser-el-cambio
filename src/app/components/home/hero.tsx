import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => (
  <header className="relative w-full h-screen bg-gradient-to-b from-cyan-500 to-blue-800 text-white flex flex-col justify-center items-center">
    {/* Imagen de fondo */}
    <Image
      src="/images/hero.webp"
      alt="Hero image"
      width={1280}  // Tamaño correcto
      height={720}
      sizes="100vw" // Utiliza todo el ancho de la pantalla
      priority // Marca la imagen como prioritaria
      decoding="async" // Optimiza el rendimiento al decodificar imágenes
      className="object-cover w-full h-full absolute top-0 left-0 z-0 brightness-50"
    />

    {/* Contenido del héroe */}
    <div className="relative z-10 text-center px-6">
      <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">Ama Ser el Cambio A.C.</h1>
      <p className="text-3xl mt-4 mb-8 text-lime-200 drop-shadow-lg">{`"Manos que dan jamás estarán vacías".`}</p>
      <p className="text-xl mb-12 text-white drop-shadow-lg">¡Súmate a la nueva generación!</p>
      <Link href="/donar">
        <button className="animate-shake inline-block mt-6 bg-white text-cyan-900 font-bold py-4 px-10 rounded-full shadow-2xl transition-transform transform hover:scale-110 duration-300 ease-in-out hover:bg-lime-700">
          Donar Ahora
        </button>
      </Link>
    </div>
  </header>
);

export default HeroSection;
