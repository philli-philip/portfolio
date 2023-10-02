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
  {
    label: "Code",
    key: "C",
    target: "/code",
  },
];

export default function ShortCuts() {
  const router = useRouter();

  useHotkeys("b", () => void router.push("/blog"));
  useHotkeys("a", () => void router.push("/about"));
  useHotkeys("p", () => void router.push("/projects"));
  useHotkeys("c", () => void router.push("/code"));
  return (
    <div className="col-span-12 mt-4 flex flex-row flex-wrap items-start">
      {shortCuts.map((item, index) => (
        <Link
          key={index}
          className="mb-4 mr-4 rounded border border-gray-200 px-4 py-4 shadow-md hover:bg-gray-50 hover:text-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200 xl:mb-0 xl:mr-8"
          href={item.target}
        >
          {item.label}
          <KeyBoardButton className="ml-6">{item.key}</KeyBoardButton>
        </Link>
      ))}
    </div>
  );
}
