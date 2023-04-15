import { sanityClient, imageUrl } from "../../utils/sanity-client";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { format, parseJSON } from "date-fns";
import Footer from "../../components/Footer";

type Article = {
  title: string;
  slug: string;
  publishedAt: Date;
  imageURL?: string;
};

export const getStaticProps: GetStaticProps<{
  articles: Article[];
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
      } 
      | order(publishedAt desc)
    `
  );

  return {
    props: {
      articles,
    },
    revalidate: 10,
  };
};

const Blog = ({ articles }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <main className="mx-auto mt-8 max-w-[696px] md:mt-16 xl:max-w-[936px]">
        <Link
          href="/"
          className="mr-2 ml-6 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-100 md:ml-0"
        >
          Home
        </Link>
        <h1 className="inline text-gray-700 dark:text-gray-300 md:mb-2">
          Blog
        </h1>
        <ul className="mt-2">
          {articles.map((article, index) => {
            return (
              <li key={index}>
                <Link
                  href={"blog/" + article.slug}
                  className="relative flex flex-row items-center border border-transparent py-4 px-6 hover:border-gray-200 md:-ml-6 md:px-0"
                >
                  {article.imageURL && (
                    <figure className="w-[66px] md:ml-6 md:w-24">
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
                  <div className="ml-6">
                    <h2 className="block text-xl font-semibold text-gray-700 dark:text-gray-300 md:mb-1">
                      {article.title}
                    </h2>
                    <p className="hidden text-sm text-gray-500 md:block">
                      Published:{" "}
                      {article.publishedAt &&
                        format(parseJSON(article.publishedAt), "dd MMM yyyy")}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <Footer className="not-prose" />
      </main>
    </>
  );
};

export default Blog;
