"use client";

import { CheckMark } from "../../components/icons/checkmark";
import { cn } from "../../utils/cn";
import type { Skill } from "./page";

export default function Item({
  update,
  checked,
  item,
}: {
  update: (id: string, attribute: string, value: boolean) => void;
  checked: boolean;
  item: Skill;
}) {
  return (
    <div
      className={cn(
        checked ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900",
        "flex flex-1 flex-col justify-between gap-4 border-b border-r border-gray-200 p-4 align-top duration-75 dark:border-gray-600"
      )}
    >
      <ul className="flex flex-row items-center gap-4 text-sm font-light capitalize text-gray-500">
        <li>{item.level}</li>
        <li>{item.area}</li>
        <li>{item.category}</li>
        {checked && <CheckMark height={16} width={16} />}
        {item.focus && !item.checked && (
          <div className="h-3 w-3 rounded-full bg-red-600 dark:bg-red-500"></div>
        )}
      </ul>
      <span
        className={cn(
          "text-2xl font-light leading-normal md:text-xl xl:text-2xl",
          checked && "text-gray-800/20 line-through dark:text-gray-200/20"
        )}
      >
        {item.description}
      </span>
      <div>
        <span className="flex flex-row gap-x-4">
          <button
            className={cn(
              "flex shrink rounded-lg border border-green-800 px-4 py-2 font-normal duration-150",
              !checked
                ? "bg-green-800 text-white"
                : "-ml-2 border border-transparent px-2 text-green-800 dark:text-white/80"
            )}
            onMouseDown={(e) => {
              if (e.button === 0) update(item.id, "checked", !checked);
            }}
          >
            {!checked ? "Check" : "Undo"}
          </button>
          <button
            className={cn(
              "flex shrink rounded-lg border px-4 py-2 font-normal duration-150",
              item.checked && "hidden",
              !item.focus
                ? "border-gray-600 text-gray-800 dark:border-gray-600  dark:text-gray-200"
                : "-ml-2 border border-transparent px-2 text-green-800 dark:text-white/80"
            )}
            onMouseDown={(e) => {
              if (e.button === 0)
                update(item.id, "focus", !item.focus || false);
            }}
          >
            {!item.focus ? "Pin" : "Unpin"}
          </button>
        </span>
      </div>
    </div>
  );
}
