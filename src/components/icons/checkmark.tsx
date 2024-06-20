type Props = {
  height?: number;
  width?: number;
  strokeWeight?: number;
};

export const CheckMark = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height={props.height || 24}
      width={props.width || 24}
    >
      <circle cx="12" cy="12" r="12" fill="#0A864A" />
      <path
        d="M6 12L10.5 15.5L18 8"
        stroke="white"
        strokeWidth={props.strokeWeight || 2}
      />
    </svg>
  );
};
