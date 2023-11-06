import { sql } from "@vercel/postgres";
import DeleteToDo from "./DeleteToDo";
import InsertToDo from "./InsertToDo";
import Link from "next/link";

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
              <DeleteToDo id={todo.id} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
