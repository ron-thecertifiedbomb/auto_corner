import { categoriesFilter } from "../utils/CategoryUtils";
import FoodDetailsModal from "./FoodDetailsModal";
import useFoodFilter from "../hooks/FoodHook";

const Food = () => {
  const {
    filterType,
    foods,
    getButtonClass,
    handleSortChange,
    isOpen,
    openFoodDetails,
    selectedItem,
    setIsOpen,
  } = useFoodFilter();

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-3xl md:text-4xl text-center">
        Menu Items
      </h1>

      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            {categoriesFilter.map((category) => (
              <button
                key={category}
                onClick={() => filterType(category === "All" ? null : category)}
                className={getButtonClass(category === "All" ? null : category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-bold text-gray-700">Sort by Price</p>
          <select
            onChange={(e) => handleSortChange(e.target.value)}
            className="mt-2 p-1 pr-1 border text-orange-600 rounded-lg w-full focus:outline-none focus:ring-orange-400 custom-select"
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer"
            onClick={() => openFoodDetails(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[150px] sm:h-[200px] object-cover rounded-t-lg"
            />

            <div className="flex flex-col p-4">
              <div className="flex justify-between">
                <p className="font-bold text-sm sm:text-base md:text-lg">
                  {item.name}
                </p>
                <span className="bg-orange-500 text-white p-1 rounded-full text-xs sm:text-sm">
                  PHP {item.price}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {isOpen && selectedItem && (
        <FoodDetailsModal
          item={selectedItem}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      )}
    </div>
  );
};



export default Food;
