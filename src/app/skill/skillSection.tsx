"use client";

import type { Skills } from "./page";
import Item from "./item";
import { useState } from "react";
import { cn } from "../../utils/cn";

export default function SkillSection({
  skills,
  handleUpdate,
  level,
  defaultOpen,
}: {
  skills: Skills;
  handleUpdate: (id: string, attribute: string, value: boolean) => void;
  level: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen || false);
  return (
    <div>
      <div
        className="border-l border-r border-t dark:border-gray-600 border-gray-200 p-4 hover:bg-black/5"
        onMouseDown={(e) => {
          if (e.button === 0) setOpen(!open);
        }}
      >
        <h3 className="text-sm capitalize">{level}</h3>
      </div>
      <div
        className={cn(
          open ? "h-auto" : "h-0",
          "grid overflow-hidden border-l border-t dark:border-gray-600 border-gray-200 duration-150 lg:grid-cols-4"
        )}
      >
        {skills
          .filter((item) => item.level === level)
          .sort((a, b) => a.level.localeCompare(b.level))
          .map((item, index) => (
            <Item
              key={index}
              update={handleUpdate}
              checked={item.checked || false}
              item={item}
            />
          ))}
      </div>
    </div>
  );
}
