import { FormEvent, useEffect, useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

interface AvisoFormProps {
  onSubmit: (aviso: { titulo: string; mensaje: string }) => void;
  editId: string | null;
  tituloInicial: string;
  mensajeInicial: string;
  onResetEdit: () => void;
}

export default function AvisoForm({ onSubmit, editId, tituloInicial, mensajeInicial, onResetEdit }: AvisoFormProps) {
  const [titulo, setTitulo] = useState<string>(tituloInicial);
  const [mensaje, setMensaje] = useState<string>(mensajeInicial);

  useEffect(() => {
    setTitulo(tituloInicial);
    setMensaje(mensajeInicial);
  }, [tituloInicial, mensajeInicial]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (titulo.trim() === '' && mensaje.trim() === '') {
      onResetEdit();  // Vuelve al modo de creación si ambos están vacíos
    } else {
      onSubmit({ titulo, mensaje });
    }

    // Clear form fields only if it's not an edit mode
    if (!editId) {
      setTitulo('');
      setMensaje('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="titulo" className="block text-lg font-medium">Título</label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="block text-lg font-medium">Mensaje</label>
        <textarea
          id="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md flex items-center justify-center hover:bg-blue-600 transition duration-200"
      >
        <PlusCircleIcon className="h-6 w-6 mr-2" /> {editId ? 'Actualizar Aviso' : 'Publicar Aviso'}
      </button>
    </form>
  );
}
