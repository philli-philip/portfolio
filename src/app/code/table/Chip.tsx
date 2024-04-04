"use client";
import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";

interface Props extends ComponentPropsWithRef<"button"> {
  children: string | JSX.Element | JSX.Element[] | null;
  color?: "red" | "green" | "gray";
}

export default function Chip(props: Props) {
  return (
    <span
      className={clsx(
        props.color === "red" && "bg-red-100",
        props.color === "green" && "bg-green-100",
        props.color === "gray" && "bg-gray-100",
        "rounded-full px-2 py-1 text-sm text-gray-900/80"
      )}
    >
      {props.children}
    </span>
  );
}
