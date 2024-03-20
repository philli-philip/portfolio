"use client";
import { Popover } from "@headlessui/react";
import Settings from "../../components/icons/settings";
import { useFilterContext } from "./page";


export default function Filter() {
  const { filter, dispatch } = useFilterContext();

  return (
    <Popover className="relative inline-block text-left">
      <Popover.Button className="flex flex-1 items-center gap-2 rounded-lg border border-gray-200 bg-white px-2 py-1 text-sm text-gray-700 shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-transparent dark:text-gray-200 dark:hover:bg-gray-700">
        <Settings height={16} width={16} />
        Settings
      </Popover.Button>
      <Popover.Panel className="absolute right-0 top-8 z-10 origin-top-right rounded-lg bg-white py-2 shadow-lg dark:bg-gray-700 dark:shadow-xl dark:shadow-black">
        <div className="flex flex-row items-center px-4">
          <span className="text-secondary mr-8 text-sm">Ordering</span>
          <select
            className="border-default text-primary inline-block rounded-lg border bg-white py-1 pl-2 pr-2 text-sm hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
            name="ordering"
            defaultValue={filter.sort}
            onChange={(e) =>
              dispatch({
                type: "changeSort",
                value: e.target.value,
              })
            }
          >
            <option value="id">ID</option>
            <option value="name">Name</option>
            <option value="date">Date</option>
          </select>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
