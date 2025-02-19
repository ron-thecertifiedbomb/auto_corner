
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../Card/Card";

// Define a sample CarItem for testing purposes
const carItem = {
  id: 1,
  make: "Toyota",
  model: "Camry",
  year: 2022,
  description: "A reliable sedan with great fuel efficiency.",
  features: ["Leather seats", "Bluetooth", "Backup camera"],
  availability: "In Stock",
  image: "https://example.com/image.jpg",
  price: 28000,
};

describe("Card Component", () => {
  test("renders card details correctly", () => {
    render(<Card item={carItem} />);
    
    // Check if make and model are rendered
    expect(screen.getByText("Toyota")).toBeInTheDocument();
    expect(screen.getByText("Camry")).toBeInTheDocument();

    // Check if description is rendered
    expect(
      screen.getByText("A reliable sedan with great fuel efficiency.")
    ).toBeInTheDocument();

    // Check if the price is rendered correctly (formatted as locale string)
    expect(screen.getByText(carItem.price.toLocaleString())).toBeInTheDocument();

    // Check that the image is rendered with the correct src attribute.
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute("src", carItem.image);

    // Find an ancestor with the class "shadow-lg" from the "Toyota" element.
    const cardContainer = screen.getByText("Toyota").closest("div.shadow-lg");
    expect(cardContainer).toBeInTheDocument();
  });
});
