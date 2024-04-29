import type { Row } from "../../../utils/supabase/database.types";
import { useEffect, useState } from "react";
import { cn } from "../../../utils/cn";
import { updateTodoAction } from "./actions";

export default function ToDo({
  todo,
  onDelete,
}: {
  todo: Row<"todos">;
  onDelete: (id: string) => Promise<void>;
}): JSX.Element {
  const [title, setTitle] = useState(todo.title);
  const [checked, setChecked] = useState(todo.completed_at);

  useEffect(() => {
    updateTodoAction(todo.id, title, checked);
  }, [title, checked, todo.id]);

  return (
    <li
      key={title}
      className="group flex flex-row border-b border-b-gray-200 px-4 py-2 duration-75 last:border-transparent"
    >
      <input
        type="checkbox"
        checked={checked ? true : false}
        className="my-2 mr-4 h-4 w-4 cursor-pointer p-4"
        onChange={() => {
          console.log(checked);
          setChecked(checked ? null : new Date().toUTCString());
        }}
      />
      <input
        type="text"
        className={cn(
          checked && "text-gray-400 line-through",
          "flex-1 cursor-pointer"
        )}
        defaultValue={title}
        onBlur={(e) => setTitle(e.target.value)}
        onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
          if (e.key === "Enter") {
            setTitle((e.target as HTMLInputElement).value);
          }
        }}
      ></input>
      <button
        className="px-2 text-xs text-gray-700 opacity-0 duration-75 focus:opacity-100 group-hover:opacity-100"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}
