type Props = {
  height?: number;
  width?: number;
};

const DeutscheBankLogo = (props: Props) => {
  return (
    <svg
      width={props.width || 48}
      height={props.height || 48}
      viewBox="0 0 150 150"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m 1,1 h 148 v 148 h -148 z m 21,21 v 107 h 107 v -107 z m 68,15 h 27 l -56,77 h -27 z "
        className="fill-[#0018A8] dark:fill-white"
      />
    </svg>
  );
};

export default DeutscheBankLogo;
