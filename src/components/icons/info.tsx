type Props = {
  height?: number;
  width?: number;
  strokeWeight?: number;
};

const Info = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      height={props.height || 24}
      width={props.width || 24}
      strokeWidth={props.strokeWeight || 1.5}
      stroke="currentColor"
    >
      <path
        d="M8 12V8M8 4H8.01"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Info;
