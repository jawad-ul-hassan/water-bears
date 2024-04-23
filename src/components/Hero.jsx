import HeroLeftDecorator from '../assets/images/hero-left-decorator.png';
import HeroRightDecorator from '../assets/images/hero-right-decorator.png';
import HeroSliderLg from '../assets/images/hero-bear-lg.png';
import HeroSliderMd from '../assets/images/hero-bear-md.png';
import HeroSliderSm from '../assets/images/hero-bear-sm.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <img src={HeroLeftDecorator} alt="" className="hero-left-decorator" />
          <div className="hero-wrapper">
            <div className="hero-slider">
              <img src={HeroSliderSm} alt="" className="hero-slider-sm" />
              <img src={HeroSliderMd} alt="" className="hero-slider-md" />
              <img src={HeroSliderLg} alt="" className="hero-slider-lg" />
              <img src={HeroSliderMd} alt="" className="hero-slider-md" />
              <img src={HeroSliderSm} alt="" className="hero-slider-sm" />
            </div>
          </div>
          <img
            src={HeroRightDecorator}
            alt=""
            className="hero-right-decorator"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
