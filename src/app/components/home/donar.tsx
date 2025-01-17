// components/DonateSection.tsx
import Link from 'next/link';

const DonateSection: React.FC = () => (
  <section id="donate" className="py-16 md:py-20 px-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white text-center rounded-lg shadow-lg animate-gradient-x bg-[length:200%_200%] my-14">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Haz la diferencia con tu donación</h2>
      <p className="text-base md:text-lg mb-6">
        Tu aporte puede cambiar la vida de muchas personas. Cada donación nos ayuda a continuar con nuestros proyectos de apoyo a los sectores más vulnerables de la sociedad. ¡Únete a nuestra misión!
      </p>
      <Link href="/donar">
        <button className="bg-white text-pink-700 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out hover:bg-purple-500 hover:text-white">💖 Donar Ahora</button>
      </Link>
    </div>
  </section>
);

export default DonateSection;
