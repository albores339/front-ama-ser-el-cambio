import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

interface Aviso {
  _id: string;
  titulo: string;
  mensaje: string;
}

interface AvisoItemProps {
  aviso: Aviso;
  onEdit: (aviso: Aviso) => void;
  onDelete: (_id: string) => void;
}

export default function AvisoItem({ aviso, onEdit, onDelete }: AvisoItemProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 relative">
      <h2 className="text-2xl font-semibold mb-2">{aviso.titulo}</h2>
      <p className="text-stone-600">{aviso.mensaje}</p>
      <div className="absolute top-4 right-4 flex space-x-2">
        <button onClick={() => onEdit(aviso)} className="text-blue-500 hover:text-blue-600">
          <PencilIcon className="h-5 w-5" />
        </button>
        <button onClick={() => onDelete(aviso._id)} className="text-red-500 hover:text-red-600">
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
