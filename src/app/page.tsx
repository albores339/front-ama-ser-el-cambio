import type { Metadata } from 'next';
import HeroSection from './components/home/hero';
import QuienesSomos from './components/home/about';
import AfiliadoSection from './components/home/registro';
import DonateSection from './components/home/donar';
import FantasticPhotoCardsSection from './components/home/cards';
import Contactanos from './components/contactanos';
import Map from './components/map';
import AfiliadoCounter from './components/home/AfiliadoCounter';

export const metadata: Metadata = {
  title: "Ama Ser el Cambio A.C. | Asociación Civil",
  description: "Página oficial de Ama Ser el Cambio A.C, una asociación civil sin fines de lucro ni afinidad política o religiosa, ubicados en Tuxtla Gutiérrez, Chiapas.",
};

const Home: React.FC = () => (
  <>
    <main>
      <HeroSection />
      <QuienesSomos />
      <AfiliadoCounter/>
      <AfiliadoSection />
      <FantasticPhotoCardsSection />
      <DonateSection />
      <Map />
      <Contactanos />
    </main>
  </>
);

export default Home;