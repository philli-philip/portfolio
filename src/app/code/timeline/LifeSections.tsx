import { cn } from "../../../utils/cn";
import { Day, TimeLinePhase } from "./timelineTypes";
import { useTimelineContext } from "./useTimelineReducer";
import { compensateOffset } from "./utils";

function getLength(start: Day, end?: Day) {
  if (end === undefined) return 0;
  const years = end.year - start.year;
  const months = end.month - start.month;
  const days = end.day - start.day;
  return years + months / 12 + days / 365;
}

export function LifeSections({ sections }: { sections: TimeLinePhase[] }) {
  const { state } = useTimelineContext();
  const bgColors: Record<TimeLinePhase["type"], string> = {
    childhood: "bg-green-500/30 hover:bg-green-500/60",
    adolescence: "bg-red-500/30 hover:bg-red-500/60",
    adulthood: "bg-blue-500/30 hover:bg-blue-500/60",
    retirement: "bg-yellow-500/30 hover:bg-yellow-500/60",
    death: "bg-black display-none",
  };

  const textColors: Record<TimeLinePhase["type"], string> = {
    childhood: "text-green-500",
    adolescence: "text-red-500",
    adulthood: "text-blue-500",
    retirement: "text-yellow-500",
    death: "text-black display-none",
  };

  return (
    <div className="flex flex-row gap-0.5">
      {sections.map((section, index) => {
        return (
          <div
            key={index}
            className={cn(
              "group relative h-2 rounded-sm bg-stone-200",
              bgColors[section.type]
            )}
            style={{
              width: `${
                getLength(section.start, sections[index + 1]?.start) *
                state.context.scale
              }px`,
              marginInlineStart:
                index === 0
                  ? `${compensateOffset(section.start, state.context)}px`
                  : "0px",
            }}
          >
            <span
              className={cn(
                "absolute bottom-2 z-40 hidden text-sm capitalize group-hover:block",
                textColors[section.type]
              )}
            >
              {section.type}
            </span>
          </div>
        );
      })}
    </div>
  );
}
