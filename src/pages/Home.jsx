import About from '../components/About';
import BearsSlider from '../components/BearsSlider';
import ComingSoon from '../components/ComingSoon';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ComingSoon />
      <BearsSlider />
      <FAQ />
      <About />
      <Contact />
    </>
  );
};

export default Home;
