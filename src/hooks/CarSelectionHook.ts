import { useState } from "react";

import { data } from "../utils/cars";
import { filterAndSortData } from "../utils/FilterAndSort";
import { CarItem } from "../types";
const useCarHook = () => {
  const [cars, setCars] = useState(data);
  const [activeCategory, setActiveCategory] = useState<string | null>('All');
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedItem, setSelectedItem] = useState<CarItem | undefined>();
  const [isOpen, setIsOpen] = useState(false);

  const handleSortPrice = (type: string) => {
    setSortOrder(type);
    setCars(filterAndSortData(data, activeCategory, type));
  };

  const filterType = (type: string | null) => {
    setActiveCategory(type);
    setCars(filterAndSortData(data, type, sortOrder));
  };

  const getButtonClass = (type: string | null) =>
    `m-1 px-3 py-1 border rounded-lg transition ${
      activeCategory === type 
        ? "bg-black text-white"
        : "border-black text-black-600 hover:bg-black  hover:text-white"
    }`;

  const openCarDetails = (item: CarItem) => {
    setSelectedItem(item);
    console.log(isOpen)
    console.log('item', item)
  };

  return {
    cars,
    activeCategory,
    sortOrder,
    selectedItem,
    isOpen,
    handleSortPrice,
    filterType,
    getButtonClass,
    openCarDetails,
    setIsOpen
  };
};

export default useCarHook;
