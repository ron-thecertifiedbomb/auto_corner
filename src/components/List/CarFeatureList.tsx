import React from "react";
import { CarFeatures } from "../../types";

interface CarFeaturesListProps {
  item?: CarFeatures;
}

const CarFeaturesList: React.FC<CarFeaturesListProps> = ({ item }) => {
  return (
    <div className="pl-2">
      <ul className="list-disc pl-4">
        {item?.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarFeaturesList;
