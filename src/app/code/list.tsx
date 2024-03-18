"use client";

import Item from "./item";
import { qrCode } from "../code/qr-code/page";
import { adviceGenerator } from "../code/advice/page";
import { ClockApp } from "../code/clock-app/page";
import { FilterByStatusStream, OrderStream } from "../../utils/eventbus";
import { useEffect, useState } from "react";
import type { Task } from "../../utils/types";

const code: Task = {
  id: 4,
  name: "Code Page",
  difficulty: "intermediary",
  link: "/code",
  completed: new Date("14 September 2023"),
};
const advancedFiltering: Task = {
  id: 7,
  name: "Advanced Filtering",
  difficulty: "intermediary",
  link: "/code",
  completed: new Date("20 November 2023"),
};

const powerbank: Task = {
  id: 5,
  name: "PowerBank",
  difficulty: "master",
  link: "https://powerbank.vercel.app",
};

const dreiJS: Task = {
  id: 8,
  name: "Experiments with three.js",
  difficulty: "intermediary",
  link: "/code/drei",
  completed: new Date("17 March 2024"),
};

const tasksList: Task[] = [
  qrCode,
  adviceGenerator,
  advancedFiltering,
  ClockApp,
  code,
  powerbank,
  dreiJS,
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
  const [order, setOrder] = useState("id");
  const [difficulty, setDifficulty] = useState("");

  useEffect(() => {
    OrderStream.subscribe("SetOrder", (message) => {
      setOrder(message.orderBy);
    });

    FilterByStatusStream.subscribe("FilterByStatus", (message) => {
      console.log(message.filter);
      setDifficulty(message.filter);
    });
  }, []);

  return (
    <ul className="mx-4 overflow-hidden rounded-lg border border-gray-200 shadow-xl dark:border-white/20 md:mx-8">
      {tasksList
        .filter((task) => !difficulty || task.difficulty == difficulty)
        .sort(sortArrayByAttribute(order, false))
        .map((item) => (
          <Item task={item} key={item.id} />
        ))}
    </ul>
  );
}
