import HeroLeftDecorator from "../assets/images/hero-left-decorator.png";
import HeroRightDecorator from "../assets/images/hero-right-decorator.png";
import HeroSliderLg from "../assets/images/new_images/197.png";
import HeroSliderMd1 from "../assets/images/new_images/220.png";
import HeroSliderMd2 from "../assets/images/Tardigrade7.png";
import HeroSliderSm from "../assets/images/safsafsf.png";
import HeroSliderSm2 from "../assets/images/waterbear-_106.png";


const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <img src={HeroLeftDecorator} alt="" className="hero-left-decorator" />
          <div className="hero-wrapper">
            <div className="hero-slider">
              <img src={HeroSliderSm} alt="" className="hero-slider-sm" />
              <img src={HeroSliderLg} alt="" className="hero-slider-md" />
              <img src={HeroSliderMd1} alt="" className="hero-slider-lg" />
              <img src={HeroSliderMd2} alt="" className="hero-slider-md" />
              <img src={HeroSliderSm2} alt="" className="hero-slider-sm" />
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
