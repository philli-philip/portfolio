import Item from "../item";
import type { Story } from "@ladle/react";
import type { Task } from "../../pages/code/iindex";

export const Simple: Story<Task> = (task: Task) => (
  <>
    <Item task={task} />
  </>
);

Simple.args = {
  id: 2,
  name: "A task name",
  link: "#",
  difficulty: "Difficult",
  completed: new Date(),
};
