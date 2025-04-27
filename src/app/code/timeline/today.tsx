"use client";
import { useTimelineContext } from "./useTimelineReducer";
import { formatter } from "./utils";

export default function Today({ date }: { date: Date }) {
  const { state } = useTimelineContext();

  function getPosition(date: Date): number {
    const years = date.getFullYear();
    const months = date.getMonth();
    const days = date.getDate();
    return (years + months / 12 + days / 365) * state.context.scale;
  }

  return (
    <div
      className="group absolute top-0"
      style={{ left: `${getPosition(date) - state.context.offset}px` }}
    >
      <div className=" size-2 rounded-full bg-red-500">
        <div className="absolute bottom-4 left-1 h-4 w-0.5 rounded-full bg-red-500" />
        <p className="absolute bottom-8 whitespace-nowrap text-red-500 group-hover:block">
          {formatter.format(date)}
        </p>
      </div>
    </div>
  );
}
