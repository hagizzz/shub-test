import React, { useState } from "react";
import Slider from "react-slick";
import Carousel1 from "../assets/carousel1.png";
import Carousel2 from "../assets/carousel2.png";
import Carousel3 from "../assets/carousel3.png";
import Carousel4 from "../assets/carousel4.png";
import Carousel5 from "../assets/carousel5.png";
import Carousel6 from "../assets/carousel6.png";
import { useRef } from "react";

const images = [
  Carousel1,
  Carousel2,
  Carousel3,
  Carousel4,
  Carousel5,
  Carousel6,
];

function Carousel() {
  const slider = useRef(null);

  function handlePrevious() {
    slider.current.slickPrev();
  }

  function handleNext() {
    slider.current.slickNext();
  }

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 6,
    swipeToSlide: false,
  };
  return (
    <div className="slider-container relative">
      <Slider {...settings} ref={slider}>
        {images.map((img, index) => (
          <div class={"" + (index % 2 == 0 ? "pt-5" : "")}>
            <img src={img} alt="" />
          </div>
        ))}
      </Slider>
      <button
        onClick={handlePrevious}
        className="w-12 h-12 text-lg bg-white rounded-full shadow-[rgba(21,25,28,0.25)_0px_16px_16px] absolute left-[-0.8em] top-[50%] translate-y-[-50%] font-bold"
      >
        {"<"}
      </button>
      <button
        onClick={handleNext}
        className="w-12 h-12 text-lg bg-white rounded-full shadow-[rgba(21,25,28,0.25)_0px_16px_16px] absolute right-[-1.3em] top-[50%] translate-y-[-50%] font-bold"
      >
        {">"}
      </button>
    </div>
  );
}

export default Carousel;
