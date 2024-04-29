"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import { createClient } from "../../../utils/supabase/client";
import type { Row } from "../../../utils/supabase/database.types";
import Todo from "./Todo";
import { createTodo } from "./actions";
import { Skeleton } from "./Skeleton";

export default function Page() {
  const supabase = createClient();
  const [todos, setTodos] = useState<Row<"todos">[]>();
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const inputField = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(true);

  const handleNewTodo = useCallback(async () => {
    if (newTodoTitle !== "") {
      try {
        const data = await createTodo(newTodoTitle);
        if (data) {
          !todos && setTodos([data]);
          todos && setTodos([data, ...todos]);
        }
        if (inputField.current)
          (inputField.current as HTMLInputElement).value = "";
        setNewTodoTitle("");
      } catch (error) {
        alert(error);
      }
    }
  }, [newTodoTitle, todos]);

  const getTodos = useCallback(async () => {
    setLoading(true);
    const { data: todos } = await supabase
      .from("todos")
      .select()
      .is("completed_at", null)
      .order("created_at", { ascending: false });
    if (todos) {
      setTodos(todos);
      setLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("todos").delete().eq("id", id);
      if (error) throw Error(error.message);
      getTodos();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="h-screen w-screen bg-zinc-100 ">
      <main className="mx-auto max-w-lg px-4">
        <h1 className="pb-4 pl-4 pt-16 text-2xl font-semibold tracking-tight md:pl-0">
          Todo
        </h1>
        <div className="rounded-lg bg-white shadow-md">
          <div className="flex flex-row gap-x-4 border-b border-b-gray-200 py-3 pl-2 pr-4 ">
            <input
              ref={inputField}
              placeholder="Add a task..."
              className="flex-1 rounded pl-2 text-sm focus:outline-none focus:placeholder:text-gray-500"
              onChange={(e) => setNewTodoTitle(e.target.value)}
              onKeyDown={(e) => {
                e.key === "Enter" && handleNewTodo();
              }}
            ></input>
            <button
              onClick={() => handleNewTodo()}
              className="rounded-md bg-lime-50 px-2 py-1 text-xs accent-lime-600 hover:bg-lime-200 focus:bg-lime-200"
            >
              Create
            </button>
          </div>
          {loading && <Skeleton />}
          {todos && todos?.length > 0 && (
            <ul>
              {todos?.map((todo) => (
                <Todo
                  todo={todo}
                  key={todo.id}
                  onDelete={() => handleDelete(todo.id)}
                />
              ))}
            </ul>
          )}
        </div>
        <p className="mt-4 px-2 text-xs font-light text-gray-400">
          Please keep in mind that this is not be be abused. It is only a little
          online playground to show of skills.
        </p>
      </main>
    </div>
  );
}
