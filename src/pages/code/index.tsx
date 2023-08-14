import Head from "next/head";
import Link from "next/link";
import { qrCode } from "./qr-code";
import { adviceGenerator } from "./advice-generator";
import { ClockApp } from "./clock-app";
import Item from "../../components/item";
import { navItems } from "../../components/navBar";
import { useState } from "react";
import Menu from "../../components/icons/menu";

export type Task = {
  id: number,
  name: string;
  link: string;
  difficulty: string;
  completed?: Date;
};

const code:Task = {
  id: 4,
  name: "Code Page",
  difficulty: "intermediary",
  link: "#"
}

const tasks: Task[] = [];
tasks.push(qrCode);
tasks.push(adviceGenerator);
tasks.push(ClockApp);
tasks.push(code)

export default function Page() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Code Challenges</title>
        <meta
          name="description"
          content="Some Code challenges I am working on next to the portfolio itself"
        />
      </Head>
      <div className="flex flex-row w-screen min-h-screen" onClick={()=>setOpen(false)}>
      <nav className={`absolute w-9/12 bg-white border-r dark:bg-gray-900 border-gray-200 dark:border-gray-700 h-screen px-6 py-3 duration-100 transition-all shadow-lg ${!open ? `opacity-0 -left-full`: `opacity-100 left-0`} md:relative md:w-48 md:block md:shadow-none md:opacity-100 md:left-0`}>
        <span className="font-semibold pb-4 block text-gray-800 dark:text-gray-50">Philip Mattha</span>
        <ul>
          {navItems.map((item)=> {
            return(
              <li key={item.key}>
                <a href={item.target} className="text-sm text-gray-700 dark:text-gray-300 block py-2">
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
      <main className="flex flex-grow flex-col">
        <div className="flex flex-row h-12 border-b border-gray-200 dark:border-gray-700 items-center px-3 md:px-6 gap-4">
          <button onClick={(event) => {event.stopPropagation();setOpen(true)}} className="md:hidden rounded-lg border p-2 shadow-sm border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200"><Menu height={16} width={16}/></button>
          <h1 className="flex text-gray-800 dark:text-gray-200">Code</h1>
        </div>
      {tasks.map((item, index) => (
        <Item task={item} key={item.id}/>
        ))}
      </main>
      </div>
    </>
  );
}
