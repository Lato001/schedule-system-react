import React from "react";

// Extiende las props de <button> para que acepte className y demás atributos
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-gray-700 cursor-pointer transition ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
