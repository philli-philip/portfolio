type Props = {
    height?: number;
    width?: number;
    strokeWeight?: number;
  };
  
  const Menu = (props: Props) => {
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
        <path d="M3 12H21M3 6H21M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  };
  
  export default Menu;
  