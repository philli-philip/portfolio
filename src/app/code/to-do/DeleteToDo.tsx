"use client";

import { useParams } from "next/navigation";
import { deleteToDo } from "../../api/todos/actions";

type Params = {
  id: string;
};

export default function DeleteToDo() {
  const params: Params | null = useParams();
  console.log(params);
  return <button onClick={() => deleteToDo(params.id)}>Delete</button>;
}
