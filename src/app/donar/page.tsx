// pages/donaciones.tsx
"use client"; // Marca la página como un Client Component

import Head from 'next/head';
import DonationHero from '../components/donar/hero';
import DonationDetails from '../components/donar/detalles';
import PaypalDonation from '../components/donar/paypal';

const Donaciones: React.FC = () => (
  <>
    <Head>
      <title>Donaciones | Ama Ser el Cambio AC</title>
      <meta name="description" content="Haz una donación para apoyar a Ama Ser el Cambio AC y sus proyectos en beneficio de los sectores más vulnerables de la sociedad." />
    </Head>
    <main className="">
      <DonationHero />
      <div className='max-w-screen-lg mx-auto'>
        <DonationDetails />
        <PaypalDonation />
      </div>
    </main>
  </>
);

export default Donaciones;
