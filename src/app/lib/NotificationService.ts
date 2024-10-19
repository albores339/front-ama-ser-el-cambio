// lib/NotificationService.ts
import { messaging } from "./firebase"; // Asegúrate de que este archivo esté configurado correctamente
import { getToken, onMessage } from "firebase/messaging";

const requestPermission = async () => {
  if (!messaging) return; // Asegúrate de que messaging esté definido

  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: "TU_VAPID_KEY", // Reemplaza con tu VAPID Key real
      });

      if (token) {
        console.log("Token:", token);
        // Envía el token y el estado de permisos a tu servidor
        await fetch('/api/save-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token, userId: "ID_DEL_USUARIO" }), // Asegúrate de pasar el ID del usuario
        });
      }
    }
  } catch (error) {
    console.error("Error al obtener el token", error);
  }
};

const listenForMessages = () => {
  if (!messaging) return; // Asegúrate de que messaging esté definido

  onMessage(messaging, (payload: any) => { // eslint-disable-line
    console.log("Mensaje recibido: ", payload); // eslint-disable-line
    // Aquí puedes manejar la notificación
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    new Notification(notificationTitle, notificationOptions);
  });
};

const initNotifications = async () => {
  await requestPermission();
  listenForMessages();
};

export { initNotifications, requestPermission, listenForMessages }; 