import * as React from "react";
import { cn } from "../../../../utils/cn";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-8 w-full rounded-md border bg-white/60 px-2 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

const InputLeftLabel = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ title, ...props }) => {
  return (
    <span className="flex flex-row items-center gap-x-4">
      <label htmlFor="year" className="inline-block w-[80px]">
        {title}
      </label>
      <Input {...props} className="inline-block" />
    </span>
  );
});

Input.displayName = "Input";
InputLeftLabel.displayName = "InputLeftlabel";

export { Input, InputLeftLabel };
