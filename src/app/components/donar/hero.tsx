// components/DonationHero.tsx
import Image from 'next/image';
import Link from 'next/link';

const DonationHero: React.FC = () => (
  <div className="relative w-full h-80 md:h-96 mb-6">
      <Image
        src="/images/donacion.webp"
        alt="Inspiración para donar"
        fill // Esto hace que la imagen ocupe todo el contenedor
        className="rounded-lg shadow-xl md:shadow-2xl object-cover brightness-50" // Asegúrate de aplicar 'object-cover' aquí
        priority
      />
    <div className="absolute inset-0 flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-6xl font-bold text-white drop-shadow-md m-4 text-center">Haz una Donación</h1>
      <p className="text-lg mx-4 md:text-xl text-white mb-6 max-w-xl text-center">
        Tu donación puede marcar una diferencia en la vida de muchas personas. ¡Únete a nuestra misión y apoya el cambio!
      </p>
      <Link href="#detalles">
        <button className="inline-block bg-lime-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-lime-600 transition-all">
          Descubre Cómo Donar
        </button>
      </Link>
    </div>
  </div>
);

export default DonationHero;
