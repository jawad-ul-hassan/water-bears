import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { MintHero } from '../components/MintHero';
import MintSlider from '../components/MintSlider';

const Mint = () => {
  return (
    <>
      <Header />
      <main>
        <MintHero />
        <MintSlider />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Mint;
