import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from "../Text/Text"; 

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

describe("Text Component", () => {
  test("renders the text content", () => {
    render(<Text item="Hello World" />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  test("applies the correct default styles", () => {
    render(<Text item="Default Text" />);
    const textElement = screen.getByText("Default Text");
    expect(textElement).toHaveClass("text-gray-900 text-base font-normal");
  });

  test("applies the correct variant styles", () => {
    render(<Text item="Heading" variant="h1" />);
    const textElement = screen.getByText("Heading");
    expect(textElement).toHaveClass("text-4xl");
  });

  test("applies bold styling when bold is true", () => {
    render(<Text item="Bold Text" bold />);
    const textElement = screen.getByText("Bold Text");
    expect(textElement).toHaveClass("font-bold");
  });

  test("applies custom margin class", () => {
    render(<Text item="Custom Margin" margin="mb-8" />);
    const container = screen.getByText("Custom Margin").parentElement;
    expect(container).toHaveClass("mb-8");
  });
});
