import React from "react";

interface ButtonProps {
  label: string;
  category: string | null;
  onClick: (category: string | null) => void;
  getButtonClass: (category: string | null) => string;
}

const Button: React.FC<ButtonProps> = ({ label, category, onClick, getButtonClass }) => {
  return (
    <button
      onClick={() => onClick(category)}
      className={getButtonClass(category)}
    >
      {label}
    </button>
  );
};

export default Button;
