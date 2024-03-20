import StatusOpen from "../../components/icons/status-open";
import StatusCompleted from "../../components/icons/status-completed";
import { useFilterContext } from "./page";

type Props = {
  completed?: Date;
};

export default function Status(props: Props) {
  const done = (props.completed && true) || false;
  const { dispatch } = useFilterContext();

  const completed = (
    <>
      <StatusCompleted className="drop-shadow-[0_0px_12px_rgba(0,255,0,0.5)]" />
      Completed
    </>
  );
  const open = (
    <>
      <StatusOpen />
      Open
    </>
  );

  return (
    <button
      className="text-secondary flex flex-shrink items-center rounded-full border border-transparent py-[2px] pr-2 hover:border-gray-300 sm:flex dark:hover:border-white/20 dark:hover:bg-white/10"
      onClick={(e) => {
        e.stopPropagation();
        dispatch({ type: "filterStatus", value: done ? "completed" : "open" });
      }}
    >
      {done ? completed : open}
    </button>
  );
}
