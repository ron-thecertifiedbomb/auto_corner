import React from "react";


interface SelectDropDownProps {
  // eslint-disable-next-line no-unused-vars
  handleSortPrice: (type: string) => void;
}

const SelectDropDown: React.FC<SelectDropDownProps> = ({ handleSortPrice }: SelectDropDownProps) => {
  const options = [
    { value: "default", label: "Default" },
    { value: "lowToHigh", label: "Price: Low to High" },
    { value: "highToLow", label: "Price: High to Low" },
  ];

  return (
    <div className="w-full md:w-64 px-1 mb-2">
      <select
        onChange={(e) => handleSortPrice(e.target.value)}
        className="mt-1 p-2 border border-gray-300 text-black rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropDown;
