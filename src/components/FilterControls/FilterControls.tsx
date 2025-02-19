import React from "react";
import SelectButtons from "../Select/SelectButtons";
import SelectDropDown from "../Select/SelectDropDown";

interface FilterControlsProps {
  filterType: (type: string | null) => void;
  getButtonClass: (type: string | null) => string;
  handleSortPrice: (type: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  filterType,
  getButtonClass,
  handleSortPrice,
}) => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-start flex-col lg:flex-row">
  <SelectButtons filterType={filterType} getButtonClass={getButtonClass} />
  <SelectDropDown handleSortPrice={handleSortPrice} />
</div>
  );
};

export default FilterControls;
