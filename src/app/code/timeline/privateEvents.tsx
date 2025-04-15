"use client";
import { cn } from "../../../utils/cn";
import { TimeLineEvent } from "./timelineTypes";
import { useTimelineContext } from "./useTimelineReducer";
import { compensateOffset, formatter } from "./utils";
import { useState, KeyboardEvent } from "react";
import { Check, X } from "lucide-react";

export default function PrivateEvents({
  events,
  type = "private",
}: {
  events: TimeLineEvent[];
  type?: "private" | "public";
}) {
  return (
    <div className="relative z-20 h-6">
      {events.map((item, index) => (
        <PrivateEvent event={item} key={index} type={type} />
      ))}
    </div>
  );
}

const PrivateEvent = ({
  event,
  type,
}: {
  event: TimeLineEvent;
  type: "private" | "public";
}) => {
  const date = new Date(
    `${event.day.year}-${event.day.month}-${event.day.day}`
  );
  const { state, dispatch } = useTimelineContext();
  const [editValue, setEditValue] = useState("");
  const [editDate, setEditDate] = useState(
    `${event.day.year.toString().padStart(4, "0")}-${event.day.month
      .toString()
      .padStart(2, "0")}-${event.day.day.toString().padStart(2, "0")}`
  );
  return (
    <div
      className="group absolute cursor-pointer p-0.5"
      style={{
        left: `${compensateOffset(event.day, state.context) - 14}px`,
      }}
    >
      <div className="size-5 rounded-full border-[6px] border-stone-100 bg-black/50 group-hover:border-stone-200 group-hover:bg-black" />
      <div
        className={cn(
          type === "public" ? "top-4" : "bottom-4",
          event.isEditing ? "flex" : "hidden",
          "absolute left-1 z-20 w-48 flex-col gap-0.5 py-4 text-sm group-hover:flex"
        )}
      >
        {event.isEditing && type === "private" ? (
          <div className="flex items-start gap-1">
            <span className="flex flex-col">
              <input
                type="text"
                className="w-36 appearance-none bg-transparent text-sm"
                value={editValue || event.title}
                onChange={(e) => setEditValue(e.target.value)}
                onFocus={() => setEditValue(event.title)}
                onKeyDown={(e: KeyboardEvent) => {
                  if (e.key === "Enter") {
                    dispatch({
                      type: "updateEventTitle",
                      payload: {
                        id: event.id,
                        title: editValue,
                        type: "private",
                      },
                    });
                  }
                  if (e.key === "Escape") {
                    dispatch({
                      type: "updateEventTitle",
                      payload: {
                        id: event.id,
                        title: event.title,
                        type: "private",
                      },
                    });
                  }
                }}
                autoFocus
              />
              <input
                type="date"
                className="w-36 appearance-none bg-transparent text-sm"
                value={editDate || new Date().toISOString().split("T")[0]}
                onChange={(e) => setEditDate(e.target.value)}
                onKeyDown={(e: KeyboardEvent) => {
                  if (e.key === "Enter") {
                    dispatch({
                      type: "updateEventTitle",
                      payload: {
                        id: event.id,
                        title: editValue,
                        type: "private",
                        day: {
                          year: event.day.year,
                          month: event.day.month,
                          day: event.day.day,
                        },
                      },
                    });
                  }
                }}
              />
            </span>
            <button
              onClick={() => {
                dispatch({
                  type: "updateEventTitle",
                  payload: {
                    id: event.id!,
                    title: editValue,
                    type: "private",
                    day: {
                      year: event.day.year,
                      month: event.day.month,
                      day: event.day.day,
                    },
                  },
                });
              }}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600"
            >
              <Check size={12} />
            </button>
            <button
              onClick={() => {
                dispatch({
                  type: "deleteEvent",
                  payload: {
                    id: event.id!,
                    type: "private",
                  },
                });
              }}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
            >
              <X size={12} />
            </button>
          </div>
        ) : (
          <span
            className="flex flex-col text-black"
            onClick={() => {
              dispatch({
                type: "toggleEdit",
                payload: {
                  id: event.id!,
                  type: "private",
                },
              });
            }}
          >
            {event.title}
            <span className="text-sm text-black/60">
              {formatter.format(date)}
            </span>
          </span>
        )}
      </div>
    </div>
  );
};
