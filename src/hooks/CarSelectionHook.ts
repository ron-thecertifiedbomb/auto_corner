import { useState } from "react";
import { CartItem } from "../types";
import { data } from "../utils/cars";
import { filterAndSortData } from "../utils/FilterAndSort";
const useCarFilter = () => {
  const [cars, setCars] = useState(data);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSortChange = (order: string) => {
    setSortOrder(order);
    setCars(filterAndSortData(data, activeCategory, order));
  };

  const filterType = (type: string | null) => {
    setActiveCategory(type);
    setCars(filterAndSortData(data, type, sortOrder));
  };

  const getButtonClass = (category: string | null) =>
    `m-1 px-3 py-1 border rounded-lg transition ${
      activeCategory === category
        ? "bg-orange-600 text-white"
        : "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
    }`;

  const openFoodDetails = (item: CartItem) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  return {
    cars,
    activeCategory,
    sortOrder,
    selectedItem,
    isOpen,
    handleSortChange,
    filterType,
    getButtonClass,
    openFoodDetails,
    setIsOpen,
  };
};

export default useCarFilter;
