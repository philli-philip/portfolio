import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Head from "next/head";
import LeftArrow from "../../components/icons/left-arrow";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { getYear, parseJSON } from "date-fns";
import sanityClient from "../../utils/sanity-client";
import { useRouter } from "next/router";

type Item = {
  title?: string;
  imageURL: string;
  categories: Slug[];
  publishedAt: Date;
  slug: string;
  imageAlt?: string;
};

type Slug = {
  current: string;
  title: string;
  _id: string;
};

type Category = {
  title: string;
  _id: string;
  slug: string;
};

export const getStaticProps: GetStaticProps<{
  posts: Item[];
  categories: Category[];
}> = async () => {
  const posts: Item[] = await sanityClient.fetch(
    `
      *[_type == "post"]
      {
        _id,
        "slug" : slug.current,
        "imageURL" : mainImage.asset->url,
        "imageAlt" : mainImage.caption,
        title,
        publishedAt,
        "categories" :categories[] ->slug,
      } 
      | order(publishedAt desc)
    `
  );

  const all: Category[] = [{ _id: "0", slug: "all", title: "All" }];
  const categories = all.concat(
    await sanityClient.fetch(
      `
      *[_type == "category"]{
        "slug" : slug.current,
        title,
        _id
      }
    `
    )
  );

  return {
    props: {
      posts,
      categories,
    },
    revalidate: 10,
  };
};

const Projects = ({
  posts,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  console.log(router.query.project);
  const [currentFilter, setCurrentFilter] = useState(
    router.query.project || "all"
  );

  useEffect(() => {
    const { project } = router.query;
    project && setCurrentFilter(project);
  }, [router.query]);

  const filteredPosts = posts.filter((item) => {
    if (currentFilter === "all") {
      return true;
    } else {
      return item.categories.some(
        (category) => category.current === currentFilter
      );
    }
  });

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
            className="mr-1 -ml-1 hidden rounded p-1 text-gray-400 hover:bg-gray-100"
          >
            Home
          </Link>
          <span className="hidden pr-2 text-gray-400"></span>
          <h1 className="inline">Projects</h1>
        </div>
        <div className="overflow-auto [@media(max-width:767px)]:scrollbar-hide">
          <div className="whitespace-nowrap pl-8 pr-16 md:pl-0">
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  router
                    .push("?project=" + item.slug, undefined, {
                      shallow: true,
                    })
                    .then(() => {
                      setCurrentFilter(item.slug);
                    })
                    .catch((err) => console.error(err));
                }}
                className={`my-2 py-2 pr-4 text-2xl font-bold md:mb-16 md:py-0 md:pr-6 md:text-5xl ${
                  item.slug === currentFilter
                    ? "text-gray-900 dark:text-gray-50"
                    : `text-gray-400 dark:text-gray-400`
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap md:-mx-6">
          {filteredPosts.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="group relative mb-8 block aspect-video duration-75 sm:mb-0 sm:basis-1/2 sm:p-6 hover:sm:p-0 hover:sm:shadow-2xl lg:basis-1/3"
            >
              <img
                src={item.imageURL + "?w=980&fit=max"}
                alt={item.imageAlt && item.imageAlt}
                className="h-full w-full object-cover"
              />
              <div className="bottom-16 ml-2 mt-2 sm:absolute sm:bottom-6 sm:left-6 sm:hidden sm:group-hover:block">
                <h3 className="inline text-clip text-lg text-white mix-blend-exclusion sm:block">
                  {item.title}
                </h3>
                <p className="ml-4 inline text-gray-400 mix-blend-exclusion sm:ml-0">
                  {getYear(parseJSON(item.publishedAt))}
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
