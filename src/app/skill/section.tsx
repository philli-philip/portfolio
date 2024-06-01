"use client";

import type { ClassValue } from "clsx";
import { cn } from "../../utils/cn";

export default function Section({
  children,
  className,
}: {
  children: JSX.Element | null | JSX.Element[] | string;
  className?: ClassValue;
}) {
  return (
    <section className={cn("mx-auto max-w-7xl px-4 lg:px-8", className)}>
      {children}
    </section>
  );
}
