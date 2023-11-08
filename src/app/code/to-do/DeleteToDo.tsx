"use client";

import { useParams } from "next/navigation";
import { deleteToDo } from "../../api/todos/actions";
import { isArray } from "lodash";

const handleDelete = () => {
  const params = useParams();
  const id = params?.id;

  if (!isArray(id) && id) {
    deleteToDo(id);
  } else {
    console.log("Cannot delete todo as Array or null was provided as ID");
  }
};

export default function DeleteToDo() {
  return <button onClick={() => handleDelete}>Delete</button>;
}
