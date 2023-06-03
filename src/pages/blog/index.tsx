import { sanityClient, imageUrl } from "../../utils/sanity-client";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { format } from "date-fns";
import Footer from "../../components/Footer";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Article = {
  title: string;
  slug: string;
  publishedAt: string;
  imageURL?: string;
  categories: Category[];
};

type Slug = {
  current: string;
  title: string;
  _id: string;
};

type Category = {
  title: string;
  _id: string;
  slug: Slug;
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
        "categories" :categories[] ->{slug, title, _id},
      } 
      | order(publishedAt desc)
    `
  );

  const all: Category[] = [
    {
      _id: "0",
      title: "All",
      slug: { current: "all", title: "All", _id: "0" },
    },
  ];
  const categories = all.concat(
    await sanityClient.fetch(
      `
      *[_type == "article-category"]{
        title,
        slug,
        _id,
      }
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
  const router = useRouter();
  const [currentFilter, setCurrentFilter] = useState(router.query.f || "all");

  useEffect(() => {
    const { f } = router.query;
    f && setCurrentFilter(f);
  }, [router.query.f]);

  const filteredBlog = articles.filter((item) => {
    if (currentFilter === "all") {
      return true;
    } else {
      return item.categories.some(
        (category) => category.slug.current === currentFilter
      );
    }
  });

  return (
    <>
      <Head>
        <title>Thoughts and writings</title>
      </Head>
      <main className="container relative mx-auto mt-8 md:mt-16">
        <Link
          href="/"
          className="ml-6 mr-2 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-100 md:ml-0"
        >
          Home
        </Link>
        <h1 className="inline text-gray-700 dark:text-gray-300 md:mb-2">
          Blog
        </h1>
        <div className="overflow-auto [@media(max-width:767px)]:scrollbar-hide">
          <div className="whitespace-nowrap pl-6 pr-16 sm:pl-8 md:pl-0">
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={(e) => {
                  router
                    .push("?f=" + item.slug.current, undefined, {
                      shallow: true,
                    })
                    .then(() => {
                      setCurrentFilter(item.slug.current);
                    })
                    .catch((err) => console.error(err));
                }}
                className={`my-2 py-2 pr-4 text-2xl font-bold md:py-0 md:pr-6 md:text-5xl ${
                  item.slug.current === currentFilter
                    ? "text-gray-900 dark:text-gray-50"
                    : `text-gray-400 dark:text-gray-400`
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <ul className="mt-1 md:columns-3">
          {filteredBlog.map((article, index) => {
            return (
              <li
                key={index}
                className="relative flex break-inside-avoid flex-row  items-center rounded bg-gradient-to-br from-transparent to-transparent mix-blend-luminosity  backdrop-saturate-100 duration-500 hover:backdrop-saturate-200 dark:hover:from-orange-900 dark:hover:to-orange-900 md:-ml-6 md:hover:shadow-xl "
              >
                <Link
                  href={"blog/" + article.slug}
                  className="w-full px-6 py-4 md:px-0 md:py-8"
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
                  <div className="ml-0 md:mx-6">
                    <h2 className="block text-2xl font-semibold text-gray-600 mix-blend-luminosity dark:text-gray-300 md:mb-4 lg:text-2xl">
                      {article.title}
                    </h2>
                    <span className="text-sm text-gray-500">
                      <p className="mr-2 md:inline">
                        Published:{" "}
                        {format(Date.parse(article.publishedAt), "dd MMM yyyy")}
                      </p>
                      {article.categories.map((category, index) => {
                        return (
                          <span className="mr-2 " key={index}>
                            #{category.title}
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
        <div className="absolute -top-8 left-1/4 -z-[1] aspect-square h-[240px] rounded-full bg-gradient-radial from-orange-500 to-70% opacity-30 dark:opacity-30 md:h-[1200px]"></div>
      </main>
    </>
  );
};

export default Blog;
