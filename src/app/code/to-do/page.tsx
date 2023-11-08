import { sql } from "@vercel/postgres";
import DeleteToDo from "./DeleteToDo";
import InsertToDo from "./InsertToDo";
import Link from "next/link";
import type { Task } from "../../../pages/code";

export const todo: Task = {
  id: 6,
  name: "To-Do List",
  difficulty: "intermediary",
  link: "/code/to-do/",
  completed: undefined,
};

export const dynamic = "force-dynamic";

export default async function Page() {
  const { rows: todos } = await sql`Select * from todo`;

  return (
    <>
      <section className="mx-auto mt-24 max-w-3xl">
        <h1 className="text-3xl">Todos</h1>
        <InsertToDo />
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <Link href={`/code/to-do/${todo.id}`}>{todo.name}</Link>
              <DeleteToDo />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
