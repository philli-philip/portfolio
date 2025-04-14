import { Day, ScaleContextType } from "./timelineTypes";

export function compensateOffset(date: Day | Date, context: ScaleContextType) {
  if (date instanceof Date) {
    return (
      (date.getFullYear() + date.getMonth() / 12 + date.getDate() / 365) *
        context.scale -
      context.offset
    );
  }
  return (
    (date.year + date.month / 12 + date.day / 365) * context.scale -
    context.offset
  );
}

export const formatter = new Intl.DateTimeFormat("de-DE", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export function getDayFromDate(date: Date) {
  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
}
