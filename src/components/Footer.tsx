import Link from "next/link";
type Props = {
  className?: String;
};

const Footer = (props: Props) => {
  return (
    <footer
      className={`mx-8 mb-16 mt-8 flex flex-col gap-6 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:container  dark:border-gray-600 dark:text-gray-400 sm:mx-auto sm:flex-row md:mb-16 md:mt-12 ${props.className}`}
    >
      <Link
        href={"/about"}
        className=" hover:text-gray-700 focus:text-gray-200 focus:underline focus:outline-none dark:hover:text-gray-200 sm:mr-auto"
      >
        Made in Berlin
      </Link>
      <span>
        See website{" "}
        <Link
          className="font-semibold hover:text-gray-700 dark:hover:text-gray-200"
          href={"https://github.com/philli-philip/portfolio"}
        >
          on Github
        </Link>{" "}
        or{" "}
        <Link
          className="font-semibold hover:text-gray-700 dark:hover:text-gray-200"
          href={
            "https://www.figma.com/file/52gMlCyh7Ow6RS7H2xqBIP/Philip-Portfolio?node-id=0%3A1&t=2qExAbU5fJkML9S8-1"
          }
        >
          on Figma
        </Link>
        .
      </span>
      <Link
        className="hover:text-gray-700 dark:hover:text-gray-200"
        href={"/impressum"}
      >
        Impressm
      </Link>
    </footer>
  );
};

export default Footer;
