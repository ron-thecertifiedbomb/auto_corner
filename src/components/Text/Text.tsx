
import React from "react";
interface TextProps {
  item?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "p"; // Defines different text sizes
  bold?: boolean; // Determines if text is bold
  margin?: string; // Allows custom margin classes
}

const Text: React.FC<TextProps> = ({ item, variant = "p", bold = false, margin = "mb-4" }) => {
  const baseStyles = "text-gray-900"; // Default text color
  const boldStyle = bold ? "font-bold" : "font-normal"; // Apply bold if true

  const sizeStyles = {
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
    p: "text-base",
  };

  return (
    <div className={margin}>
      <p className={`${baseStyles} ${sizeStyles[variant]} ${boldStyle}`}>{item}</p>
    </div>
  );
};

export default Text;
