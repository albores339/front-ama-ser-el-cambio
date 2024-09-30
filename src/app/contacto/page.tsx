// pages/contacto.tsx
import React from 'react';
import Head from 'next/head';
import Contactanos from '../components/contactanos';
import SocialMediaLinks from '../components/contacto/Media';
import Map from '../components/map';

const ContactPage: React.FC = () => (
  <>
    <Head>
      <title>Contáctanos | Ama Ser el Cambio AC</title>
      <meta
        name="description"
        content="Ponte en contacto con Ama Ser el Cambio AC para colaborar o resolver cualquier duda que tengas."
      />
    </Head>

    <main className="py-4 px-6 max-w-7xl mx-auto">
      <Contactanos />
      <SocialMediaLinks />
      <Map />
    </main>
  </>
);

export default ContactPage;
