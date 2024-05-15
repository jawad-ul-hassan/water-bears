import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { MintHero } from '../components/MintHero';
import MintSlider from '../components/MintSlider';
import ComingSoon from '../components/ComingSoon';


const Mint = () => {
  return (
    <>
      <Header />
      <main>
        <MintHero />
        <ComingSoon />

        <MintSlider />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Mint;
