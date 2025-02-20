import React from "react";

interface ButtonProps {
    // eslint-disable-next-line no-unused-vars
  filterType: (type: string | null) => void;
  label: string;
  type: string | null;
    // eslint-disable-next-line no-unused-vars
  getButtonClass: (type: string | null) => string;
}

const Button: React.FC<ButtonProps> = ({ label, type, filterType, getButtonClass }) => {
  return (
    <button
    key={type}
      onClick={() => {filterType(type);}}
      className={getButtonClass(type)}
    >
      {label}
    </button>
  );
};

export default Button;
