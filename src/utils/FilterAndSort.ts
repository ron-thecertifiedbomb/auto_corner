import { CarItem } from "../types";

export const getPriceValue = (price: number | string): number => {
  return parseFloat(String(price).replace(/[^0-9.]/g, ""));
};

export const filterAndSortData = (
  data: CarItem[],
  type: string | null,
  order: string
): CarItem[] => {
  let filteredData = type
    ? data.filter((item) => item.type === type)
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
