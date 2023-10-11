import { sanityClient, imageUrl } from "../../utils/sanity-client";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { format } from "date-fns";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import NavBar from "../../components/navBar";

type Article = {
  title: string;
  slug: string;
  updatedAt: string;
  imageURL?: string;
  categories: Category[];
  excerpt: string;
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
        "updatedAt": _updatedAt,
        "imageURL" : image.asset->url,
        "categories" :categories[] ->{slug, title, _id},
        "excerpt": array::join(string::split((pt::text(body)), "")[0..96], "") + "...",
      } 
      | order(updatedAt desc)
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
  }, [router.query]);

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
      <NavBar current="/blog" />
      <main className="container relative max-w-4xl pt-24 md:pt-16 lg:mx-auto lg:pt-32">
        <h1 className="mx-6 pb-4 text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-200 lg:mx-0">
          Writing
        </h1>
        <h2 className="mx-6 mb-8 font-normal text-gray-700 dark:text-gray-300 lg:mx-0 lg:mb-12">
          This is not a typical blog. I revise and refine my thoughts from time
          to time. So the time an article was updated last is more important
          than its publishing date.
        </h2>
        <div className="mx-6 whitespace-nowrap sm:pl-8 md:pl-0 lg:mx-0">
          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                router
                  .push("?f=" + item.slug.current, undefined, {
                    shallow: true,
                  })
                  .then(() => {
                    setCurrentFilter(item.slug.current);
                  })
                  .catch((err) => console.error(err));
              }}
              className={`mr-4 text-lg font-semibold md:mr-6 md:py-0 ${
                item.slug.current === currentFilter
                  ? "border-b-2 border-b-orange-500 text-gray-900 dark:text-gray-50"
                  : `border-b-2 border-b-transparent text-gray-400 dark:text-gray-400`
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <ul className="mx-6 lg:mx-0">
          {filteredBlog.map((article, index) => {
            return (
              <li
                key={index}
                className="items-center rounded duration-500 hover:bg-gray-400/20 md:-mx-6"
              >
                <Link href={"blog/" + article.slug}>
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
                  <div className="ml-0 flex flex-col gap-2 py-4 pr-2 md:mx-6 md:flex-row md:px-0 md:py-6">
                    <p className="mr-2 text-sm leading-8 text-gray-500 md:inline">
                      {format(Date.parse(article.updatedAt), "dd MMM yyyy")}
                    </p>
                    <span>
                      <h2 className="block text-xl font-semibold text-gray-700 mix-blend-luminosity dark:text-gray-200 md:mb-2 md:text-lg lg:text-2xl">
                        {article.title}
                      </h2>
                      <p className="text-ellipsis text-sm text-gray-500">
                        {article.excerpt}
                      </p>
                      <span className="text-sm text-gray-500">
                        {article.categories.map((category, index) => {
                          return (
                            <span className="mr-2 " key={index}>
                              #{category.title}
                            </span>
                          );
                        })}
                      </span>
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer className="max-w-4xl" />
    </>
  );
};

export default Blog;
