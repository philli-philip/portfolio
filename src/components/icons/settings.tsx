type Props = {
    height?: number;
    width?: number;
    strokeWeight?: number;
  };
  
  const Settings = (props: Props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 12 12"
        height={props.height || 24}
        width={props.width || 24}
        strokeWidth={props.strokeWeight || 1}
        stroke="currentColor"
      >
          <path d="M1.5 4L7.5 4M7.5 4C7.5 4.82843 8.17157 5.5 9 5.5C9.82843 5.5 10.5 4.82843 10.5 4C10.5 3.17157 9.82843 2.5 9 2.5C8.17157 2.5 7.5 3.17157 7.5 4ZM4.5 8L10.5 8M4.5 8C4.5 8.82843 3.82843 9.5 3 9.5C2.17157 9.5 1.5 8.82843 1.5 8C1.5 7.17157 2.17157 6.5 3 6.5C3.82843 6.5 4.5 7.17157 4.5 8Z"/>
      </svg>
    );
  };
  
  export default Settings;
  