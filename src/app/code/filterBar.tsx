"use client";
import { useEffect, useState } from "react";
import CloseIcon from "../../components/icons/close";
import { FilterByStatusStream } from "../../utils/eventbus";
import { Menu } from "@headlessui/react";
import { cn } from "../../utils/cn";

const levels = ["newbie", "intermediary", "master", "Beginner"];

const dropdown =
  "absolute left-0 top-8 z-10 origin-top-left rounded-lg bg-white py-2 shadow-lg dark:bg-gray-700 dark:shadow-xl dark:shadow-black";

const dropdownSub = "left-full -top-2 flex flex-col";

const menuItemStyle =
  "flex flex-row justify-between flex-1 gap-x-2 py-1 text-gray-800 dark:text-gray-200 px-4 hover:bg-black/5";

export default function FilterBar() {
  const [difficulty, setDifficulty] = useState("");

  useEffect(() => {
    FilterByStatusStream.subscribe("FilterByStatus", (message) => {
      console.log(message.filter);
      setDifficulty(message.filter);
    });
  }, []);

  return (
    <div className="flex flex-row gap-x-2 ">
      {difficulty && (
        <div className="flex flex-row items-center rounded-full border bg-white py-0 pl-2 text-xs text-gray-600 dark:border-white/20 dark:bg-white/10 dark:text-gray-400">
          Difficulty
          <span className="ml-1 text-gray-800 dark:text-gray-200">
            {difficulty}
          </span>
          <button
            className="h-6 w-6 rounded-full p-1 hover:bg-white/10"
            onClick={() => {
              setDifficulty("");
              FilterByStatusStream.publish("FilterByStatus", { filter: "" });
            }}
          >
            <CloseIcon height={16} width={16} />
          </button>
        </div>
      )}
      <Menu as="div" className="relative flex flex-row items-center">
        <Menu.Button className="flex flex-row items-center gap-x-2 align-middle text-sm text-orange-600 hover:text-orange-700 dark:text-orange-300">
          <CloseIcon
            width={16}
            height={16}
            className="rotate-45"
            strokeWeight={3}
          />
          Filter
        </Menu.Button>
        <Menu.Items className={dropdown}>
          <Menu.Item>
            <Menu as="div" className="relative">
              <Menu.Button className={menuItemStyle}>Difficulty</Menu.Button>
              <Menu.Items className={cn(dropdown, dropdownSub)}>
                {levels.map((item) => (
                  <Menu.Item>
                    <button
                      className={menuItemStyle}
                      onClick={(e) =>
                        FilterByStatusStream.publish("FilterByStatus", {
                          filter: item,
                        })
                      }
                    >
                      {item}
                    </button>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}
