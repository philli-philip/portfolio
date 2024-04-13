import clsx from "clsx";
import type { ClassNameValue } from "tailwind-merge";

interface CardProps {
  children: string | JSX.Element | JSX.Element[];
  className?: ClassNameValue;
}

export default function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={clsx(
        "rounded-xl border border-white bg-white/20 p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
