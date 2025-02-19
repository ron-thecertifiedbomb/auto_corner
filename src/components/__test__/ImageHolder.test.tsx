import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageHolder from "../ImageHolder/ImageHolder";


describe("ImageHolder Component", () => {
  test("renders image with correct src and alt attributes", () => {
    const testSrc = "https://example.com/car.jpg";
    render(<ImageHolder src={testSrc} />);
    
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute("src", testSrc);
    expect(imageElement).toHaveAttribute("alt", "Car");
  });

  test("applies the correct CSS classes", () => {
    const testSrc = "https://example.com/car.jpg";
    render(<ImageHolder src={testSrc} />);
    
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveClass("w-full");
    expect(imageElement).toHaveClass("h-48");
    expect(imageElement).toHaveClass("object-cover");
    expect(imageElement).toHaveClass("rounded-t-lg");
  });
});
