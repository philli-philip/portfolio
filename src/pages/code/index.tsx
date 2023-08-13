import Head from "next/head";
import Link from "next/link";
import { qrCode } from "./qr-code";
import { adviceGenerator } from "./advice-generator";
import { ClockApp } from "./clock-app";
import Item from "./item";
import { navItems } from "../../components/navBar";

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
  return (
    <>
      <Head>
        <title>Code Challenges</title>
        <meta
          name="description"
          content="Some Code challenges I am working on next to the portfolio itself"
        />
      </Head>
      <div className="flex flex-row w-screen min-h-screen">
      <nav className="w-48 border-r border-gray-200 h-screen px-6 py-3">
        <span className="font-semibold pb-4 block">Philip Mattha</span>
        <ul>
          {navItems.map((item)=> {
            return(
              <li key={item.key}>
                <a href={item.target} className="text-sm text-gray-700 block py-2">
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
      <main className="flex flex-grow flex-col">
      <h1 className="flex h-12 border-b border-gray-200 items-center px-6">Code</h1>
      {tasks.map((item, index) => (
        <Item task={item}/>
        ))}
      </main>
      </div>
    </>
  );
}
