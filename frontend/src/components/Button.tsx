import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
    >
      {label}
    </button>
  );
};

export default Button;
