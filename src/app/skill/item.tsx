"use client";

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
        checked && "bg-green-50 dark:bg-green-950",
        "flex flex-1 cursor-pointer flex-col justify-start gap-4 border-b border-r border-gray-200 p-4 align-top duration-75 dark:border-gray-600"
      )}
    >
      <ul className="flex grow flex-row gap-4 text-sm font-light capitalize text-gray-400">
        <li>{item.level}</li>
        <li>{item.area}</li>
        <li>{item.category}</li>
      </ul>
      <span className="grow text-xl font-light">{item.description}</span>
      <div>
        <button
          className={cn(
            "flex shrink rounded-lg border border-transparent px-4 py-3",
            checked
              ? "border border-green-800 border-white/40 text-green-800 dark:text-white/80"
              : "bg-green-800 text-white"
          )}
          id={item.id}
          onMouseDown={(e) => {
            if (e.button === 0) update(item.id, "checked", !checked);
          }}
        >
          {!checked ? "I do this" : "Remove"}
        </button>
      </div>
    </div>
  );
}
