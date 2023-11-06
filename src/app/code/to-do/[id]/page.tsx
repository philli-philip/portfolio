import DeleteToDo from "../DeleteToDo";

import { sql } from "@vercel/postgres";
import format from "date-fns-tz/format";

export interface ToDo {
  name: string;
  owner: string;
  created_at: Date;
  id: string;
}

export default async function Page({ params }: { params: { id: string } }) {
  const { rows } = await sql<ToDo>`
    SELECT * from todo
    WHERE id=${params.id}
    Limit 1`;

  const todo = rows[0];

  if (todo) {
    return (
      <section>
        <h1>{todo?.name}</h1>
        <span>Created at: {format(todo.created_at, "d MMM yyyy")}</span>
        <div>
          Actions:
          <DeleteToDo />
        </div>
      </section>
    );
  }
}
