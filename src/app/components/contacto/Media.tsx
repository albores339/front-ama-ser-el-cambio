// components/SocialMediaLinks.tsx
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SocialMediaLinks: React.FC = () => (
  <section className="mt-16 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Síguenos en nuestras redes sociales</h2>
    <div className="flex justify-center space-x-8">
      <a href="https://www.facebook.com/profile.php?id=61558179819875" aria-label="Facebook" className="text-cyan-600 text-4xl hover:text-lime-500 transition-all duration-300">
        <FaFacebook />
      </a>
      <a href="https://instagram.com/amaserelcambio" aria-label="Instagram" className="text-cyan-600 text-4xl hover:text-lime-500 transition-all duration-300">
        <FaInstagram />
      </a>
      <a href="https://wa.me/5219611551352" aria-label="WhatsApp" className="text-cyan-600 text-4xl hover:text-lime-500 transition-all duration-300">
        <FaWhatsapp />
      </a>
    </div>
  </section>
);

export default SocialMediaLinks;
