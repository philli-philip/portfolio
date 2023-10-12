import React from "react";
import { cn } from "../utils/cn";
import { ClassNameValue } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  className?: ClassNameValue;
};

const KeyBoardButton = (props: Props) => {
  return (
    <kbd
      className={cn(
        "hidden rounded bg-gray-100 p-1 py-[px] font-mono text-xs dark:bg-gray-700 md:inline",
        props.className
      )}
    >
      {props.children}
    </kbd>
  );
};

export default KeyBoardButton;
