import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CarItem } from "../../types";
import { data } from "../../utils/cars";
import SearchResults from "./SearchResult";
import useCarHook from "../../hooks/CarSelectionHook";

const SearchBar = () => {

    
  const { isOpen, selectedItem, setIsOpen, openCarDetails } = useCarHook();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<CarItem[]>([]);

  useEffect(() => {
    setFilteredProducts(
      data.filter((item) =>
        item.model.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) setSearchQuery(value);
  };

  return (
    <>
      <div className="bg-gray-200 rounded-full flex items-center px-5 w-full sm:w-[400px] lg:w-[500px] relative ">
        <input
          className="bg-transparent p-1.5 w-full focus:outline-none placeholder:text-[#aaa] placeholder:text-[14px]"
          type="text"
          placeholder="Search Cars"
          onChange={handleSearch}
          value={searchQuery}
        />
        <AiOutlineSearch size={25} />
        <SearchResults
          products={filteredProducts}
          searchQuery={searchQuery}
          onClear={(item: CarItem) => {
            openCarDetails(item);
            setSearchQuery("");
          }}
        />
      </div>
      
    </>
  );
};

export default SearchBar;