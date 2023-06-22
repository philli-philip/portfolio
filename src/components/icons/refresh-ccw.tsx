type Props = {
  height?: number;
  width?: number;
  strokeWeight?: number;
};

const RefreshCCW = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height={props.height || 24}
      width={props.width || 24}
      strokeWidth={props.strokeWeight || 1.5}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M8.54659 19.7673C10.9457 20.8316 13.8032 20.7738 16.2502 19.361C20.3157 17.0138 21.7086 11.8153 19.3614 7.74983L19.1114 7.31682M4.63849 16.25C2.29128 12.1845 3.68422 6.98595 7.74971 4.63874C10.1967 3.22597 13.0541 3.16816 15.4533 4.23253M2.49339 16.3336L5.22544 17.0657L5.95749 14.3336M18.0426 9.66565L18.7747 6.9336L21.5067 7.66565"

      />
    </svg>
  );
};

export default RefreshCCW;
