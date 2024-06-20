"use client";

import type { ClassValue } from "clsx";
import { cn } from "../../utils/cn";

export default function Section({
  children,
  className,
  id,
}: {
  children: JSX.Element | null | JSX.Element[] | string;
  className?: ClassValue;
  id?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto px-4 lg:px-8", className)}>
      {children}
    </section>
  );
}
