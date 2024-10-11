// components/DonationHero.tsx
import Image from 'next/image';
import Link from 'next/link';

const DonationHero: React.FC = () => (
  <div className="relative w-full h-96 mb-6">
      <Image
        src="/images/donacion.webp"
        alt="Inspiración para donar"
        fill // Esto hace que la imagen ocupe todo el contenedor
        className="rounded-lg shadow-2xl object-cover" // Asegúrate de aplicar 'object-cover' aquí
        priority
      />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-white drop-shadow-md m-4 text-center">Haz una Donación</h1>
      <p className="text-xl text-white mb-6 max-w-xl text-center">
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
