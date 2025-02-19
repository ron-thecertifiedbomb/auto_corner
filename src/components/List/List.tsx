import { CarItem } from "../../types";
import Card from "../Card/Card";

interface CarListProps {
  item: CarItem[]; // This prop is an array of CarItem objects
}

const CarList = ({ item }: CarListProps) => {
  return (
    <div className="max-w-[1640px] mx-auto w-full max-w-4xl h-120 pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {item.map((car) => (
          <Card key={car.id} item={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
