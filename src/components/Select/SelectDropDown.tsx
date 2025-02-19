interface SelectDropDownProps {
  handleSortPrice: (type: string) => void;
}

const SelectDropDown = ({ handleSortPrice }: SelectDropDownProps) => {
  
  const options = [
    { value: "default", label: "Default" },
    { value: "lowToHigh", label: "Price: Low to High" },
    { value: "highToLow", label: "Price: High to Low" },
  ];

  return (
    <div className="w-full md:w-64 pl-1 pr-1 mb-2">
      <select
        onChange={(e) => handleSortPrice(e.target.value)}
        className="mt-1 p-1 pr- border text-black rounded-lg w-full focus:outline-none focus:ring-black-400 custom-select"
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
