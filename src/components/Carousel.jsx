import React, { useState, useEffect, useRef } from "react";
import normalBear from "../assets/images/hero-bear-lg.png"
import stylishBear from "../assets/images/hero-bear-md.png";

const Carousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startScrolling();
        } else {
          stopScrolling();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(carouselRef.current);
    observerRef.current = observer;

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const maxScroll = carouselRef.current.scrollWidth / 2;
    if (scrollPosition >= maxScroll) {
      setScrollPosition(0);
      carouselRef.current.scrollTo({ left: 0, behavior: "instant" });
    } else {
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [scrollPosition]);

  const startScrolling = () => {
    if (!observerRef.current.intervalId) {
      observerRef.current.intervalId = setInterval(() => {
        setScrollPosition((prevPosition) => prevPosition + 1);
      }, 10);
    }
  };

  const stopScrolling = () => {
    if (observerRef.current.intervalId) {
      clearInterval(observerRef.current.intervalId);
      observerRef.current.intervalId = null;
    }
  };

  return (
    <div
      ref={carouselRef}
      className="w-full flex flex-row gap-[20px] overflow-hidden whitespace-nowrap my-[110px]"
    >
      {[...Array(2)].map((_, i) => (
        <React.Fragment key={i}>
          <img className="size-[200px]" src={stylishBear} alt="Stylish Bear" />
          <img className="size-[200px]" src={normalBear} alt="Normal Bear" />
          <img className="size-[200px]" src={stylishBear} alt="Stylish Bear" />
          <img className="size-[200px]" src={normalBear} alt="Normal Bear" />
          <img className="size-[200px]" src={stylishBear} alt="Stylish Bear" />
          <img className="size-[200px]" src={normalBear} alt="Normal Bear" />
          <img className="size-[200px]" src={stylishBear} alt="Stylish Bear" />
          <img className="size-[200px]" src={normalBear} alt="Normal Bear" />
          <img className="size-[200px]" src={stylishBear} alt="Stylish Bear" />
          <img className="size-[200px]" src={normalBear} alt="Normal Bear" />
          <img className="size-[200px]" src={stylishBear} alt="Stylish Bear" />
          <img className="size-[200px]" src={normalBear} alt="Normal Bear" />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Carousel;
