"use client";
import { cn } from "../../../utils/cn";
import { useScale } from "./page";
import { TimeLineEvent } from "./timelineTypes";
import { compensateOffset } from "./utils";

export default function PrivateEvents({
  events,
  type = "private",
}: {
  events: TimeLineEvent[];
  type?: "private" | "public";
}) {
  const scale = useScale();
  return (
    <div className="relative h-6">
      {events.map((item, index) => (
        <div
          key={index}
          className="group absolute cursor-pointer p-0.5"
          style={{ left: `${compensateOffset(item.day, scale) - 6}px` }}
        >
          <div className="size-5 rounded-full border-[6px] border-stone-100 bg-black/50 group-hover:border-stone-200 group-hover:bg-black" />
          <div
            className={cn(
              type === "public" ? "top-4" : "bottom-4",
              "absolute left-1 z-20 hidden w-48 flex-col gap-0.5 py-4 text-sm group-hover:flex"
            )}
          >
            {item.title}
            <span className="text-xs text-black/60">{item.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
