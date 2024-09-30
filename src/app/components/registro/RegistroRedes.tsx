import { FaFacebook, FaGoogle } from 'react-icons/fa';

type ButtonProps = {
  provider: 'facebook' | 'google';
  text: string;
};

const ButtonRedesSociales: React.FC<ButtonProps> = ({ provider, text }) => {
  const providerStyles = provider === 'facebook' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-red-600 hover:bg-red-700';
  const Icon = provider === 'facebook' ? FaFacebook : FaGoogle;

  return (
    <button
      className={`group relative w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${providerStyles} transition duration-300`}
      aria-label={`Registrarse con ${provider}`}
      disabled
    >
      <Icon className="mr-2 h-5 w-5" />
      {text}
    </button>
  );
};

export default ButtonRedesSociales;
