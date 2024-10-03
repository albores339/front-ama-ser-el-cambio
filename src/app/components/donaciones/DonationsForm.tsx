"use client";

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { XMarkIcon } from "@heroicons/react/24/solid";

interface DonationFormProps {
  onClose: () => void;
  onAdd: (donation: { name: string; amount: number; date: string }) => void;
}

const DonationForm: React.FC<DonationFormProps> = ({ onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Preparar los datos de la donación
    const newDonation = { name, amount: parseFloat(amount), date };

    try {
      // Enviar la donación al servidor con el método POST
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/donations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDonation),
      });

      if (!response.ok) {
        throw new Error('Error al enviar la donación');
      }

      // Si la solicitud es exitosa, agregar la donación al frontend
      const donation = await response.json();
      onAdd(donation); // Agrega la donación en la interfaz de usuario

      // Mostrar el SweetAlert de éxito
      Swal.fire('¡Donación Agregada!', 'La donación ha sido registrada exitosamente.', 'success');
      onClose();
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'No se pudo agregar la donación. Inténtalo de nuevo más tarde.', 'error');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <XMarkIcon className="w-6 h-6 text-red-500" />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Añadir Donación</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Nombre de la Persona</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Monto</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Fecha</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button type="submit" className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600">
            Agregar Donación
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
