import type { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";

interface Props extends ComponentPropsWithoutRef<"button"> {
  children: string | JSX.Element[] | JSX.Element;
}

export default function ListFilterButton(props: Props) {
  return (
    <button
      {...props}
      className={clsx(
        props.className,
        "text-secondary flex h-8 flex-shrink items-center gap-x-1 rounded-full border border-transparent px-2 py-[2px] hover:border-gray-300 sm:flex dark:hover:border-white/20 dark:hover:bg-white/10"
      )}
    >
      {props.children}
    </button>
  );
}
