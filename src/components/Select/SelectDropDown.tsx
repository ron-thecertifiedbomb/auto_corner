interface SelectDropDownProps {
    handleSortPrice: (type: string) => void;
  }
  
  const SelectDropDown = ({ handleSortPrice }: SelectDropDownProps) => {
    // Create an array of option objects for easier maintenance and readability
    const options = [
      { value: "default", label: "Default" },
      { value: "lowToHigh", label: "Price: Low to High" },
      { value: "highToLow", label: "Price: High to Low" },
    ];
  
    return (
<div className="w-64">
         <select
        onChange={(e) => handleSortPrice(e.target.value)}
        className="mt-2 p-1 pr-1 border text-black rounded-lg w-full focus:outline-none focus:ring-black-400 custom-select"
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
  