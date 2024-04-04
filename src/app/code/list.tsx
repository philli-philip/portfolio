"use client";

import Item from "./item";
import { qrCode } from "../code/qr-code/page";
import { adviceGenerator } from "../code/advice/page";
import { ClockApp } from "../code/clock-app/page";
import type { Task } from "../../utils/types";
import { useFilterContext } from "./page";

const code: Task = {
  id: 4,
  name: "Code Page",
  difficulty: "intermediary",
  link: "/code",
  completedAt: new Date("14 September 2023"),
  status: "completed",
};
const advancedFiltering: Task = {
  id: 7,
  name: "Advanced Filtering",
  difficulty: "intermediary",
  link: "/code",
  completedAt: new Date("20 November 2023"),
  status: "completed",
};

const powerbank: Task = {
  id: 5,
  name: "PowerBank",
  difficulty: "master",
  link: "https://powerbank.vercel.app",
  status: "canceled",
};

const dreiJS: Task = {
  id: 8,
  name: "Experiments with three.js",
  difficulty: "intermediary",
  link: "/code/drei",
  completedAt: new Date("17 March 2024"),
  status: "completed",
};
const table: Task = {
  id: 9,
  name: "Grids vs. Lists",
  difficulty: "intermediary",
  link: "/code/table",
  status: "open",
};

const tasksList: Task[] = [
  qrCode,
  adviceGenerator,
  advancedFiltering,
  ClockApp,
  code,
  powerbank,
  dreiJS,
  table,
];

function sortArrayByAttribute(attribute: string, ascending: boolean) {
  return function (a: any, b: any): number {
    if (a[attribute] < b[attribute]) {
      return ascending ? -1 : 1;
    }
    if (a[attribute] > b[attribute]) {
      return ascending ? 1 : -1;
    }
    return 0;
  };
}

export default function List() {
  const { filter } = useFilterContext();

  return (
    <ul className="mx-4 overflow-hidden rounded-lg border border-gray-200 shadow-xl md:mx-8 dark:border-white/20">
      {tasksList
        .filter(
          (task) =>
            (filter.difficulty === "all" && filter.status === "all") ||
            (task.difficulty == filter.difficulty && filter.status === "all") ||
            (filter.difficulty === "all" &&
              isCompleted(task.status) == stateToBoolean(filter.status)) ||
            (task.difficulty == filter.difficulty &&
              isCompleted(task.status) == stateToBoolean(filter.status))
        )
        .sort(sortArrayByAttribute(filter.sort, false))
        .map((item) => (
          <Item task={item} key={item.id} />
        ))}
    </ul>
  );
}

function isCompleted(date: string) {
  if (date !== "completed") {
    return false;
  } else {
    return true;
  }
}

function stateToBoolean(label: string) {
  if (label === "completed") {
    return true;
  } else if ((label = "open")) {
    return false;
  } else {
    throw new Error("label is not completed or open.");
  }
}
