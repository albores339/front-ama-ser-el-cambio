"use client";  // Marca este archivo como un Client Component

import { useEffect, useState } from 'react';

// Declara el tipo manualmente para `window.paypal`
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    paypal: any;  // Usamos `any` aquí porque no hay un paquete de tipos oficial
  }
}

// Define los tipos para las props del componente
type PaypalButtonProps = {
  amount: string;
  onSuccess: (details: PaypalDetails) => void;
};

// Define el tipo para los detalles del pago de PayPal
type PaypalDetails = {
  payer: {
    name: {
      given_name: string;
    };
  };
};

// Define el tipo para las acciones del botón de PayPal
type PaypalActions = {
  order: {
    create: (options: { purchase_units: { amount: { value: string; currency_code: string } }[] }) => Promise<string>;
    capture: () => Promise<PaypalDetails>;
  };
};

const PaypalButton: React.FC<PaypalButtonProps> = ({ amount, onSuccess }) => {
  const [sdkReady, setSdkReady] = useState(false);

  // Cargar el SDK de PayPal
  useEffect(() => {
    const scriptId = 'paypal-sdk';
    const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

    const loadPaypalScript = () => {
      const paypalScript = document.createElement('script');
      paypalScript.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}&currency=MXN`;
      paypalScript.id = scriptId;
      paypalScript.async = true;
      document.body.appendChild(paypalScript);

      paypalScript.onload = () => {
        setSdkReady(true);  // SDK está cargado y listo
      };
    };

    if (!document.getElementById(scriptId)) {
      loadPaypalScript();  // Cargar el SDK si no está cargado ya
    } else {
      setSdkReady(true);  // Si ya está cargado, solo marca sdkReady como true
    }
  }, []);

  // Limpiar el contenedor antes de renderizar nuevamente para evitar duplicados
  useEffect(() => {
    const paypalContainer = document.getElementById('paypal-button-container');
    if (paypalContainer) {
      paypalContainer.innerHTML = "";  // Limpiar el contenido antes de renderizar de nuevo
    }

    if (sdkReady && window.paypal) {
      window.paypal.Buttons({
        style: {
          layout: 'vertical',  // Configuración de estilo (puedes cambiarlo a 'horizontal')
          color: 'blue',       // Cambia el color si lo deseas
          shape: 'rect',       // Forma del botón (rectangular)
          label: 'donate'      // Etiqueta del botón (puedes poner 'checkout', 'pay', etc.)
        },
        createOrder: function (data: unknown, actions: PaypalActions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount,
                currency_code: 'MXN',
              },
            }],
          });
        },
        onApprove: function (data: unknown, actions: PaypalActions) {
          return actions.order.capture().then((details: PaypalDetails) => {
            onSuccess(details);
          });
        },
      }).render('#paypal-button-container');  // Renderiza el botón en el contenedor
    }

    // Ajusta el z-index del iframe de PayPal
    const interval = setInterval(() => {
      const paypalIframe = document.querySelector('iframe');
      if (paypalIframe) {
        paypalIframe.style.zIndex = '0';  // Ajusta el z-index del iframe
        clearInterval(interval);  // Detén el intervalo una vez que el iframe es encontrado
      }
    }, 1000);  // Revisa cada segundo hasta que se encuentre el iframe

  }, [sdkReady, amount, onSuccess]);

  return <div id="paypal-button-container" className='' />;  // Este es el contenedor donde se verá el botón
};

export default PaypalButton;