type Props = {
  height?: number;
  width?: number;
  strokeWeight?: number;
};

const StatusOpen = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      height={props.height || 24}
      width={props.width || 24}
      strokeWidth={props.strokeWeight || 1}
      stroke="currentColor"
    >
      <circle
      cx="8" cy="8" r="4" /> 
    </svg>
  );
};

export default StatusOpen;
