"use client"
import { cn } from "../../utils/cn";
import { Nudica } from "./page";
import React from "react";

export const Layout = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (

  <section
    ref={ref}
    className={cn(
      Nudica.className,
      "flex flex-col w-screen h-screen items-center justify-center py-8 lg:py-0 px-3 lg:px-0 md:py-8 overflow-hidden", className)}
    {...props}
  >
    {children}
  </section>
))

Layout.displayName = "Layout"