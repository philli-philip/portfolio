import Head from "next/head";
import { qrCode } from "./qr-code";
import { adviceGenerator } from "./advice-generator";
import { ClockApp } from "./clock-app";
import Item from "../../components/item";
import { navItems } from "../../components/navBar";
import { useState } from "react";
import Menu from "../../components/icons/menu";
import Settings from "../../components/icons/settings";
import { Popover, Transition } from "@headlessui/react";

export type Task = {
  id: number;
  name: string;
  link: string;
  difficulty: string;
  completed?: Date;
};

const code: Task = {
  id: 4,
  name: "Code Page",
  difficulty: "intermediary",
  link: "/code",
  completed: new Date("14 September 2023"),
};

const powerbank: Task = {
  id: 5,
  name: "PowerBank",
  difficulty: "master",
  link: "https://powerbank.vercel.app",
};

const tasksList: Task[] = [];
tasksList.push(qrCode);
tasksList.push(adviceGenerator);
tasksList.push(ClockApp);
tasksList.push(code);
tasksList.push(powerbank);

function sortTasks(list: Task[], order: string) {
  if (order === "name") {
    return list.sort((a, b) => ("" + a.name).localeCompare(b.name));
  } else if (order === "date") {
    return list.sort((a, b) => {
      if (a.completed === undefined) {
        return 1;
      } else if (b.completed === undefined) {
        return -1;
      } else {
        return (
          new Date(b.completed).getTime() - new Date(a.completed).getTime()
        );
      }
    });
  } else {
    return list.sort((a, b) => b.id - a.id);
  }
}

const List = (props: { tasks: Task[]; ordering: string }) => {
  return (
    <main>
      {sortTasks(props.tasks, props.ordering).map((item) => (
        <Item task={item} key={item.id} />
      ))}
    </main>
  );
};

export default function Page() {
  const [ordering, setOrdering] = useState("id");

  return (
    <>
      <Head>
        <title>Code Challenges</title>
        <meta
          name="description"
          content="Some Code challenges I am working on next to the portfolio itself"
        />
      </Head>
      <div className="relative flex min-h-screen w-screen flex-row dark:bg-gray-900">
        <nav className="hidden border-r border-gray-200 p-4 dark:border-gray-700 md:relative md:left-0 md:block md:w-48 md:opacity-100">
          <span className="block pb-4 font-semibold text-gray-800 dark:text-gray-50">
            Philip Mattha
          </span>
          <ul>
            {navItems.map((item) => {
              return (
                <li key={item.key}>
                  <a
                    href={item.target}
                    className="block py-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <main className="flex flex-grow flex-col">
          <div className="flex h-12 flex-row items-center gap-4 border-b border-gray-200 px-3 dark:border-gray-700 md:px-6">
            <Popover className="md:hidden">
              <Popover.Button className="rounded-lg border border-gray-200 p-2 text-gray-700 shadow-sm dark:border-gray-700 dark:text-gray-200 ">
                <Menu height={16} width={16} />
              </Popover.Button>
              <Transition
                enter="transition-transform duration-100 ease-out"
                enterFrom="-left-24"
                enterTo="left-0"
                leave="transition-transform duration-75 ease-out"
                leaveFrom="left-0"
                leaveTo="-left-24"
              >
                <Popover.Panel className="fixed left-0 top-0 z-10 h-screen w-9/12 border-r border-gray-200 bg-white px-6 py-3 shadow-lg dark:border-gray-700 dark:bg-gray-900">
                  <span className="block pb-4 font-semibold text-gray-800 dark:text-gray-50">
                    Philip Mattha
                  </span>
                  <ul>
                    {navItems.map((item) => {
                      return (
                        <li key={item.key}>
                          <a
                            href={item.target}
                            className="block py-2 text-sm text-gray-700 dark:text-gray-300"
                          >
                            {item.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </Popover.Panel>
              </Transition>
            </Popover>
            <h1 className="flex flex-1 text-gray-800 dark:text-gray-200">
              Code
            </h1>
            <Popover className="relative inline-block text-left">
              <Popover.Button className="flex flex-1 items-center gap-2 rounded-lg border border-gray-200 px-2 py-1 text-sm text-gray-700 shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700">
                <Settings height={16} width={16} />
                Settings
              </Popover.Button>
              <Popover.Panel className="absolute right-0 top-8 z-10 origin-top-right rounded-lg bg-white py-2 shadow-lg dark:bg-gray-800">
                <div className="flex flex-row items-center px-4">
                  <span className="text-secondary mr-8 text-sm">Ordering</span>
                  <select
                    className="border-default text-primary inline-block rounded-lg border bg-white py-1 pl-2 pr-2 text-sm hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
                    name="ordering"
                    defaultValue={ordering}
                    onChange={(e) => setOrdering(e.target.value)}
                  >
                    <option value="id">ID</option>
                    <option value="name">Name</option>
                    <option value="date">Date</option>
                  </select>
                </div>
              </Popover.Panel>
            </Popover>
          </div>
          <List tasks={tasksList} ordering={ordering} />
        </main>
      </div>
    </>
  );
}
