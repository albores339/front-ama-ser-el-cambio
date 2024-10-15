import { Metadata } from 'next'; // Asegúrate de importar Metadata desde 'next'

export const metadata: Metadata = {
  title: "Donaciones | Ama Ser el Cambio AC",
  description: "Haz una donación para apoyar a Ama Ser el Cambio AC y sus proyectos en beneficio de los sectores más vulnerables de la sociedad."
};

import DonationHero from '../components/donar/hero';
import DonationDetails from '../components/donar/detalles';
import PaypalDonation from '../components/donar/paypal';

const Donaciones: React.FC = () => (
  <main className="">
    <DonationHero />
    <div className='max-w-screen-lg mx-auto'>
      <DonationDetails />
      <PaypalDonation />
    </div>
  </main>
);

export default Donaciones;
