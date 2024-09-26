"use client";  // Marca este archivo como un Client Component

import { useEffect, useState } from 'react';

type PaypalButtonProps = {
  amount: string;
  onSuccess: (details: any) => void;
};

const PaypalButton: React.FC<PaypalButtonProps> = ({ amount, onSuccess }) => {
  const [sdkReady, setSdkReady] = useState(false);

  // Cargar el SDK de PayPal
  useEffect(() => {
    const scriptId = 'paypal-sdk';
    const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;  // Usamos la variable de entorno

    const loadPaypalScript = () => {
      const paypalScript = document.createElement('script');
      paypalScript.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}`;  // Usamos la variable de entorno aquí
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

    if (sdkReady && (window as any).paypal) {
      (window as any).paypal.Buttons({
        style: {
          layout: 'vertical',  // Configuración de estilo (puedes cambiarlo a 'horizontal')
          color: 'blue',       // Cambia el color si lo deseas
          shape: 'rect',       // Forma del botón (rectangular)
          label: 'donate'      // Etiqueta del botón (puedes poner 'checkout', 'pay', etc.)
        },
        createOrder: function (data: any, actions: any) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount,  // Aquí defines el monto
              },
            }],
          });
        },
        onApprove: function (data: any, actions: any) {
          return actions.order.capture().then((details: any) => {
            onSuccess(details);  // Llama la función onSuccess cuando el pago sea aprobado
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

  return <div id="paypal-button-container" />;  // Este es el contenedor donde se verá el botón
};

export default PaypalButton;
