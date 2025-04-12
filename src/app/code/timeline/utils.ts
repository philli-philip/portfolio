import { ScaleContextType } from "./page";
import { Day } from "./timelineTypes";

export function compensateOffset(date: Day, context: ScaleContextType) {
  return (
    (date.year + date.month / 12 + date.day / 365) * context.scale -
    context.offset
  );
}
