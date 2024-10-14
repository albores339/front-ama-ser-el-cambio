"use client";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { UserIcon, EnvelopeIcon, TrashIcon, ChatBubbleLeftIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"; // Heroicons

const MySwal = withReactContent(Swal);

interface Message {
  _id: string;
  nombre: string;
  email: string;
  mensaje: string;
}

const BandejaEntrada: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

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
    const result = await MySwal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Error al eliminar el mensaje");
        }

        // Eliminar el mensaje de la lista local
        setMessages(messages.filter((message) => message._id !== id));

        MySwal.fire("¡Eliminado!", "El mensaje ha sido eliminado.", "success");
      } catch (error) {
        MySwal.fire("Error", "Hubo un problema al eliminar el mensaje.", "error");
        console.error(error);
      }
    }
  };

  // Filtrar los mensajes según el término de búsqueda
  const filteredMessages = messages.filter((message) =>
    message.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-8 px-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Bandeja de Entrada</h1>

      {/* Buscador */}
      <div className="relative max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {filteredMessages.length === 0 ? (
          <p className="text-center text-gray-600">No hay mensajes en la bandeja de entrada.</p>
        ) : (
          filteredMessages.map((message) => (
            <div key={message._id} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto sm:max-w-full">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                    <h2 className="text-lg font-bold text-cyan-700 flex items-center mb-2 sm:mb-0">
                    <UserIcon className="w-5 h-5 mr-2 text-cyan-700" /> {message.nombre}
                    </h2>
                    <p className="text-sm text-gray-500 flex items-center">
                    <EnvelopeIcon className="w-5 h-5 mr-2 text-gray-500" /> {message.email}
                    </p>
                </div>
                <p className="text-gray-800 mb-4 flex items-center">
                    <ChatBubbleLeftIcon className="w-5 h-5 mr-2 text-gray-700" /> {message.mensaje}
                </p>
                <div className="flex justify-end">
                    <button
                    className="text-sm text-red-600 hover:underline flex items-center"
                    onClick={() => handleDelete(message._id)}
                    >
                    <TrashIcon className="w-5 h-5 mr-1 text-red-600" /> Eliminar
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
