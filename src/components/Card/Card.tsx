import React from "react";
import ImageHolder from "../ImageHolder/ImageHolder";
import Text from "../Text/Text";

interface CarItem {
  id: number;
  make: string;
  model: string;
  year: number;
  description: string;
  features: string[];
  availability: string;
  image: string;
  price: number;
}

interface CardProps {
  item: CarItem; // Accept a single car object
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer bg-white p-4">
      <ImageHolder src={item.image} />
      <div className="flex flex-col p-4">
        <div className="flex gap-2 items-center">
          <Text item={item.make} variant="h2" bold />
          <Text item={item.model} variant="h3" />
        </div>

        <Text item={item.description} margin="mb-1" />
        <Text item={item.price.toLocaleString()} bold />
      </div>
    </div>
  );
};

export default Card;
