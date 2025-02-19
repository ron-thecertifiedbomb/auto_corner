import React from "react";

interface ButtonProps {
  filterType: (type: string | null) => void;
  label: string;
  type: string | null;
  getButtonClass: (type: string | null) => string;
}

const Button: React.FC<ButtonProps> = ({ label, type, filterType, getButtonClass }) => {
  return (
    <button
    key={type}
      onClick={() => { filterType(type === "All" ? null : type);}}
      className={getButtonClass(type)}
    >
      {label}
    </button>
  );
};

export default Button;
