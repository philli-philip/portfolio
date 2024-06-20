type Props = {
  height?: number;
  width?: number;
  strokeWeight?: number;
  className?: string;
};

export default function Revert(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      height={props.height || 24}
      width={props.width || 24}
      strokeWidth={props.strokeWeight || 1.5}
      stroke="currentColor"
      className={props.className || ""}
      strokeLinecap="round"
    >
      <path
        d="M4 13H8.5C10.9853 13 13 10.9853 13 8.5V8.5C13 6.01472 10.9853 4 8.5 4H1M1 4L4 1M1 4L4 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
