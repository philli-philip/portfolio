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
        checked ? "bg-gray-100" : "bg-white",
        "flex flex-1 flex-col justify-between gap-4 border-b border-r border-gray-200 p-4 align-top duration-75 dark:border-gray-600"
      )}
    >
      <ul className="flex flex-row items-center gap-4 text-sm font-light capitalize text-gray-500">
        <li>{item.level}</li>
        <li>{item.area}</li>
        <li>{item.category}</li>
        {checked && <CheckMark height={16} width={16} />}
      </ul>
      <span
        className={cn(
          " self-center align-middle text-xl font-light leading-normal",
          checked && "text-gray-800/20 line-through"
        )}
      >
        {item.description}
      </span>
      <div>
        <button
          className={cn(
            "flex shrink rounded-lg border border-green-800 px-4 py-2 font-normal duration-150",
            !checked
              ? "bg-green-800 text-white"
              : "-ml-2 border border-transparent px-2 text-green-800 hover:bg-green-800/10 dark:border-white/40 dark:text-white/80"
          )}
          id={item.id}
          onMouseDown={(e) => {
            if (e.button === 0) update(item.id, "checked", !checked);
          }}
        >
          {!checked ? "Check" : "Undo"}
        </button>
      </div>
    </div>
  );
}
