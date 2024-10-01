// components/AfiliadoSection.tsx
import Image from 'next/image';
import Link from 'next/link';

const AfiliadoSection: React.FC = () => (
  <section className="py-12 px-6 bg-violet-50 rounded-xl shadow-lg">
    <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
      <div className="text-center lg:text-left lg:w-3/5 pl-8">
        <h2 className="text-4xl font-bold mb-6 text-lime-700">Regístrate como Afiliado</h2>
        <p className="text-lg leading-relaxed text-stone-700 mb-8">
          Únete a nuestra comunidad y forma parte de quienes están haciendo el cambio. Regístrate ahora y empieza a colaborar con nosotros.
        </p>
        <Link href="/registrarse">
          <button className="inline-block bg-cyan-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-lime-600">
            Regístrate
          </button>
        </Link>
      </div>
      <div className="mt-8 lg:mt-0 lg:w-2/5 flex justify-center">
      <Image
        src="/images/jaguarcito.webp"
        alt="Jaguar voluntario entregando comida"
        width={400}
        height={400}
        sizes="(max-width: 400px) 100vw, 400px"
        className="rounded-lg shadow-2xl border-4 border-lime-600"
      />
      </div>
    </div>
  </section>
);

export default AfiliadoSection;
