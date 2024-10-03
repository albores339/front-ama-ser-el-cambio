"use client";

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { PencilIcon, TrashIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"; // Heroicons
import { useRouter } from 'next/navigation';

// Definir el tipo User basado en los datos que esperas recibir
interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

const MySwal = withReactContent(Swal);

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]); // Para manejar usuarios seleccionados
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false); // Estado para manejar el dropdown
  const router = useRouter();

  // Obtener usuarios al cargar la página
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
        if (!response.ok) {
          throw new Error('Error al obtener los usuarios');
        }
        const data: User[] = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Error inesperado');
        }
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Función para eliminar usuarios seleccionados
  const handleDeleteSelected = async () => {
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
        await Promise.all(
          selectedUsers.map(async (id) => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {
              method: 'DELETE',
            });

            if (!response.ok) {
              throw new Error('Error al eliminar el usuario');
            }
          })
        );
        setUsers(users.filter((user) => !selectedUsers.includes(user._id)));
        setSelectedUsers([]);
        MySwal.fire('¡Eliminado!', 'Los usuarios seleccionados han sido eliminados.', 'success');
      } catch (err: unknown) {
        if (err instanceof Error) {
          MySwal.fire('Error', err.message, 'error');
        } else {
          MySwal.fire('Error', 'Error inesperado', 'error');
        }
      }
    }
    setIsDropdownOpen(false); // Cerrar el dropdown después de la acción
  };

  // Nueva función para eliminar un usuario individual
const handleDeleteUser = async (id: string) => {
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
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {
        method: 'DELETE',
      });

      // Actualiza la lista de usuarios
      setUsers(users.filter((user) => user._id !== id));
      MySwal.fire('¡Eliminado!', 'El usuario ha sido eliminado.', 'success');
    } catch (err: unknown) {
      if (err instanceof Error) {
        MySwal.fire('Error', err.message, 'error');
      } else {
        MySwal.fire('Error', 'Error inesperado', 'error');
      }
    }
  }
};

  // Función para cambiar el rol de los usuarios seleccionados
  const handleChangeRole = async (role: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/role`, {
        method: 'PATCH',
        body: JSON.stringify({ userIds: selectedUsers, role }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el rol de los usuarios');
      }

      setUsers(
        users.map((user) =>
          selectedUsers.includes(user._id) ? { ...user, role } : user
        )
      );
      setSelectedUsers([]);
      MySwal.fire('¡Roles actualizados!', `Los roles de los usuarios han sido cambiados a ${role}.`, 'success');
    } catch (err: unknown) {
      if (err instanceof Error) {
        MySwal.fire('Error', err.message, 'error');
      } else {
        MySwal.fire('Error', 'Error inesperado', 'error');
      }
    }
    setIsDropdownOpen(false); // Cerrar el dropdown después de la acción
  };

  // Filtrar usuarios según el término de búsqueda
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-stone-900">Lista de Usuarios</h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="mb-4 flex flex-col md:flex-row justify-between items-center">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Buscar usuarios"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block p-2 text-sm text-gray-900 border border-stone-400 rounded-lg w-80 bg-gray-50"
          />
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute right-2" />
        </div>

        {/* Dropdown general */}
        <div className="relative mt-4 md:mt-0">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Alternar visibilidad del dropdown
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-stone-700 bg-white border border-stone-400 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
            type="button"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            Acciones
          </button>
          {isDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a
                  href="#"
                  onClick={handleDeleteSelected}
                  className="block px-4 py-2 text-sm text-red-700 hover:bg-red-100"
                  role="menuitem"
                >
                  Eliminar seleccionados
                </a>
                <a
                  href="#"
                  onClick={() => handleChangeRole('afiliado')}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Cambiar a Afiliado
                </a>
                <a
                  href="#"
                  onClick={() => handleChangeRole('admin')}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Cambiar a Administrador
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {loading ? (
        <p className="text-center">Cargando...</p>
      ) : (
        <div className="space-y-4">
          {filteredUsers.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full shadow-md rounded-lg mt-4">
                <thead className='bg-violet-100'>
                  <tr className=''>
                    <th className="py-3 px-6 text-left">
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedUsers(filteredUsers.map((user) => user._id));
                          } else {
                            setSelectedUsers([]);
                          }
                        }}
                        checked={selectedUsers.length === filteredUsers.length}
                      />
                    </th>
                    <th className="py-3 px-6 text-left">Nombre</th>
                    <th className="py-3 px-6 text-left">Email</th>
                    <th className="py-3 px-6 text-left">Rol</th>
                    <th className="py-3 px-6 text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user._id} className="border-t">
                      <td className="py-3 px-6">
                        <input
                          type="checkbox"
                          onChange={() => {
                            if (selectedUsers.includes(user._id)) {
                              setSelectedUsers(selectedUsers.filter((id) => id !== user._id));
                            } else {
                              setSelectedUsers([...selectedUsers, user._id]);
                            }
                          }}
                          checked={selectedUsers.includes(user._id)}
                        />
                      </td>
                      <td className="py-3 px-6">{user.name}</td>
                      <td className="py-3 px-6">{user.email}</td>
                      <td className="py-3 px-6">{user.role}</td>
                      <td className="py-3 px-6 text-center">
                        <button
                          onClick={() => router.push(`/dashboard/users/${user._id}`)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <PencilIcon className="w-5 h-5 inline" />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user._id)}
                          className="text-red-600 hover:text-red-800 ml-4"
                        >
                          <TrashIcon className="w-5 h-5 inline" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {filteredUsers.length === 0 && !loading && (
            <p className="text-center text-gray-600">No se encontraron usuarios.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
