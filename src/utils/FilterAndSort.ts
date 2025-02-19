import { CarItem } from "../types";

export const getPriceValue = (price: number | string): number => {
  return parseFloat(String(price).replace(/[^0-9.]/g, ""));
};

export const filterAndSortData = (
  data: CarItem[],
  type: string | null,
  order: string
): CarItem[] => {
  const filteredData =
  type === "All" || type === null
    ? [...data]
    : data.filter((item) => item.type === type);

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
