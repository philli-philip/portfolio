"use client";
import Link from "next/link";
import { libraryData, Topic } from "../data/data";
import { usePathname } from "next/navigation";
import { Url } from "next/dist/shared/lib/router/router";
import { cn } from "../../../utils/cn";

export default function Navigation() {
  return (
    <div className="sticky top-12 flex flex-col items-end self-start pt-12">
      <Sections />
    </div>
  );
}

const MenuItem = ({
  href,
  children,
  className,
}: {
  href: Url;
  children: JSX.Element | string;
  className?: string;
}) => {
  const activePage = usePathname();
  const active = activePage === href;
  return (
    <Link
      href={href}
      className={cn(
        active
          ? "text-orange-500 after:bg-orange-300 dark:text-orange-400"
          : "text-gray-700 after:bg-gray-300 dark:text-gray-400 dark:after:bg-gray-700",
        "relative block text-right",
        className
      )}
    >
      {children}
    </Link>
  );
};

const Sections = () => {
  return (
    <>
      <MenuItem href={"/library"}>Introduction</MenuItem>
      {libraryData.map((area) => {
        return (
          <div key={area.slug} className="flex flex-col items-end gap-2">
            <MenuItem href={`/library/${area.slug}`} className="pt-4">
              {area.title}
            </MenuItem>
            <Section key={area.slug} area={area} />
          </div>
        );
      })}
    </>
  );
};

const Section = ({ area }: { area: Topic }) => {
  return (
    <>
      {area.categories.map((topic) => (
        <MenuItem
          href={`/library/${area.slug}/${topic.slug}`}
          key={topic.title}
          className="pr-3 after:absolute after:right-0 after:top-1 after:block after:h-4 after:w-[1px]"
        >
          {topic.title}
        </MenuItem>
      ))}
    </>
  );
};
