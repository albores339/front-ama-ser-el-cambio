import { FC } from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  tags: string[];
  date: string;
  image: string;
  status: string; // Añadimos estado del evento
}

const Card: FC<CardProps> = ({ title, description, tags, date, image, status }) => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-2xl">
      <Image
        src={image}
        alt={title}
        fill
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="mt-2 text-lg">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span key={index} className="bg-rose-700 text-sm rounded px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
        <div className="text-gray-400 text-sm mt-3">{date}</div>
        <div
          className={`mt-3 px-3 py-1 text-sm font-semibold rounded ${
            status === 'Pendiente' ? 'bg-cyan-700' : 'bg-lime-700'
          }`}
        >
          {status}
        </div>
      </div>
    </div>
  );
};

export default Card;
