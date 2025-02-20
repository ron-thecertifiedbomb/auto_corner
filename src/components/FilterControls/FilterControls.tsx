
import SelectButtons from "../Select/SelectButtons";
import SelectDropDown from "../Select/SelectDropDown";
import React from "react";
interface FilterControlsProps {
  // eslint-disable-next-line no-unused-vars
  filterType: (type: string | null) => void;
  // eslint-disable-next-line no-unused-vars
  getButtonClass: (type: string | null) => string;
  // eslint-disable-next-line no-unused-vars
  handleSortPrice: (type: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  filterType,
  getButtonClass,
  handleSortPrice,
}) => {
  return (
    <div className="max-w-[1640px] mx-auto flex  justify-between items-start flex-col-reverse lg:flex-row">
  <SelectButtons filterType={filterType} getButtonClass={getButtonClass} />
  <SelectDropDown handleSortPrice={handleSortPrice} />
</div>
  );
};

export default FilterControls;
