import StatusOpen from "./status-open";

type Props = {
  height?: number;
  width?: number;
  strokeWeight?: number;
};

const RightArrow = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height={props.height || 24}
      width={props.width || 24}
      strokeWidth={props.strokeWeight || 1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 13.5 4.5 L 21 12 m 0 0 l -7.5 7.5 M 21 12 h -18"
      />
    </svg>
  );
};

export default RightArrow;
