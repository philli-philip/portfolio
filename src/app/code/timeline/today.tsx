"use client";
import { useScale } from "./page";

export default function Today({ date }: { date: Date }) {
  const scale = useScale();
  const formatter = new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  function getPosition(date: Date): number {
    const years = date.getFullYear();
    const months = date.getMonth();
    const days = date.getDate();
    return (years + months / 12 + days / 365) * scale.scale;
  }

  return (
    <div
      className="group absolute top-0"
      style={{ left: `${getPosition(date) - scale.offset}px` }}
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
