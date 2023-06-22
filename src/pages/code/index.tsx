import Head from "next/head";
import Link from "next/link";
import { qrCode } from "./qr-code";
import { adviceGenerator } from "./advice-generator";
import { ClockApp } from "./clock-app";

export type Task = {
  name: string;
  link: string;
  difficulty: string;
  completed?: Date;
};

const tasks: Task[] = [];
tasks.push(qrCode);
tasks.push(adviceGenerator);
tasks.push(ClockApp);

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
      <h1>Hello, Code page!</h1>
      {tasks.map((item, index) => (
        <Link key={index} href={"/code/" + item.link}>
          {item.name}
        </Link>
      ))}
    </>
  );
}
