import { CarItem } from "../types";

export const getPriceValue = (price: number | string): number => {
  return parseFloat(String(price).replace(/[^0-9.]/g, ""));
};

export const filterAndSortData = (
  data: CarItem[],
  type: string | null,
  price: string
): CarItem[] => {
  let filteredData = type
    ? data.filter((item) => item.type === type)
    : [...data];

  if (price === "highToLow") {
    filteredData.sort(
      (a, b) => getPriceValue(b.price) - getPriceValue(a.price)
    );
  } else if (price === "lowToHigh") {
    filteredData.sort(
      (a, b) => getPriceValue(a.price) - getPriceValue(b.price)
    );
  }

  return filteredData;
};
