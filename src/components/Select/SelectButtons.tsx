import { data } from "../../utils/cars";
import Button from "../Button/Button";

interface SelectButtonsProps {
  filterType: (type: string | null) => void;
  getButtonClass: (type: string | null) => string;
}

const SelectButtons = ({ filterType, getButtonClass }: SelectButtonsProps) => {
  const uniqueCarTypes = [...new Set(data.map((car) => car.type))];
  const carTypesList = ["All", ...uniqueCarTypes];

  return (
    <div className="flex flex-wrap w-[500px]">
      {carTypesList.map((carType) => (
        <Button
        type={carType}
        filterType={filterType}
        getButtonClass={getButtonClass}
        label={carType}
        >
  
        </Button>
      ))}
    </div>
  );
};

export default SelectButtons;
