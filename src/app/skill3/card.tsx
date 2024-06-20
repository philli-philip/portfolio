import { cn } from "../../utils/cn";
import React from "react";

export const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("rounded-xl bg-white dark:bg-gray-800 shadow-[0px_8px_32px_rgba(0,0,0,0.15)]", className)}
        {...props}
    />
))
Card.displayName = "Card"