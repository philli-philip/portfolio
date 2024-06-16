import { cn } from "../../utils/cn";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "green" | "red";
  size?: "medium" | "large";
}

export default function Button(props: Props) {
  return (
    <button
      {...props}
      className={cn(
        "mb-2  block rounded-xl border-b  border-white/20 font-medium leading-[48px] text-white shadow-green-700 duration-75 hover:mb-1 hover:mt-1",
        props.color === "green" &&
        "bg-green-500 drop-shadow-[0_8px_0_#15803d] hover:drop-shadow-[0_4px_0_#15803d] ",
        props.color === "red" &&
        "bg-red-500 drop-shadow-[0_8px_0_rgba(220,38,38,1)] hover:drop-shadow-[0_4px_0_rgba(220,38,38,1)] ",
        props.size === "large" ? "h-16 px-6" : "h-12 px-4",
        props.disabled && "bg-gray-300 text-gray-400",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
