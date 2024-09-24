import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton: React.FC = () => {
  const whatsappNumber = '5219611551352'; // Reemplaza con tu número de WhatsApp con código internacional

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-400 transition duration-300"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsappButton;
