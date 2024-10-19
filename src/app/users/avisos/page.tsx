// pages/avisos.tsx
"use client"

import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

// Define la interfaz para un aviso
interface Aviso {
  _id: string;
  nombre: string;
  email: string;
  mensaje: string;
  createdAt: string; // Agregamos el campo de fecha
}

const Avisos = () => {
  const [avisos, setAvisos] = useState<Aviso[]>([]); // Usa la interfaz Aviso
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAvisos = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/avisos`);
        if (!response.ok) {
          throw new Error('Error al obtener los avisos');
        }
        const data: Aviso[] = await response.json(); // Especifica el tipo de data
        setAvisos(data);
      } catch (error) {
        // Manejo del error
        const errorMessage = (error instanceof Error) ? error.message : "Error desconocido";
        Swal.fire({
          title: 'Error',
          text: errorMessage,
          icon: 'error',
          timer: 3000,
          showConfirmButton: false,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAvisos();
  }, []);

  if (loading) {
    return <div>Cargando...</div>; // Puedes agregar un spinner o algo más estético aquí
  }

  return (
    <div className="max-w-lg mx-auto my-10 p-3">
      <h2 className="text-2xl font-semibold mb-6 text-cyan-700">Lista de Avisos</h2>
      {avisos.length === 0 ? (
        <p>No hay avisos disponibles.</p>
      ) : (
        <ul className="space-y-4">
          {avisos.map((aviso) => (
            <li key={aviso._id} className="p-4 border rounded shadow-md">
              <h3 className="text-lg font-bold">{aviso.nombre}</h3>
              <p className="text-gray-700">{aviso.mensaje}</p>
              <p className="text-gray-500">{aviso.email}</p>
              <p className="text-gray-400 text-sm">{new Date(aviso.createdAt).toLocaleDateString('es-CO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}</p> {/* Formato de fecha legible */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Avisos;
