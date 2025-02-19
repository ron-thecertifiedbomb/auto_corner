import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import Button from '../Button/Button';

describe("Button Component", () => {
  // Create mock functions for onClick and getButtonClass
  const mockOnClick = jest.fn();
  const mockGetButtonClass = jest.fn((category) =>
    category ? "btn-class" : "default-class"
  );

  // Reset mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders button with provided label", () => {
    render(
      <Button
        label="Click Me"
        category="TestCategory"
        onClick={mockOnClick}
        getButtonClass={mockGetButtonClass}
      />
    );

    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick handler when button is clicked", () => {
    render(
      <Button
        label="Click Me"
        category="TestCategory"
        onClick={mockOnClick}
        getButtonClass={mockGetButtonClass}
      />
    );

    const buttonElement = screen.getByText("Click Me");
    fireEvent.click(buttonElement);

    // Verify onClick is called with the correct category
    expect(mockOnClick).toHaveBeenCalledWith("TestCategory");
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("applies the correct class name from getButtonClass", () => {
    render(
      <Button
        label="Click Me"
        category="TestCategory"
        onClick={mockOnClick}
        getButtonClass={mockGetButtonClass}
      />
    );

    const buttonElement = screen.getByText("Click Me");

    // Ensure the getButtonClass was called with the category
    expect(mockGetButtonClass).toHaveBeenCalledWith("TestCategory");
    // And that the returned class is applied to the button element
    expect(buttonElement).toHaveClass("btn-class");
  });
});
