"use client";
import Link from "next/link";
import { libraryData, Topic } from "../data";
import { usePathname } from "next/navigation";
import { Url } from "next/dist/shared/lib/router/router";
import { cn } from "../../../utils/cn";

export default function Navigation() {
  return (
    <div className="flex flex-col items-end">
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
        active ? "text-orange-500" : "text-gray-700 dark:text-gray-400",
        "block text-right",
        className
      )}
    >
      {children}
    </Link>
  );
};

const Sections = () => {
  return (
    <div>
      <MenuItem href={"/library"}>Introduction</MenuItem>

      {libraryData.map((area) => {
        return (
          <div className="flex flex-col items-end gap-2">
            <MenuItem
              href={`/library/${area.slug}`}
              key={area.slug}
              className="pt-4"
            >
              {area.title}
            </MenuItem>
            <Section key={area.slug} area={area} />
          </div>
        );
      })}
    </div>
  );
};

const Section = ({ area }: { area: Topic }) => {
  return (
    <>
      {area.categories.map((topic) => (
        <MenuItem
          href={`/library/${area.slug}/${topic.slug}`}
          key={topic.title}
          className="border-r border-gray-700 pr-4"
        >
          {topic.title}
        </MenuItem>
      ))}
    </>
  );
};
