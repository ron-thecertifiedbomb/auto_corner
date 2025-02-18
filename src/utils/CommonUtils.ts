// Function to handle both string and numeric prices
export const getPriceValue = (price: string | number) => {
  if (typeof price === "string") {
    return price.replace(/[^0-9.]/g, "")
      ? parseFloat(price.replace(/[^0-9.]/g, ""))
      : price.length;
  }
  return price; // If it's already a number, return it as is
};
