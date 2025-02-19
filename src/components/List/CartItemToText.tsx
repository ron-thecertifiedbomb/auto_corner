import React from "react";
import Text from "../Text/Text";
import { CarFeatures } from "../../types";

interface CarItemToTextProps {
  item: CarFeatures[];

}

const CarItemToText: React.FC<CarItemToTextProps> = ({ item }) => {
  // You can customize how you want to represent the CarItem as text.
  return <Text item={item.features} variant="p" />;
};

export default CarItemToText;
