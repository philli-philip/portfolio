import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import KeyBoardButton from "../components/KeyBoardButton";
import Image from "next/image";
import { useRouter } from "next/router";
import { useHotkeys } from "react-hotkeys-hook";
import Footer from "../components/Footer";
import ReoLogo from "../components/logo/reo";
import Creatext from "../components/logo/creatext";
import UbsLogo from "../components/logo/ubs";
import SpokeLogo from "../components/logo/spoke";
import N26Logo from "../components/logo/n26";
import LekkaLogo from "../components/logo/lekka";
import FortoLogo from "../components/logo/forto";

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
    key: "C",
    target: "/about",
  },
];

const brands = [
  {
    alt: "N26",
    src: <N26Logo width={46} height={31} />,
  },
  {
    alt: "UBS",
    src: <UbsLogo width={66} height={32} />,
  },
  {
    alt: "REO",
    src: <ReoLogo width={85} height={32} />,
  },
  {
    alt: "Forto",
    src: <FortoLogo width={82} height={20} />,
  },
  {
    alt: "Spoke",
    src: <SpokeLogo height={24} width={72} />,
  },
  {
    alt: "Lekka",
    src: <LekkaLogo height={32} width={79} />,
  },
  {
    alt: "Creatext",
    src: <Creatext width={90} height={32} />,
  },
];

const Home: NextPage = () => {
  const router = useRouter();

  useHotkeys("b", () => router.push("/blog"));
  useHotkeys("c", () => router.push("/about"));
  useHotkeys("p", () => router.push("/projects"));

  return (
    <>
      {" "}
      <Head>
        <title>Portfolio of Philip Mattha</title>
        <meta
          name="description"
          content="Philip Mattha is a Digital Product Designer with a focus technology."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <section className="container mt-24 mb-48 grid grid-cols-12 gap-6 px-8 xl:mx-auto xl:mt-48 xl:mb-96">
          <h1 className="leading-12 text-grey-600 xl:col-start-0 col-span-12 text-4xl font-semibold dark:text-gray-200 md:col-span-10 md:text-4xl lg:text-5xl xl:col-span-12 xl:mx-0 xl:text-8xl">
            I am{" "}
            <Link
              href="/about"
              className=" text-green-600 hover:underline dark:text-green-400"
            >
              Philip Mattha
            </Link>
            , currently Product Designer for{" "}
            <Link
              href="/current"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Deutsche Bank
            </Link>
            , learning to{" "}
            <Link
              className="font-mono text-purple-600 hover:underline dark:text-purple-400"
              href="/code"
            >
              implement
            </Link>{" "}
            my designs and{" "}
            <Link
              href={"/blog"}
              className="font-serif italic text-orange-600 hover:underline dark:text-orange-400"
            >
              writing
            </Link>{" "}
            about Design & Product.
          </h1>
          <div className=" xl:col-start-0 col-span-12 mt-4 flex flex-col items-start md:flex-row">
            {shortCuts.map((item, index) => (
              <Link
                key={index}
                className="mr-4 mb-4 rounded border border-gray-200 px-4 py-4 shadow-md hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 xl:mb-0 xl:mr-8"
                href={item.target}
              >
                {item.label}
                <KeyBoardButton className="ml-6">{item.key}</KeyBoardButton>
              </Link>
            ))}
          </div>
        </section>
        <section className="container px-8 md:px-0">
          <div className="lx:grid-cols-5 grid grid-cols-2 place-items-center border-t border-l border-gray-200 md:grid-cols-3 lg:grid-cols-4 xl:mx-auto">
            {brands.map((item, index) => (
              <div
                key={index}
                className="flex aspect-square w-full flex-grow place-items-center justify-center border-r border-b border-gray-200 backdrop-blur-lg"
              >
                {item.src}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
