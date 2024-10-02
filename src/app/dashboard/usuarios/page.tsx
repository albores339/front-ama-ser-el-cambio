"use client";

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Obtener usuarios al cargar la página
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
        if (!response.ok) {
          throw new Error('Error al obtener los usuarios');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // El array vacío asegura que la función solo se ejecuta una vez al montar el componente

  // Función para eliminar un usuario
  const handleDelete = async (id: string) => {
    const result = await MySwal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Error al eliminar el usuario');
        }

        // Eliminar el usuario de la lista local
        setUsers(users.filter((user) => user._id !== id));

        MySwal.fire('¡Eliminado!', 'El usuario ha sido eliminado.', 'success');
      } catch (error: any) {
        MySwal.fire('Error', 'Hubo un problema al eliminar el usuario.', 'error');
        console.error(error);
      }
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Lista de Usuarios</h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {loading ? (
        <p className="text-center">Cargando...</p>
      ) : (
        <div className="space-y-4">
          {users.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full shadow-md rounded-lg mt-4">
                <thead>
                  <tr className="">
                    <th className="py-3 px-6 text-left">Nombre</th>
                    <th className="py-3 px-6 text-left">Email</th>
                    <th className="py-3 px-6 text-left">Rol</th>
                    <th className="py-3 px-6 text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id} className="border-t">
                      <td className="py-3 px-6">{user.name}</td>
                      <td className="py-3 px-6">{user.email}</td>
                      <td className="py-3 px-6">{user.role}</td>
                      <td className="py-3 px-6 text-center">
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {users.length === 0 && !loading && (
            <p className="text-center text-gray-600">No se encontraron usuarios.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
