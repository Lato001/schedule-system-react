import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "primary" | "secondary" | "danger";
}

const variants = {
  primary:
    "bg-violet-600 text-white hover:bg-violet-700 focus:ring-violet-500/30",
  secondary:
    "border border-gray-200 text-gray-700 hover:bg-gray-50 focus:ring-gray-300/30",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500/30",
};

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all focus:ring-2 cursor-pointer inline-flex items-center gap-1.5 ${variants[variant]} ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
