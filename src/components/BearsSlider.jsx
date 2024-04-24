import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ComingSoonBearHat from '../assets/images/hero-bear-md.png';
import ComingSoonBearWithoutHat from '../assets/images/hero-bear-sm.png';
import Heart from '../assets/svg/heart.svg?react';

const BearsSlider = () => {
  return (
    <section className="bears-slider">
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        autoPlay
        centerMode
        className=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 5,
            partialVisibilityGutter: 20,
          },
          mobile: {
            breakpoint: {
              max: 700,
              min: 370,
            },
            items: 1,
            partialVisibilityGutter: 20,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 700,
            },
            items: 3,
            partialVisibilityGutter: 20,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <img src={ComingSoonBearHat} alt="" className="bears-slider-image" />
        <img
          src={ComingSoonBearWithoutHat}
          alt=""
          className="bears-slider-image"
        />
        <img src={ComingSoonBearHat} alt="" className="bears-slider-image" />
        <img
          src={ComingSoonBearWithoutHat}
          alt=""
          className="bears-slider-image"
        />
        <img src={ComingSoonBearHat} alt="" className="bears-slider-image" />
        <img
          src={ComingSoonBearWithoutHat}
          alt=""
          className="bears-slider-image"
        />
        <img src={ComingSoonBearHat} alt="" className="bears-slider-image" />
        <img
          src={ComingSoonBearWithoutHat}
          alt=""
          className="bears-slider-image"
        />
        <img src={ComingSoonBearHat} alt="" className="bears-slider-image" />
        <img
          src={ComingSoonBearWithoutHat}
          alt=""
          className="bears-slider-image"
        />
        <img src={ComingSoonBearHat} alt="" className="bears-slider-image" />
        <img
          src={ComingSoonBearWithoutHat}
          alt=""
          className="bears-slider-image"
        />
      </Carousel>

      <div className="bears-slider-content">
        <p className="bears-slider-content-text">Pixel Art Style</p>
        <p className="bears-slider-content-text">Crafted with</p>
        <Heart className="bears-slide-heart" />
      </div>
    </section>
  );
};

export default BearsSlider;