"use client";

import { useParams } from "next/navigation";
import { deleteToDo } from "../../api/todos/actions";

export default function DeleteToDo() {
  const params = useParams();

  const id: string | undefined = Array.isArray(params?.id)
    ? params?.id[0]
    : params?.id;

  const handleDelete = (id: string | undefined) => {
    if (id) {
      deleteToDo(id);
    } else {
      console.log("Cannot delete todo as Array or null was provided as ID");
    }
  };

  return <button onClick={() => handleDelete(id)}>Delete</button>;
}
