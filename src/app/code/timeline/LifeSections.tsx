import { cn } from "../../../utils/cn";
import { Day, TimeLinePhase } from "./timelineTypes";
import { useScale } from "./page";
import { compensateOffset } from "./utils";

function getLength(start: Day, end?: Day) {
  if (end === undefined) return 0;
  const years = end.year - start.year;
  const months = end.month - start.month;
  const days = end.day - start.day;
  return years + months / 12 + days / 365;
}

export function LifeSections({ sections }: { sections: TimeLinePhase[] }) {
  const scale = useScale();
  const colors: Record<TimeLinePhase["type"], string> = {
    childhood: "bg-green-500",
    adolescence: "bg-red-500",
    worklife: "bg-blue-500",
    retirement: "bg-yellow-500",
    death: "bg-black display-none",
  };
  return (
    <div className="flex flex-row gap-0.5">
      {sections.map((section, index) => {
        return (
          <div
            key={index}
            className={cn(
              "h-2 rounded-sm bg-stone-200 opacity-20",
              colors[section.type]
            )}
            style={{
              width: `${
                getLength(section.start, sections[index + 1]?.start) *
                scale.scale
              }px`,
              marginInlineStart:
                index === 0
                  ? `${compensateOffset(section.start, scale)}px`
                  : "0px",
            }}
          ></div>
        );
      })}
    </div>
  );
}
