import Link from "next/link";
import { cn } from "../utils/cn";

const Footer = ({ className }: { className?: string }): JSX.Element => {
  return (
    <footer
      className={cn(
        "md:mp-16 mx-8 mt-8 flex flex-col gap-6 border-t border-gray-200 pb-16 pt-6 text-sm text-gray-500 dark:border-gray-600 dark:text-gray-400 sm:mx-auto sm:flex-row md:mt-12",
        className
      )}
    >
      <Link
        href={"/about"}
        className=" hover:text-gray-900 dark:hover:text-gray-200 sm:mr-auto"
      >
        Made in Berlin
      </Link>
      <span>
        See website{" "}
        <Link
          className="font-semibold hover:text-gray-900 dark:hover:text-gray-200"
          href={"https://github.com/philli-philip/portfolio"}
        >
          on Github
        </Link>{" "}
        or{" "}
        <Link
          className="font-semibold hover:text-gray-900 dark:hover:text-gray-200"
          href={
            "https://www.figma.com/file/52gMlCyh7Ow6RS7H2xqBIP/Philip-Portfolio?node-id=0%3A1&t=2qExAbU5fJkML9S8-1"
          }
        >
          on Figma
        </Link>
        .
      </span>
      <Link href={"https://dribbble.com/philipmattha"}>Dribbble</Link>
      <Link href={"https://www.linkedin.com/in/philip-mattha-87959672/"}>
        Linkedin
      </Link>
      <Link
        className="hover:text-gray-900 dark:hover:text-gray-200"
        href={"/impressum"}
      >
        Impressm
      </Link>
    </footer>
  );
};

export default Footer;
