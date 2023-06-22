type Props = {
  height?: number;
  width?: number;
  strokeWeight?: number;
};

const ChevronDown = (props: Props) => {
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
      <path d="M6 9L12 15L18 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ChevronDown;
