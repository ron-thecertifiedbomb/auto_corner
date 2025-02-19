import { CarItem } from "../../types";
import Card from "../Card/Card";

interface ListProps {
  item: CarItem[];
  openCarDetails: (item: CarItem) => void;
}

const List = ({ item, openCarDetails }: ListProps) => {
  return (
    <div className="max-w-[1640px] mx-auto w-full max-w-4xl h-120 pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {item.map((car) => (
          <Card key={car.id} item={car} openCarDetails={openCarDetails} />
        ))}
      </div>
    </div>
  );
};

export default List;
