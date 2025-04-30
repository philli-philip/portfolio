import { cn } from "../../../utils/cn";

export function Block({
  className,
  name,
  color = "undefined",
  children,
}: {
  className?: string;
  name?: string;
  color?: "blue" | "red" | "green" | "yellow" | "undefined";
  children?: React.ReactNode;
}) {
  const colors = {
    blue: "[--pattern-bg:#F1F6F8] [--pattern-fg:#E7EEF0] dark:[--pattern-bg:#20292F] dark:[--pattern-fg:#293339]",
    red: "[--pattern-bg:red] [--pattern-fg:#ffe8e8] dark:[--pattern-bg:#20292F] dark:[--pattern-fg:#293339]",
    green:
      "[--pattern-bg:#EFF5F3] [--pattern-fg:#E4ECE9] dark:[--pattern-bg:#20292F] dark:[--pattern-fg:#293339]",
    yellow:
      "[--pattern-bg:#F7F5F0] [--pattern-fg:#F0EDE6] dark:[--pattern-bg:#20292F] dark:[--pattern-fg:#293339]",
    undefined:
      "[--pattern-bg:#eee] [--pattern-fg:#eee] dark:[--pattern-bg:#20292F] dark:[--pattern-fg:#293339]",
  };
  return (
    <div
      className={cn(
        colors[color],
        "relative isolate flex flex-col items-center justify-center bg-white after:absolute after:inset-1.5 after:bg-[size:10px_10px] dark:bg-gray-800",
        "after:bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_var(--pattern-bg)_0,_var(--pattern-bg)_50%)]",
        className
      )}
    >
      <span className="z-20 dark:text-gray-300">{name}</span>
    </div>
  );
}
