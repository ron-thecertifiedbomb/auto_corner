import React from "react";
import Text from "../Text/Text";

interface SectionTitleProps {
  title: string;
  variant?: "h1" | "h2" | "h3" | "h4"; // Heading levels
  bold?: boolean;
  margin?: string;
  align?: "left" | "center" | "right"; // Text alignment
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  variant = "h2",
  bold = true,
  margin = "mb-4",
  align = "left",
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`w-full ${alignmentClasses[align]} ${margin}`}>
      <Text item={title} variant={variant} bold={bold} />
    </div>
  );
};

export default SectionTitle;
