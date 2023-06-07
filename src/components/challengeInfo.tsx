import React, { useState } from "react";
import type { Task } from "../pages/code";
import format from "date-fns/format";
import Info from "./icons/info";

type Props = {
  task?: Task;
};

const exampleTast: Task = {
  name: "Example",
  difficulty: "simple",
  completed: new Date(Date.now()),
  link: "example",
};

export default function ChallengeInfo(props: Props): React.ReactElement {
  const [open, toggleOpen] = useState(false);

  const button = (
    <button
      className="mt-4 flex h-8 w-8 place-content-center items-center justify-center rounded-full bg-slate-800 text-slate-200 shadow-2xl hover:bg-slate-950"
      onClick={() => toggleOpen(!open)}
      aria-label="Info Panel"
    >
      <Info />
    </button>
  );

  const content: React.ReactElement = (
    <div
      className={`flex origin-bottom-right flex-col rounded-lg bg-slate-800 p-4 text-sm text-slate-200 shadow-lg duration-75 ${
        !open ? `scale-0` : `scale-100`
      }`}
    >
      <span className="text-md pb-4 font-semibold">
        {props.task?.name || "Not provided"}
      </span>
      <span>Difficulty: {props.task?.difficulty || "Not provided"}</span>
      {props.task?.completed && (
        <span>Completed: {format(props.task.completed, "dd MMM yyy")}</span>
      )}
    </div>
  );

  return (
    <div
      role="contentinfo"
      className="absolute bottom-12 right-12 flex flex-col items-end"
    >
      {content}
      {button}
    </div>
  );
}
