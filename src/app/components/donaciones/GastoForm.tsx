"use client";

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { XMarkIcon } from "@heroicons/react/24/solid";

interface GastoFormProps {
  onClose: () => void;
  onAdd: (gasto: { name: string; amount: number; date: string }) => void;
}

const GastoForm: React.FC<GastoFormProps> = ({ onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newGasto = { name, amount: parseFloat(amount), date };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/expenses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGasto),
      });

      if (!response.ok) {
        throw new Error('Error al crear el gasto');
      }

      const gasto = await response.json();
      onAdd(gasto); // Añadir el nuevo gasto al frontend

      Swal.fire('¡Gasto Agregado!', 'El gasto ha sido registrado exitosamente.', 'success');
      onClose();
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'No se pudo agregar el gasto. Inténtalo más tarde.', 'error');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <XMarkIcon className="w-6 h-6 text-red-500" />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Añadir Gasto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Nombre del Gasto</label>
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
          <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
            Agregar Gasto
          </button>
        </form>
      </div>
    </div>
  );
};

export default GastoForm;