import React, { useState, useEffect } from "react";
import { images } from "../../utils/image";
import CarouselImage from "./Carouselmage";
import CarouselButton from "./CarouselButton";
import CarouselDots from "./CarouselDots";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };


  useEffect(() => {
    const interval = setInterval(nextSlide, 7000); 

    return () => {
      clearInterval(interval);
    };
  }, []); 

  return (
    <div className="relative max-w-[1640px] mx-auto bg-white rounded-lg shadow-lg w-full max-w-4xl h-120">
      <CarouselImage
        src={images[currentIndex]}
        alt={`carousel-slide-${currentIndex}`}
      />
      <CarouselButton direction="prev" onClick={prevSlide} />
      <CarouselButton direction="next" onClick={nextSlide} />
      <CarouselDots
        imagesLength={images.length}
        currentIndex={currentIndex}
        onClick={setCurrentIndex}
      />
    </div>
  );
};

export default Carousel;
