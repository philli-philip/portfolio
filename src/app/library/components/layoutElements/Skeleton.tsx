import { cn } from "../../../../utils/cn";

export default function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-3 w-20 rounded-full bg-gray-400 dark:bg-gray-600",
        className
      )}
    />
  );
}
