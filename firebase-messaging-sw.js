// public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging.js");

firebase.initializeApp({
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Mensaje en segundo plano recibido: ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/images/logo.png", // Cambia esto por la ruta a tu icono
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
