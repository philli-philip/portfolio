import LeftArrow from "./icons/left-arrow";


const items = [
    {
      label: "Intro",
      key: "I",
      target: "/"  
    },
    {
      label: "Blog",
      key: "B",
      target: "/blog",
    },
    {
      label: "Past projects",
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
    backButton?: boolean
  }

  const NavBar= (props:Props) => {
    const back = props.backButton || false

    return(
        <nav className="relative">
            <div className="fixed inset-x-0 top-12 flex flex-1 md:justify-center">
            <ul className="flex bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm dark:border-0 dark:border-t dark:border-gray-600 rounded-2xl border-gray-100border shadow-md">
            {back && <li><button className="relative block hover:text-orange-600 text-gray-700 text-sm dark:text-gray-200 px-6 border-red-700 divide-x divide py-2"><LeftArrow width={20} height={20}/></button></li>}
            {items.map((item, index) =>
                <li key={index}>
                    <a href={item.target} className="relative block hover:text-orange-600 text-gray-700 text-sm dark:text-gray-200 px-6 border-red-700 divide-x divide py-2">{item.label}</a>
                </li>)}
            </ul>
            </div>
        </nav>
    )
  }

  export default NavBar