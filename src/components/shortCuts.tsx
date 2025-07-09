"use client";

import { useRouter } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";
import KeyBoardButton from "../components/KeyBoardButton";
import Link from "next/link";

const shortCuts = [
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
    key: "A",
    target: "/about",
  },
];

export default function ShortCuts() {
  const router = useRouter();

  useHotkeys("b", () => void router.push("/blog"));
  useHotkeys("a", () => void router.push("/about"));
  useHotkeys("p", () => void router.push("/projects"));
  return (
    <div className="col-span-12 mt-4 flex flex-row flex-wrap items-start">
      {shortCuts.map((item, index) => (
        <Link
          key={index}
          className="mb-4 mr-4 rounded border border-gray-200 px-4 py-4 shadow-md duration-150 hover:bg-gray-50 hover:text-gray-800 xl:mb-0 xl:mr-8 dark:border-0  dark:border-t dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300  dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:hover:shadow-lg"
          href={item.target}
        >
          {item.label}
          <KeyBoardButton className="ml-6">{item.key}</KeyBoardButton>
        </Link>
      ))}
    </div>
  );
}
