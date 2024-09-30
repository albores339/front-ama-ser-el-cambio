import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contactanos: React.FC = () => {
  return (
    <section className="py-16 my-8 rounded-lg bg-violet-50 text-stone-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-600">Contáctanos</h2>
          <p className="text-lg text-gray-600 mt-4">Si tienes alguna pregunta o quieres colaborar con nosotros, no dudes en ponerte en contacto.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 md:space-x-12">
          {/* Formulario de contacto */}
          <div className="md:w-2/3 bg-white p-8 shadow-lg rounded-lg">
            <form>
              <div className="mb-6">
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="tuemail@ejemplo.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                  id="mensaje"
                  rows={4}
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-700 transition duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="md:w-1/3 bg-cyan-600 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="h-6 w-6 mr-4" />
              <p>Teléfono: 961 155 1352</p>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="h-6 w-6 mr-4" />
              <p>Email: amaserelcambio@gmail.com</p>
            </div>
            <div className="flex items-center mb-4">
              <FaWhatsapp className="h-6 w-6 mr-4" />
              <p>WhatsApp: 961 155 1352</p>
            </div>
            <p className="mt-4">Estamos disponibles para resolver cualquier duda o para que te unas a nuestra misión de hacer el cambio.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactanos;
