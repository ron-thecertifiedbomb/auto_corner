import { useState } from "react";
import { CartItem } from "../types";
import { data } from "../utils/cars";
import { filterAndSortData } from "../utils/FilterAndSort";
const useCarFilter = () => {
  const [cars, setCars] = useState(data);
  const [activeCategory, setActiveCategory] = useState<string | null>('All');
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSortPrice = (sort: string) => {
    setSortOrder(sort);
    setCars(filterAndSortData(data, activeCategory, sort));
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

  const openCarDetails = (item: CartItem) => {
    setSelectedItem(item);
    setIsOpen(true);
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
    setIsOpen,
  };
};

export default useCarFilter;
