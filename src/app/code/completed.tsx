import StatusOpen from "../../components/icons/status-open";
import { useFilterContext } from "./page";
import type { TaskStatus } from "../../utils/types";
import CloseIcon from "../../components/icons/close";
import ListFilterButton from "./ListFilterButton";

type Props = {
  status: TaskStatus;
};

export default function Status({ status }: Props) {
  const { dispatch } = useFilterContext();

  return (
    <ListFilterButton
      className=""
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: "filterStatus", value: status });
      }}
    >
      {renderSwitch(status)}
    </ListFilterButton>
  );
}

function renderSwitch(status: string) {
  switch (status) {
    case "canceled":
      return (
        <>
          <CloseIcon width={16} height={16} />
          Canceled
        </>
      );
    case "completed":
      return (
        <>
          <div className="h-3 w-3 rounded-full bg-green-500 pr-2"> </div>
          Completed
        </>
      );
    case "open":
      return (
        <>
          <StatusOpen />
          Open
        </>
      );
    default:
      throw Error("no valid Status as input");
  }
}
