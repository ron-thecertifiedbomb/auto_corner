import { useState } from "react";
import { filterAndSortData } from "../utils/FoodUtils";
import { data } from "../utils/mockData";
import { Product } from "../types";
const useFoodFilter = () => {
  const [foods, setFoods] = useState(data);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedItem, setSelectedItem] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSortChange = (order: string) => {
    setSortOrder(order);
    setFoods(filterAndSortData(data, activeCategory, order));
  };

  const filterType = (category: string | null) => {
    setActiveCategory(category);
    setFoods(filterAndSortData(data, category, sortOrder));
  };

  const getButtonClass = (category: string | null) =>
    `m-1 px-3 py-1 border rounded-lg transition ${
      activeCategory === category
        ? "bg-orange-600 text-white"
        : "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
    }`;

  const openFoodDetails = (item: Product) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  return {
    foods,
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

export default useFoodFilter;
