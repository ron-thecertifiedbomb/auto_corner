import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { data } from "../utils/mockData";
import SearchResults from "./SearchResults";
import { Product } from "../types";
import FoodDetailsModal from "./FoodDetailsModal";
import useFoodFilter from "../hooks/FoodHook";

const SearchBar = () => {
  const { isOpen, selectedItem, setIsOpen, openFoodDetails } = useFoodFilter();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFilteredProducts(
      data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) setSearchQuery(value);
  };

  return (
    <>
      <div className="bg-gray-200 rounded-full flex items-center px-5 w-full sm:w-[400px] lg:w-[500px] relative mt-2">
        <input
          className="bg-transparent p-2 w-full focus:outline-none placeholder:text-[#aaa] placeholder:text-[14px]"
          type="text"
          placeholder="Search Cars"
          onChange={handleSearch}
          value={searchQuery}
        />
        <AiOutlineSearch size={25} />
        <SearchResults
          products={filteredProducts}
          searchQuery={searchQuery}
          onClear={(item: Product) => {
            openFoodDetails(item);
            setSearchQuery("");
          }}
        />
      </div>
      {isOpen && selectedItem && (
        <FoodDetailsModal
          item={selectedItem}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      )}
    </>
  );
};

export default SearchBar;
