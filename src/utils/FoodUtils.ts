import { Product } from "../types";

export const getPriceValue = (price: string): number => {
  return parseFloat(price.replace(/[^0-9.]/g, ""));
};

export const filterAndSortData = (
  data: Product[],
  category: string | null,
  order: string
): Product[] => {
  let filteredData = category
    ? data.filter((item) => item.category === category)
    : [...data];

  if (order === "highToLow") {
    filteredData.sort(
      (a, b) => getPriceValue(b.price) - getPriceValue(a.price)
    );
  } else if (order === "lowToHigh") {
    filteredData.sort(
      (a, b) => getPriceValue(a.price) - getPriceValue(b.price)
    );
  }

  return filteredData;
};
