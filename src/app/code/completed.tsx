import StatusOpen from "../../components/icons/status-open";
import StatusCompleted from "../../components/icons/status-completed";

type Props = {
  completed?: Date;
};

export default function Status(props: Props) {
  const done = (props.completed && true) || false;

  const completed = (
    <span className="flex flex-row items-center">
      <StatusCompleted className="drop-shadow-[0_0px_12px_rgba(0,255,0,0.5)]" />
      Completed
    </span>
  );
  const open = (
    <span className="flex flex-row items-center">
      <StatusOpen />
      Open
    </span>
  );

  return (
    <span className="text-secondary hidden flex-1 sm:flex">
      {done ? completed : open}
    </span>
  );
}
