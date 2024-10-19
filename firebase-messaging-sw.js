// public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "TU_API_KEY", // Reemplaza con tu API key
  authDomain: "TU_AUTH_DOMAIN", // Reemplaza con tu Auth domain
  projectId: "TU_PROJECT_ID", // Reemplaza con tu Project ID
  storageBucket: "TU_STORAGE_BUCKET", // Reemplaza con tu Storage bucket
  messagingSenderId: "TU_MESSAGING_SENDER_ID", // Reemplaza con tu Messaging sender ID
  appId: "TU_APP_ID", // Reemplaza con tu App ID
  measurementId: "TU_MEASUREMENT_ID" // Reemplaza con tu Measurement ID, si es necesario
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
