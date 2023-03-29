import Link from "next/link";
import { useState } from "react";
import Footer from "../../components/Footer";
import Head from "next/head";
import Image from "next/image";
import LeftArrow from "../../components/icons/left-arrow";
import Router from "next/router";
import { createClient } from "next-sanity";

const Category = ["product", "industrial", "code"] as const;
type Category = (typeof Category)[number];

const filters: { filter: Category | ""; label: string }[] = [
  { filter: "", label: "All" },
  { filter: "product", label: "Product Design" },
  { filter: "industrial", label: "Industrial Design" },
  { filter: "code", label: "Code" },
];

type Item = {
  title?: string;
  image: string;
  category: Category;
  year: number;
  link: string;
  imageAlt?: string;
};

const items: Item[] = [
  {
    title: "Industrial Project",
    image: "/img/example.png",
    category: "industrial",
    year: 2022,
    link: "/industrial_project",
  },
  {
    title: "Product Project",
    image: "/img/example.png",
    category: "product",
    year: 2010,
    link: "/product_project",
  },
  {
    title: "Code Project",
    image: "/img/example.png",
    category: "code",
    year: 2012,
    link: "/product_project",
  },
  {
    title: "Code Project",
    image: "/img/example.png",
    category: "code",
    year: 2012,
    link: "/product_project",
  },
  {
    title: "Code Project",
    image: "/img/example.png",
    category: "code",
    year: 2012,
    link: "/product_project",
  },
  {
    title: "Code Project",
    image: "/img/example.png",
    category: "code",
    year: 2012,
    link: "/product_project",
  },
  {
    title: "Code Project",
    image: "/img/example.png",
    category: "code",
    year: 2012,
    link: "/product_project",
  },
  {
    title: "Code Project",
    image: "/img/example.png",
    category: "code",
    year: 2012,
    link: "/product_project",
  },
];

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false,
});

export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"]`);
  return {
    props: {
      posts,
    },
  };
}

const Projects = ({ posts }) => {
  const [currentFilter, setCurrentFilter] = useState("");
  console.log(posts);
  return (
    <>
      <Head>
        <title>Projects - Philip Mattha</title>
      </Head>
      <main className="container mx-auto">
        <div className="dark:text-gray-3200 relative ml-8 mt-10 text-lg text-gray-700 md:mt-24 md:ml-0">
          <Link
            href="/"
            className=" absolute hidden rounded-lg bg-gray-800 p-2 text-white shadow-lg hover:bg-gray-900 focus-visible:outline-orange-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 md:block md:translate-y-[40px] md:-translate-x-12 lg:-translate-x-16 lg:translate-y-[36px] lg:p-3 xl:translate-y-[36px]"
          >
            <LeftArrow />
          </Link>
          <Link
            href="/"
            className="mr-1 -ml-1 inline hidden rounded p-1 text-gray-400 hover:bg-gray-100"
          >
            Home
          </Link>
          <span className="hidden pr-2 text-gray-400"></span>
          <h1 className="inline">Projects</h1>
        </div>
        <div className=" overflow-auto [@media(max-width:767px)]:scrollbar-hide">
          <div className="whitespace-nowrap pl-8 pr-16 md:pl-0">
            {filters.map((item, index) => (
              <button
                key={index}
                onClick={(e) => {
                  setCurrentFilter(item.filter);
                  console.log(e);
                }}
                className={`my-2 py-2 pr-4 text-2xl font-bold md:mb-16 md:py-0 md:pr-6 md:text-5xl ${
                  item.filter === currentFilter
                    ? "text-gray-900 dark:text-gray-50"
                    : `text-gray-400 dark:text-gray-400`
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="gap-6 md:columns-2 lg:columns-3">
          {items
            .filter((item) => {
              if (currentFilter === "") {
                return items;
              }
              return item.category == currentFilter;
            })
            .sort((a, b) => (a.year < b.year ? 1 : -1))
            .map((item, index) => (
              <Link
                key={index}
                href={`/projects${item.link}`}
                className="group relative mb-6 block"
              >
                <div className="relative aspect-video flex-grow">
                  <Image
                    fill
                    style={{ objectFit: "cover" }}
                    src={item.image}
                    alt={item.imageAlt ? item.imageAlt : ""}
                    priority
                  />
                </div>
                <div className="bottom-16 ml-2 mt-2 md:absolute md:bottom-6 md:left-6 md:hidden md:group-hover:block">
                  <h3 className="inline text-clip text-lg text-white mix-blend-exclusion md:block">
                    {item.title}
                  </h3>
                  <p className="ml-4 inline text-gray-400 mix-blend-exclusion md:ml-0">
                    {item.year}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
