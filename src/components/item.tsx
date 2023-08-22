import type { Task } from "../pages/code";
import format from "date-fns-tz/format";
import Status from "./completed";

type Props = {
  task: Task;
};

export default function Item(props: Props) {
  const { name, difficulty, completed, id, link } = props.task;
  return (
    <a
      href={"/code/" + link}
      onClick={(e) => e.stopPropagation()}
      key={id}
      className="flex h-12 flex-row items-center justify-between gap-2 border-b border-gray-200 px-4 text-sm hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 md:gap-4 md:px-6"
    >
      <span className="text-secondary w-8">{`P-` + id}</span>
      <span className="text-primary font-semibold">{name}</span>
      <Status completed={completed} />
      <span className="text-secondary flex w-24 flex-1 justify-end text-right">
        {completed ? format(completed, "dd MMM YYY") : "--"}
      </span>
    </a>
  );
}
