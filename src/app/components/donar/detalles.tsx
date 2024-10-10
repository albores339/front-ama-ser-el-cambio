// components/DonationDetails.tsx
import { FaUniversity, FaKey, FaFileAlt } from 'react-icons/fa';

const DonationDetails: React.FC = () => (
  <section id="detalles" className="text-lg leading-relaxed text-gray-700 my-16 text-center max-w-screen-xl mx-auto">
    <p className="mb-6">
      Cada donación es una oportunidad para mejorar la vida de personas en situaciones vulnerables. Tu aporte nos permite continuar con nuestros proyectos de apoyo en diversos sectores. ¡Únete a nuestra misión!
    </p>

    <h2 className="text-4xl font-bold text-cyan-600 mb-4">Detalles de Donación</h2>

    {/* Información Legal */}
    <div className="my-12 max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">Información Legal</h2>
      <div className="flex flex-col md:flex-row justify-between items-center space-x-6 text-lg">
        <div className="flex items-center">
          <FaKey className="mr-2 text-gray-500" />
          <span>CLUNI: ASC160520074BD</span>
        </div>
        <div className="flex items-center">
          <FaFileAlt className="mr-2 text-gray-500" />
          <span>RFC: ASC160520NJA</span>
        </div>
        <div className="flex items-center">
          <FaFileAlt className="mr-2 text-gray-500" />
          <span>RPP: 112828</span>
        </div>
      </div>
    </div>

    {/* Transferencia Bancaria */}
    <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
      <h3 className="text-3xl font-bold text-gray-800 mb-4">Transferencia Bancaria</h3>
      <p className="text-lg mb-4">
        Si prefieres hacer una donación mediante transferencia bancaria, aquí tienes los datos de nuestra cuenta.
      </p>
      <div className="flex flex-col items-center mb-4">
        <FaUniversity className="text-5xl text-blue-500 mb-4" />
        <p className="text-lg"><strong>Banco:</strong> Inbursa</p>
        <p className="text-lg"><strong>Cuenta:</strong> 50042343396</p>
        <p className="text-lg"><strong>CLABE:</strong> 036100500423433961</p>
      </div>
    </div>
  </section>
);

export default DonationDetails;
