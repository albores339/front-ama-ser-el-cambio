"use client";

import { useState, useEffect } from 'react';
import AvisoItem from '@/app/components/avisos/AvisoItem'; // Asegúrate de que la ruta sea correcta
import AvisoForm from '@/app/components/avisos/AvisoForm'; // Importa el componente de formulario
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Swal from 'sweetalert2'; // Importar SweetAlert

interface Aviso {
  _id: string; // Asegúrate de que el campo en tu base de datos MongoDB se llame _id
  titulo: string;
  mensaje: string;
}

export default function Avisos() {
  const [avisos, setAvisos] = useState<Aviso[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [titulo, setTitulo] = useState<string>('');
  const [mensaje, setMensaje] = useState<string>('');

  // Paginación
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 1;

  useEffect(() => {
    const fetchAvisos = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/avisos`);
        if (!response.ok) throw new Error('Failed to fetch avisos');
        const data: Aviso[] = await response.json();
        setAvisos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAvisos();
  }, []);

  const handleSubmit = async (aviso: { titulo: string; mensaje: string }) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/avisos${editId ? `/${editId}` : ''}`, {
        method: editId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(aviso),
      });

      if (!response.ok) throw new Error('Failed to save aviso');

      const newAviso: Aviso = await response.json();
      setAvisos(editId ? avisos.map(a => (a._id === editId ? newAviso : a)) : [newAviso, ...avisos]);
      resetForm();

      // Enviar notificaciones a todos los usuarios
      await sendNotificationsToAllUsers(newAviso);

      // Mostrar SweetAlert de éxito
      Swal.fire({
        title: 'Éxito!',
        text: 'Aviso guardado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
    } catch (error) {
      console.error(error);
      // Mostrar SweetAlert de error
      Swal.fire({
        title: 'Error!',
        text: 'No se pudo guardar el aviso.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  const handleEdit = (aviso: Aviso) => {
    setEditId(aviso._id);
    setTitulo(aviso.titulo);
    setMensaje(aviso.mensaje);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/avisos/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete aviso');

      setAvisos(avisos.filter(aviso => aviso._id !== id));

      // Mostrar SweetAlert de éxito
      Swal.fire({
        title: 'Éxito!',
        text: 'Aviso eliminado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
    } catch (error) {
      console.error(error);
      // Mostrar SweetAlert de error
      Swal.fire({
        title: 'Error!',
        text: 'No se pudo eliminar el aviso.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  // Calcular los avisos a mostrar
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAvisos = avisos.slice(indexOfFirstItem, indexOfLastItem);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(avisos.length / itemsPerPage);

  // Función para cambiar de página
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const resetForm = () => {
    setEditId(null);
    setTitulo('');
    setMensaje('');
  };

  // Función para enviar notificaciones a todos los usuarios
  const sendNotificationsToAllUsers = async (aviso: Aviso) => {
    const message = {
      title: aviso.titulo,
      body: aviso.mensaje,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notifications/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      if (!response.ok) throw new Error('Failed to send notifications');
      console.log('Notificaciones enviadas a todos los usuarios');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 animate__animated animate__fadeInDown">
        Último Aviso
      </h1>

      {/* Lista de Avisos */}
      <section className="space-y-6 mb-12">
        {currentAvisos.map((aviso) => (
          <AvisoItem
            key={aviso._id} // Usar ID para la clave
            aviso={aviso}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </section>

      {/* Controles de Paginación */}
      <div className="flex justify-center space-x-2 mb-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          <FaChevronLeft />
        </button>

        {Array.from({ length: 3 }, (_, index) => {
          const pageNumber = currentPage - 1 + index;
          // Asegúrate de que no vaya por debajo de 1 o por encima del total de páginas
          if (pageNumber < 1 || pageNumber > totalPages) return null;
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-4 py-2 rounded ${currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Formulario para Publicar o Editar un Aviso */}
      <section className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className='text-4xl text-center font-bold m-4'>{editId ? 'Editar Aviso' : 'Crear Nuevo Aviso'}</h2>
        <AvisoForm
          onSubmit={handleSubmit}
          editId={editId}
          tituloInicial={titulo}
          mensajeInicial={mensaje}
          onResetEdit={resetForm}
        />
      </section>
    </main>
  );
}
