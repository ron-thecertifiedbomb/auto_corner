import React from "react";

interface RowLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const RowLayout: React.FC<RowLayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={`flex gap-1 items-center ${className}`}>
      {children}
    </div>
  );
};

export default RowLayout;
