type Props = {
  height?: number;
  width?: number;
  strokeWeight?: number;
  className?: string;
};

export default function CloseIcon(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height={props.height || 24}
      width={props.width || 24}
      strokeWidth={props.strokeWeight || 1.5}
      stroke="currentColor"
      className={props.className || ""}
      strokeLinecap="round"
    >
      <path d="M18 6L6 18M6 6L18 18" />
    </svg>
  );
}
