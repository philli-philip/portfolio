import { useState } from "react";
import Menu from "./icons/menu";

const items = [
    {
      label: "Intro",
      key: "I",
      target: "/"  
    },
    {
      label: "Writing",
      key: "B",
      target: "/blog",
    },
    {
      label: "Projects",
      key: "P",
      target: "/projects",
    },
    {
      label: "About",
      key: "C",
      target: "/about",
    },
  ];

  type Props = {
    backButton?: boolean,
    current?: string
  }


  const NavBar = (props:Props):JSX.Element => {
    const current = props.current || undefined

    const  [open, setOpen] = useState(false);

    function isCurrent(item:string){
      if(item === current) {
        return "page"
      }
      return false;
    }

    return(
        <nav className="fixed w-full z-10 print:hidden top-0">
            <div className="absolute mx-4 inset-x-0 top-12 flex flex-1 justify-end md:justify-center">
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 bg-white/90 rounded-full shadow-md hover:bg-gray-100"><Menu/></button>
            <ul className="absolute -right-2 top-12 md:top-0 md:right-0 md:relative mx-4 flex-col md:flex-row flex bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm dark:border-0 dark:border-t dark:border-gray-600 rounded-2xl shadow-md">
            {items.map((item, index) =>
                <li key={index}>
                    <a href={item.target} className={`relative block hover:text-orange-600 text-gray-700 text-sm dark:text-gray-200 px-6 py-2 transition ${open?"block":"hidden md:block"} ${isCurrent(item.target)?"text-orange-600":""}`}>{item.label}</a>
                </li>)}
            </ul>
            </div>
        </nav>
    )
  }

  export default NavBar