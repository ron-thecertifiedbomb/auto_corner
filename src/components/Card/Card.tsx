import React from "react";
import ImageHolder from "../ImageHolder/ImageHolder";
import Text from "../Text/Text";
import { CarItem } from "../../types";

interface CardProps {
  openCarDetails: (item: CarItem) => void;
  item: CarItem;
}

const Card: React.FC<CardProps> = ({ item, openCarDetails }) => {
  return (
    <div
      className="shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer bg-white p-4"
      onClick={() => openCarDetails(item)}
    >
      <ImageHolder src={item.image} />
      <div className="flex flex-col p-2">
        <div className="flex gap-1 items-center">
          <Text item={item.make} variant="h2" bold />
          <Text item={item.model} variant="h3" />
        </div>
        <Text item={item.description} margin="mb-1" />
        <Text item={`PhP ${item.price.toLocaleString()}`} />
      </div>
    </div>
  );
};

export default Card;
