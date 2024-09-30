import React from 'react';
import Image from 'next/image';
import { FaPaypal } from 'react-icons/fa'; // Importamos el icono de PayPal

// Componente del botón de donación
const PaypalSimpleButton = () => {
  return (
    <div className="text-center"> {/* Contenedor centrado */}
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="834QUVSKCNZRQ" />
        {/* Botón personalizado con icono y clase shake */}
        <button
          type="submit"
          className="animate-shake bg-lime-600 text-white font-bold py-2 px-12 my-8 rounded-2xl hover:bg-lime-700 transition-all flex items-center justify-center mx-auto"
          title="Donar con PayPal"
        >
          <FaPaypal className="mr-2" size={24} /> {/* Icono de PayPal */}
          Dona ahora!
        </button>
        {/* Iconos de tarjetas */}
        <div className="mt-4">
          <Image
            alt="Métodos de pago aceptados"
            src="/images/badges.png"
            width={316}
            height={40}
            className="mx-auto"
          />
        </div>
      </form>
    </div>
  );
};

export default PaypalSimpleButton;
