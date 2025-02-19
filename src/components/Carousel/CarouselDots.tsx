// CarouselDots.tsx
import React from "react";

interface CarouselDotsProps {
  imagesLength: number;
  currentIndex: number;
  onClick: (index: number) => void;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({ imagesLength, currentIndex, onClick }) => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {Array.from({ length: imagesLength }).map((_, index) => (
       <button
       key={index}
       onClick={() => onClick(index)}
       className={`w-[3px] h-3 rounded-full ${
         currentIndex === index ? "bg-gray-500" : "bg-gray-300"
       } transition-colors duration-300 border-none`}
     />
      ))}
    </div>
  );
};

export default CarouselDots;
