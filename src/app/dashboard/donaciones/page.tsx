"use client";

import React, { useState, useEffect } from 'react';
import DonationForm from '@/app/components/donaciones/DonationsForm';
import GastoForm from '@/app/components/donaciones/GastoForm';
import { UserIcon, CurrencyDollarIcon, CalendarIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

interface Donation {
  _id: string;
  name: string;
  amount: number;
  date: string;
}

interface Gasto {
  _id: string;
  name: string;
  amount: number;
  date: string;
}

const DonationsPage: React.FC = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [showGastoForm, setShowGastoForm] = useState(false);

  // Fetch Donaciones y Gastos
  useEffect(() => {
    const fetchDonations = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/donations`);
      const data = await response.json();
      setDonations(data);
    };

    const fetchGastos = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/expenses`);
      const data = await response.json();
      setGastos(data);
    };

    fetchDonations();
    fetchGastos();
  }, []);

  const totalDonations = donations.reduce((acc, donation) => acc + donation.amount, 0);
  const totalGastos = gastos.reduce((acc, gasto) => acc + gasto.amount, 0);
  const balance = totalDonations - totalGastos;

  const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

  const handleAddDonation = (newDonation: Omit<Donation, '_id'>) => {
    const donationWithId = { ...newDonation, _id: generateId() }; // Genera un ID único
    setDonations([...donations, donationWithId]);
  };
  

  const handleAddGasto = (newGasto: Omit<Gasto, '_id'>) => {
    // Simular el _id o esperar recibirlo desde el backend
    const gastoWithId = { ...newGasto, _id: generateId() }; // O recibe el _id del backend si es posible
    setGastos([...gastos, gastoWithId]);
  };
  

  // Eliminar Donaciones
  const handleDeleteDonation = async (id: string) => {
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
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/donations/${id}`, {
        method: 'DELETE'
      });

      setDonations(donations.filter(donation => donation._id !== id));
      MySwal.fire('Eliminado', 'La donación ha sido eliminada', 'success');
    }
  };

  // Eliminar Gastos
  const handleDeleteGasto = async (id: string) => {
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
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/expenses/${id}`, {
        method: 'DELETE'
      });

      setGastos(gastos.filter(gasto => gasto._id !== id));
      MySwal.fire('Eliminado', 'El gasto ha sido eliminado', 'success');
    }
  };

  return (
    <div className="min-h-screen p-8 rounded-lg">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Balance:</h1>
        <div className="bg-gradient-to-r from-lime-500 to-lime-700 shadow-lg text-4xl font-bold p-10 rounded-full w-40 h-40 flex items-center justify-center text-white mx-auto">
          ${balance.toFixed(2)}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-6 space-y-4 md:space-y-0">
        <button
          onClick={() => setShowDonationForm(true)}
          className="bg-lime-600 text-white py-2 px-4 rounded-lg flex items-center hover:bg-lime-700"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          Añadir Donación
        </button>

        <button
          onClick={() => setShowGastoForm(true)}
          className="bg-red-600 text-white py-2 px-4 rounded-lg flex items-center hover:bg-red-700"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          Añadir Gasto
        </button>
      </div>

      {showDonationForm && (
        <DonationForm onClose={() => setShowDonationForm(false)} onAdd={handleAddDonation} />
      )}

      {showGastoForm && (
        <GastoForm onClose={() => setShowGastoForm(false)} onAdd={handleAddGasto} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Donaciones</h2>
          <div className="space-y-4">
            {donations.map((donation) => (
              <div key={donation._id} className="bg-violet-50 p-4 rounded-lg shadow-md w-84 md:92">
                <div className="flex items-center space-x-2">
                  <UserIcon className="w-5 h-5 text-stone-700" />
                  <p className="text-stone-700 font-bold">{donation.name}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <CurrencyDollarIcon className="w-5 h-5 text-stone-700" />
                  <p className="text-stone-700">Monto: ${donation.amount.toFixed(2)}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <CalendarIcon className="w-5 h-5 text-stone-600" />
                  <p className="text-stone-600 text-sm">Fecha: {new Date(donation.date).toLocaleDateString()}</p>
                </div>

                <button
                  onClick={() => handleDeleteDonation(donation._id)}
                  className="text-red-600 hover:text-red-800 flex items-center mt-2"
                >
                  <TrashIcon className="w-5 h-5 mr-1" />
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Gastos</h2>
          <div className="space-y-4">
            {gastos.map((gasto) => (
              <div key={gasto._id} className="bg-red-50 p-4 rounded-lg shadow-md w-84 md:96">
                <div className="flex items-center space-x-2">
                  <UserIcon className="w-5 h-5 text-stone-700" />
                  <p className="text-stone-700 font-bold">{gasto.name}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <CurrencyDollarIcon className="w-5 h-5 text-stone-700" />
                  <p className="text-stone-700">Monto: ${gasto.amount.toFixed(2)}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <CalendarIcon className="w-5 h-5 text-stone-600" />
                  <p className="text-stone-600 text-sm">Fecha: {new Date(gasto.date).toLocaleDateString()}</p>
                </div>

                <button
                  onClick={() => handleDeleteGasto(gasto._id)}
                  className="text-red-600 hover:text-red-800 flex items-center mt-2"
                >
                  <TrashIcon className="w-5 h-5 mr-1" />
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationsPage;
