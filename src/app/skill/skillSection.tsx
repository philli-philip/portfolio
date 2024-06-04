"use client";

import type { Skills } from "./page";
import Item from "./item";
import { useState } from "react";
import { cn } from "../../utils/cn";
import { lvlContent } from "./content";

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
  const content = lvlContent.find((item) => item.title === level);

  const progress =
    (skills.reduce((prog, item) => {
      if (item.checked) {
        prog++;
      }
      return prog;
    }, 0) /
      (content?.skills || 1)) *
    100;

  return (
    <div className={cn(open && "mb-8", "relative")}>
      <div
        className={cn(
          open ? "border-b" : "",
          "group sticky top-0 border-l border-r border-t border-gray-200 bg-white p-4 hover:bg-gray-100 dark:border-gray-600"
        )}
        onMouseDown={(e) => {
          if (e.button === 0) setOpen(!open);
        }}
      >
        <h3 className="text-sm capitalize">{content?.title}</h3>
        <p className="text-sm text-gray-500">{content?.description}</p>
        <div
          style={{ width: progress + "%" }}
          className=" absolute left-0 top-0 -z-10 h-full bg-gray-100 duration-75 group-hover:bg-gray-200"
        ></div>
      </div>
      <div
        className={cn(
          open ? "h-auto " : "h-0",
          "grid overflow-hidden border-l border-gray-200 duration-150 lg:grid-cols-4 dark:border-gray-600"
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
