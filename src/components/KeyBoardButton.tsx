import React, { ReactNode } from "react";
import { Children } from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const KeyBoardButton = (props: Props) => {
  return (
    <kbd
      className={`hidden rounded bg-gray-100 px-1 py-[px] font-mono text-xs dark:bg-gray-800 md:inline ${props.className}`}
    >
      {props.children}
    </kbd>
  );
};

export default KeyBoardButton;
