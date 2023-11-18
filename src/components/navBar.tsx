"use client";

import { useState } from "react";
import Menu from "./icons/menu";

const items = [
  {
    label: "Intro",
    key: "I",
    target: "/",
  },
  {
    label: "Writing",
    key: "B",
    target: "/blog",
  },
  {
    label: "Code",
    key: "C",
    target: "/code",
  },
  {
    label: "Projects",
    key: "P",
    target: "/projects",
  },
  {
    label: "About",
    key: "A",
    target: "/about",
  },
];

type Props = {
  backButton?: boolean;
  current?: string;
};

const NavBar = (props: Props): JSX.Element => {
  const current = props.current || undefined;

  const [open, setOpen] = useState(false);

  function isCurrent(item: string) {
    if (item === current) {
      return "page";
    }
    return false;
  }

  return (
    <nav className="fixed top-0 z-10 w-full print:hidden">
      <div className="absolute inset-x-0 top-8 mx-4 flex flex-1 justify-end md:justify-center">
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border-t bg-white/90 p-3 shadow-md hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800/90 dark:text-gray-300 dark:hover:bg-gray-600 md:hidden"
        >
          <Menu />
        </button>
        <ul className="absolute -right-2 top-14 mx-4 flex flex-col overflow-hidden rounded-2xl bg-white/90 shadow-md backdrop-blur-sm dark:border-0 dark:border-t dark:border-gray-600 dark:bg-gray-800/90 md:relative md:right-0 md:top-0 md:flex-row">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.target}
                className={`relative block bg-gradient-radial-at-b via-transparent via-80% px-6 py-2 text-sm transition hover:from-orange-400/10 hover:text-orange-600 ${
                  open ? "block" : "hidden md:block"
                } ${
                  isCurrent(item.target)
                    ? "from-orange-400/20 text-orange-600 dark:text-orange-400"
                    : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
export { items as navItems };
