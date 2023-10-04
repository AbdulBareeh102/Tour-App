import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const slides = [
    {
      image: "/images/1.jpg",
    },
    {
      image: "/images/2.jpg",
    },
    {
      image: "/images/3.jpg",
    },
    {
      image: "/images/4.jpg",
    },
    {
      image: "/images/5.jpg",
    },

    // Add more slides as needed
  ];

  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200; // Adjust this value as needed
      if (window.scrollY > scrollThreshold) {
        setShowSlider(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`hero-slider ${showSlider ? "show" : ""}`}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <img src={slide.image} alt={`Slide ${index}`} />
            <div className="slide-content">
              <div className="hero-banner">
                <h1>Tour App</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  explicabo debitis est autem dicta.
                </p>
                <a href="#tours" className="btn hero-btn ">
                  explore tours
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default HeroSlider;
