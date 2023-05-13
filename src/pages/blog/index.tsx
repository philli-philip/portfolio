import { sanityClient, imageUrl } from "../../utils/sanity-client";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { format } from "date-fns";
import Footer from "../../components/Footer";
import { useState } from "react";
import Head from "next/head";

type Article = {
  title: string;
  slug: string;
  publishedAt: string;
  imageURL?: string;
  categories: string[];
};

type Category = {
  title: string;
  _id: string;
};

export const getStaticProps: GetStaticProps<{
  articles: Article[];
  categories: Category[];
}> = async () => {
  const articles: Article[] = await sanityClient.fetch(
    `
      *[_type == "article"]
      {
        _id,
        "slug" : slug.current,
        title,
        publishedAt,
        "imageURL" : image.asset->url,
        "categories" :categories[] ->title,
      } 
      | order(publishedAt desc)
    `
  );

  const all: Category[] = [{ _id: "0", title: "All" }];
  const categories = all.concat(
    await sanityClient.fetch(
      `
      *[_type == "article-category"]
    `
    )
  );
  return {
    props: {
      articles,
      categories,
    },
    revalidate: 10,
  };
};

const Blog = ({
  articles,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currentFilter, setCurrentFilter] = useState("All");
  return (
    <>
      <Head>
        <title>Thoughts and writings</title>
      </Head>
      <main className="container relative mx-auto mt-8 md:mt-16">
        <Link
          href="/"
          className="mr-2 ml-6 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-100 md:ml-0"
        >
          Home
        </Link>
        <h1 className="inline text-gray-700 dark:text-gray-300 md:mb-2">
          Blog
        </h1>
        <div className="overflow-auto [@media(max-width:767px)]:scrollbar-hide">
          <div className="whitespace-nowrap pl-8 pr-16 md:pl-0">
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={(e) => {
                  setCurrentFilter(item.title);
                  console.log(e);
                }}
                className={`my-2 py-2 pr-4 text-2xl font-bold md:py-0 md:pr-6 md:text-5xl ${
                  item.title === currentFilter
                    ? "text-gray-900 dark:text-gray-50"
                    : `text-gray-400 dark:text-gray-400`
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <ul className="mt-1">
          {articles
            .filter((article) => {
              if (currentFilter === "All") {
                return articles;
              } else {
                let found = 0;
                article.categories.map((category) => {
                  if (category === currentFilter) {
                    found = 1;
                  }
                });
                if (found == 1) {
                  return article;
                }
              }
            })
            .map((article, index) => {
              return (
                <li key={index}>
                  <Link
                    href={"blog/" + article.slug}
                    className="relative flex flex-row items-center rounded bg-gradient-to-br from-transparent to-transparent py-4 px-6 mix-blend-luminosity backdrop-saturate-100 duration-500 hover:from-orange-50 hover:to-orange-100 hover:shadow-xl hover:backdrop-saturate-200 dark:hover:from-orange-900 dark:hover:to-orange-900 md:-ml-8 md:p-8 md:px-0"
                  >
                    {article.imageURL && (
                      <figure className="hidden w-[66px] mix-blend-normal md:visible md:ml-6 md:w-24">
                        <img
                          src={imageUrl(article.imageURL)
                            .width(108)
                            .height(72)
                            .dpr(3)
                            .fit("crop")
                            .url()}
                          alt=""
                        />
                      </figure>
                    )}
                    <div className="ml-0 md:ml-6">
                      <h2 className="block text-2xl font-semibold text-gray-600 mix-blend-luminosity dark:text-gray-300 md:mb-4 lg:text-4xl">
                        {article.title}
                      </h2>
                      <span className="text-sm text-gray-500">
                        <p className="mr-2 md:inline">
                          Published:{" "}
                          {format(
                            Date.parse(article.publishedAt),
                            "dd MMM yyyy"
                          )}
                        </p>
                        {article.categories.map((category, index) => {
                          return (
                            <span className="mr-2 " key={index}>
                              #{category}
                            </span>
                          );
                        })}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
        <Footer className="not-prose" />
        <div className="absolute -top-8 left-1/4 -z-[1] aspect-square h-[80%] rounded-full bg-gradient-radial from-orange-500 via-transparent opacity-30 dark:opacity-30"></div>
      </main>
    </>
  );
};

export default Blog;
