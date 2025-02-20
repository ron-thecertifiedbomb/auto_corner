import React from "react";

interface CarouselDotsProps {
  imagesLength: number;
  currentIndex: number;
  // eslint-disable-next-line no-unused-vars
  onClick: (index: number) => void;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({ imagesLength, currentIndex, onClick }) => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {Array.from({ length: imagesLength }).map((_, index) => (
       <button
       key={index}
       onClick={() => onClick(index)}
       className={`w-1 h-1 ${
         currentIndex === index ? "bg-gray-500" : "bg-gray-300"
       } transition-colors duration-300 border-none`}
     />
      ))}
    </div>
  );
};

export default CarouselDots;
