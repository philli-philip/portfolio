"use client";
import { useEffect, useState } from "react";
import { compensateOffset, formatter } from "./utils";
import { Plus } from "lucide-react";
import { useTimelineContext } from "./useTimelineReducer";

export default function Marker() {
  const { state, dispatch } = useTimelineContext();
  const [date, setDate] = useState<Date | undefined>(undefined);
  
  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      const part = e.clientX / window.innerWidth;
      console.log("end date:", state.context.end, part);
      const value =
        state.context.start.getTime() +
        (state.context.end.getTime() - state.context.start.getTime()) * part;
      const date = new Date(value);
      setDate(date);
    };

    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);
  if (!date) {
    return null;
  }
  return (
    <div
      className="absolute top-0 flex w-6 flex-col items-center"
      style={{
        left: `${compensateOffset(date, state.context) - 12}px`,
      }}
    >
      <button
        onClick={() => {
          dispatch({
            type: "addEvent",
            payload: {
              day: {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate(),
              },
              title: "New Event",
              type: "private",
              isEditing: true,
            },
          });
        }}
        className="absolute -top-7 z-20 flex size-4 cursor-pointer flex-col items-center justify-center rounded-full bg-stone-300 duration-75 hover:bg-stone-400"
      >
        <Plus size={12} strokeWidth={3} strokeLinecap="round" />
      </button>
      <div className="h-6 w-0.5 rounded-full bg-black" />

      <div className="cursor-default whitespace-nowrap text-sm text-gray-700">
        {formatter.format(date)}
      </div>
    </div>
  );
}
