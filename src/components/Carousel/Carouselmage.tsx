// CarouselImage.tsx
import React from "react";

interface CarouselImageProps {
  src: string;
  alt: string;
}

const CarouselImage: React.FC<CarouselImageProps> = ({ src, alt }) => {
  return (
    <div className="w-full h-full relative">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CarouselImage;
