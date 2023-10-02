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
import RightArrow from "../components/icons/right-arrow";
import ShortCuts from "../components/shortCuts";

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
            , currently Product Designer Lead at{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Deutsche Bank
            </span>
            . Explore my{" "}
            <Link
              className="text-purple-600 hover:underline dark:text-purple-400"
              href="/projects"
            >
              projects
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
        <section className="px container pb-12 md:px-0 md:pb-48">
          <div className="relative mx-4 flex max-w-6xl flex-col justify-start overflow-hidden rounded-3xl bg-gray-100 px-8 py-8 dark:bg-black/5 md:mx-auto md:px-12 md:py-8">
            <h3 className="block text-sm font-medium uppercase text-black/60  dark:text-white/60">
              New project
            </h3>
            <span className="mt-3 block text-4xl font-bold tracking-tight text-black/80 dark:text-white/80 md:text-5xl">
              PowerBank
            </span>
            <p className="mt-2 text-xl text-black/60 dark:text-white/60">
              The reference experience for corporate banking
            </p>
            <Link
              className="z-10 -ml-2 mt-6 flex flex-row items-center gap-x-2 self-start rounded-full bg-black/5 px-4 py-2 text-black/80 backdrop-saturate-200 duration-75 hover:bg-black/10 hover:backdrop-saturate-200 dark:text-white/80 md:absolute md:bottom-8 md:right-12"
              href="https://powerbank.vercel.app?rel=portfolio-mattha"
            >
              Check out
              <RightArrow />
            </Link>
            <div className="absolute -top-[320px] left-1/4 h-[500px] w-[500px] animate-random-walk-fast rounded-full bg-gradient-radial from-orange-500/30 to-60%" />
            <div className="absolute -bottom-32 -left-16 h-[300px] w-[300px] animate-random-walk-fast rounded-full bg-gradient-radial from-blue-400/30 to-60%" />
            <div className="absolute -bottom-[350px] -right-[200px] h-[600px] w-[600px] animate-random-walk-fast rounded-full bg-gradient-radial from-green-400/30 to-60%" />
          </div>
        </section>
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
      <Footer />
    </>
  );
};

export default Home;
