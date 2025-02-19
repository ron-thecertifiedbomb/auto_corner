import { data } from "../../utils/cars";
import Card from "../Card/Card";

const List = () => {
  return (
    <div className=" max-w-[1640px] mx-auto  w-full max-w-4xl h-120 pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((car) => (
          <Card key={car.id} item={car} /> // Ensure `item` is passed correctly
        ))}
      </div>
    </div>
  );
};

export default List;
