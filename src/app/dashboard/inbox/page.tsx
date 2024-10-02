// pages/bandeja.tsx

"use client";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface Message {
  _id: string;
  nombre: string;
  email: string;
  mensaje: string;
}

const BandejaEntrada: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`);
        if (!response.ok) {
          throw new Error("Error al obtener los mensajes");
        }
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, []);

  // Función para eliminar un mensaje
  const handleDelete = async (id: string) => {
    // Confirmación de eliminación con SweetAlert2
    const result = await MySwal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error("Error al eliminar el mensaje");
        }

        // Eliminar el mensaje de la lista local
        setMessages(messages.filter((message) => message._id !== id));

        MySwal.fire(
          '¡Eliminado!',
          'El mensaje ha sido eliminado.',
          'success'
        );
      } catch (error) {
        MySwal.fire(
          'Error',
          'Hubo un problema al eliminar el mensaje.',
          'error'
        );
        console.error(error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-violet-50 py-8 px-4 m-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Bandeja de Entrada</h1>
      <div className="max-w-4xl mx-auto space-y-4">
        {messages.length === 0 ? (
          <p className="text-center text-gray-600">No hay mensajes en la bandeja de entrada.</p>
        ) : (
          messages.map((message) => (
            <div key={message._id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-bold text-cyan-700">{message.nombre}</h2>
                <p className="text-sm text-gray-500">{message.email}</p>
              </div>
              <p className="text-gray-800 mb-4">{message.mensaje}</p>
              <div className="flex justify-end">
                <button
                  className="text-sm text-red-600 hover:underline"
                  onClick={() => handleDelete(message._id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BandejaEntrada;
