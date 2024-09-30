// pages/index.tsx
import Head from 'next/head';
import HeroSection from './components/home/hero';
import QuienesSomos from './components/home/about';
import AfiliadoSection from './components/home/registro';
import DonateSection from './components/home/donar';
import FantasticPhotoCardsSection from './components/home/cards';
import Contactanos from './components/contactanos';
import Map from './components/map';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Ama Ser el Cambio A.C.</title>
      <meta name="description" content="Página oficial de Ama Ser el Cambio AC, una asociación civil sin fines de lucro." />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <HeroSection />
      <QuienesSomos />
      <AfiliadoSection />
      <FantasticPhotoCardsSection />
      <DonateSection />
      <Map />
      <Contactanos />
    </main>
  </>
);

export default Home;
