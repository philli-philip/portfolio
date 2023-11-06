"use client";

import { useState } from "react";
import { createTodo } from "../../api/todos/actions";

export default function InsertToDo() {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <form>
        <input
          placeholder="New Todo..."
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        ></input>
        <p></p>
        <button
          onClick={(e) => (
            e.preventDefault(), createTodo(newTodo), setNewTodo("")
          )}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
