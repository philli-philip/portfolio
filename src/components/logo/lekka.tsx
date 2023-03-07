type Props = {
  height?: number;
  width?: number;
};

const LekkaLogo = (props: Props) => {
  return (
    <svg
      width={props.width || 79}
      height={props.height || 32}
      viewBox="0 0 80 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_12_149)">
        <path
          d="M29.2046 10.5022H32.017V21.9577H36.5786V24.4958H29.2046V10.5022Z"
          className="fill-black dark:fill-white"
        />
        <path
          d="M42.6151 13.7948C45.8734 13.7948 47.6912 15.9556 47.6912 19.3854C47.6912 19.5912 47.6912 19.7969 47.6569 20.0027H40.2828C40.3514 21.4089 41.4489 22.4036 42.9923 22.4036C44.3986 22.4036 45.2217 21.5804 45.5304 21.1346L47.3482 22.5065C46.9366 23.261 45.5304 24.8044 42.958 24.8044C39.5968 24.8044 37.4704 22.4722 37.4704 19.3511C37.4704 16.1614 39.6311 13.7948 42.6151 13.7948ZM44.8787 18.1849C44.8101 16.9159 43.8841 16.0585 42.6494 16.0585C41.346 16.0585 40.5229 16.9845 40.3857 18.1849H44.8787Z"
          className="fill-black dark:fill-white"
        />
        <path
          d="M49.2346 10.0563H52.0127V18.4593L55.3739 14.0691H58.4607L54.7908 18.8023L58.7351 24.53H55.4768L51.9784 19.1109V24.53H49.2003V10.0563H49.2346Z"
          className="fill-black dark:fill-white"
        />
        <path
          d="M59.867 10.0563H62.6451V18.4593L66.0063 14.0691H69.0931L65.4232 18.8023L69.3675 24.53H66.1092L62.6108 19.1109V24.53H59.8327V10.0563H59.867Z"
          className="fill-black dark:fill-white"
        />
        <path
          d="M73.9977 17.8077C75.061 17.8077 75.8841 18.1163 76.2614 18.3907V17.7048C76.2614 16.7787 75.5754 16.1614 74.375 16.1614C73.3461 16.1614 72.3857 16.5043 71.5969 16.9159L70.5679 15.0295C71.494 14.3779 73.106 13.7948 74.6837 13.7948C78.0449 13.7948 79.0395 15.544 79.0395 17.9106V24.5301H76.5701L76.3986 23.8441C75.8498 24.4272 75.061 24.7701 73.8605 24.7701C71.7341 24.7701 69.9506 23.4668 69.9506 21.2718C69.9163 19.2139 71.5283 17.8077 73.9977 17.8077ZM74.5122 22.6437C75.5411 22.6437 76.33 22.0949 76.33 21.2032C76.33 20.2771 75.5754 19.7283 74.5122 19.7283C73.449 19.7283 72.6944 20.3457 72.6944 21.2032C72.6944 22.0606 73.449 22.6437 74.5122 22.6437Z"
          className="fill-black dark:fill-white"
        />
        <path
          d="M11.0227 21.0909V0L0.113632 10.9091V31.6364L11.0227 21.0909Z"
          className="fill-[#4643DD] dark:fill-white"
        />
        <path
          d="M11.0227 21.0909H22.3864C22.9386 21.0909 23.3864 21.5387 23.3864 22.0909V31C23.3864 31.5523 22.9386 32 22.3864 32H11.0227V21.0909Z"
          className="fill-[#07E0B7] dark:fill-white"
        />
      </g>
      <defs>
        <clipPath id="clip0_12_149">
          <rect
            width="79.2727"
            height="32"
            fill="white"
            transform="translate(0.113632)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LekkaLogo;
