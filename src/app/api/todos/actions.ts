"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import z from "zod";

export async function deleteToDo(id: string) {
  const schema = z.object({
    todo: z.string().min(1),
  });

  const data = schema.parse({
    todo: id,
  });
  try {
    await sql`Delete from todo where id = ${data.todo}`;
    revalidatePath("/");
    return { message: "Deleted 1 todo" };
  } catch (e) {
    return { message: "Failed to delete todo" };
  }
}

export async function createTodo(title: string) {
  const schema = z.object({
    todo: z.string().min(1, "The Todo needs at least 1 Character"),
  });

  const data = schema.parse({
    todo: title,
  });

  try {
    await sql`
    INSERT INTO todo (name)
    values (${data.todo});`;

    revalidatePath("/");
    return { message: "Added 1 todo" };
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
