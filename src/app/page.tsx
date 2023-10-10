import { Metadata, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import ReoLogo from "../components/icons/reo";
import Creatext from "../components/icons/creatext";
import UbsLogo from "../components/icons/ubs";
import SpokeLogo from "../components/icons/spoke";
import N26Logo from "../components/icons/n26";
import LekkaLogo from "../components/icons/lekka";
import FortoLogo from "../components/icons/forto";
import DeutscheBankLogo from "../components/icons/deutscheBank";
import NavBar from "../components/navBar";
import ShortCuts from "../components/shortCuts";
import NewProject from "../components/newProject";

const brands = [
  {
    alt: "Deutsche Bank",
    src: <DeutscheBankLogo width={40} height={40} />,
  },
  {
    alt: "REO",
    src: <ReoLogo width={85} height={32} />,
  },
  {
    alt: "UBS",
    src: <UbsLogo width={66} height={32} />,
  },
  {
    alt: "Spoke",
    src: <SpokeLogo height={24} width={72} />,
  },
  {
    alt: "N26",
    src: <N26Logo width={46} height={31} />,
  },
  {
    alt: "Forto",
    src: <FortoLogo width={82} height={20} />,
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

export const metadata: Metadata = {
  title: "Portfolio of Philip Mattha",
  description:
    "Philip Mattha is a Digital Product Designer with a focus technology.",
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar current="/" />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <section className="container mb-24 mt-24 grid max-w-6xl grid-cols-12 gap-6 px-8 lg:px-0 xl:mx-auto xl:mb-48 xl:mt-48">
          <h1 className="text-grey-600 xl:col-start-0 col-span-12 text-4xl font-bold tracking-tight dark:text-gray-200 md:col-span-10 md:text-4xl lg:text-5xl xl:col-span-12 xl:mx-0 xl:max-w-4xl xl:text-6xl xl:leading-[1.1]">
            I am{" "}
            <Link
              href="/about"
              className=" text-green-600 hover:underline dark:text-green-400"
            >
              Philip Mattha
            </Link>
            , currently Product Design Lead at{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Deutsche Bank
            </span>
            . Explore my{" "}
            <Link
              className="text-purple-600 hover:underline dark:text-purple-400"
              href="/projects"
            >
              past projects
            </Link>
            ,{" "}
            <Link
              href="/code"
              className="font-mono font-semibold text-lime-600 hover:underline dark:text-lime-400"
            >
              code
            </Link>{" "}
            and{" "}
            <Link
              href={"/blog"}
              className="font-serif italic text-orange-600 hover:underline dark:text-orange-400"
            >
              writings
            </Link>
            .
          </h1>
          <ShortCuts />
        </section>
        <NewProject />
        <section className="container max-w-6xl px-8 md:px-0">
          <div className="lg:grid-cols-5xl mx-auto grid grid-cols-2 place-items-center border-l border-t border-gray-200 dark:border-gray-700 md:grid-cols-4">
            {brands.map((item, index) => (
              <div
                key={index}
                className="flex aspect-square w-full flex-grow place-items-center justify-center border-b border-r border-gray-200 backdrop-blur-lg dark:border-gray-700"
              >
                {item.src}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer className="max-w-6xl" />
    </>
  );
};

export default Home;
