// src/components/ui/Button.tsx
import React from "react";

type ButtonVariant = "solid" | "ghost" | "outline";
type HoverEffect = "scale" | "underline" | "lift"; // Add your hover effect types

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  hoverEffect?: HoverEffect; // Add hoverEffect to the interface
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  className = "",
  hoverEffect,
  ...props
}) => {
  return (
    <button
      className={`${className} ${variant} ${
        hoverEffect ? `hover-${hoverEffect}` : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
