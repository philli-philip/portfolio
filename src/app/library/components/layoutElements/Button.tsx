import React from "react";
import { cn } from "../../../../utils/cn";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "text" | "neutral";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color = "primary",
}) => {
  const colorClasses = {
    primary: "bg-orange-500 dark:bg-orange-600 text-white",
    neutral: "bg-gray-200 dark:bg-gray-600",
    secondary:
      "bg-orange-500/30 dark:bg-orange-600/30 text-orange-700 dark:text-orange-300", // Added text color
    text: "relative text-orange-500 after:absolute dark:text-orange-400 after:left-3 after:right-3 after:top-2 after:bottom-2 after:rounded-full after:bg-orange-500 dark:after:bg-oragen-400",
  };

  return (
    <div
      className={cn(
        "flex h-8 w-20 items-center justify-center rounded ",
        colorClasses[color], // Apply
        className
      )}
    >
      {children}
    </div>
  );
};

export default Button;
