// CarouselButton.tsx
import React from "react";

interface CarouselButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

const CarouselButton: React.FC<CarouselButtonProps> = ({ direction, onClick }) => {
  const arrow = direction === "prev" ? "&#10094;" : "&#10095;"; // Use HTML entities

  return (
    <button
      onClick={onClick}
      className={`absolute ${direction === "prev" ? "left-4" : "right-4"} top-1/2 transform -translate-y-1/2 w-10 h-10 p-2 rounded-full shadow-lg flex items-center justify-center border-none cursor-pointer text-gray-600`} // Apply gray color to the button
      dangerouslySetInnerHTML={{ __html: arrow }} // Set the entity as HTML
    />
  );
};

export default CarouselButton;
