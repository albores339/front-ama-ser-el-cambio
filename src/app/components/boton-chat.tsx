import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';// Importa el contexto

const WhatsappButton: React.FC = () => {
  const { isAdmin } = useAuth(); // Obtiene si es administrador desde el contexto
  const whatsappNumber = '5219611551352'; // Reemplaza con tu número de WhatsApp con código internacional

  // Si el usuario es administrador, no mostrar el botón
  if (isAdmin) {
    return null;
  }

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
