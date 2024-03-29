import type { GetStaticPaths, GetStaticProps } from "next";
import sanityClient from "../../utils/sanity-client";
import type { ParsedUrlQuery } from "querystring";
import PortableText from "react-portable-text";
import type { TypedObject } from "sanity";
import Footer from "../../components/Footer";
import Head from "next/head";
import Link from "next/link";
import { format } from "date-fns";
import NavBar from "../../components/navBar";
import LeftArrow from "../../components/icons/left-arrow";

type Article = {
  title: string;
  body: TypedObject[];
  _id: string;
  updatedAt: string;
  categories: Category[];
};

type Category = {
  title: string;
  slug: string;
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = await sanityClient.fetch(
    `*[_type == "article" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug = "0e326dce-111a-4637-9c52-b8a92e09501c" } =
    context.params as Params;
  const article: Article[] = await sanityClient.fetch(
    `
        *[_type == "article" && slug.current == $slug][0]
        {
          "updatedAt" : _updatedAt,
          title,
          body[]{
            ...,
            asset -> {
              ...,
            }
          },
          slug,
          _id,
          "categories" :categories[] ->{title, 'slug' : slug.current},
        }
        `,
    { slug }
  );
  return {
    props: {
      article,
    },
    revalidate: 10,
  };
};

export default function Article({ article }: { article: Article }) {
  return (
    <>
      <NavBar current="/blog" />
      <main className="relative mx-6 mt-8 md:mx-auto md:mt-24 md:max-w-[696px] lg:mt-56 xl:max-w-[936px]">
        <Head>
          <title>{article?.title}</title>
        </Head>
        <Link
          href="/blog"
          className="mb-8 inline-block rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-700 transition-colors duration-150 hover:bg-gray-300 dark:border-t dark:border-gray-200/20 dark:bg-gray-800 dark:text-gray-200 dark:shadow-sm dark:shadow-black/20 dark:hover:bg-white/5 dark:hover:shadow-xl"
        >
          <span className=" flex flex-1 items-center justify-start gap-x-2">
            <LeftArrow width={16} height={16} />
            Back
          </span>
        </Link>
        <article>
          <h1 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 md:mb-6 md:text-4xl lg:text-5xl">
            {article?.title}
          </h1>
          <span className="mb-6 block text-lg font-light text-gray-500">
            <span className="mr-2">
              {article?.updatedAt &&
                "Updated on " +
                  format(Date.parse(article.updatedAt), "dd MMM yyy")}
            </span>
            <span>
              {article?.categories?.map((category, index) => {
                return (
                  <span className="mr-2 " key={index}>
                    <Link
                      href={"/blog?f=" + category.slug}
                      className="hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      #{category.title}
                    </Link>
                  </span>
                );
              })}
            </span>
          </span>

          {article?.body && (
            <PortableText
              className="prose prose-lg dark:prose-invert lg:prose-xl xl:prose-xl prose-headings:font-semibold prose-headings:text-gray-800 prose-p:font-light prose-p:text-gray-600 prose-a:font-light prose-a:text-current hover:prose-a:text-gray-900 prose-ul:pl-0 prose-li:ml-6 prose-li:pl-4 prose-li:font-light dark:prose-headings:text-gray-200 dark:prose-p:text-gray-300 dark:hover:prose-a:text-gray-100"
              content={article?.body}
              serializers={{
                li: ({ children }: { children: JSX.Element }) => (
                  <li className="ml-8">{children}</li>
                ),
                h1: ({ children }: { children: JSX.Element }) => (
                  <h1 className="text-2xl font-bold">{children}</h1>
                ),
                h3: ({ children }: { children: JSX.Element }) => (
                  <h3 className="font-bold">{children}</h3>
                ),
                bold: ({ children }: { children: JSX.Element }) => (
                  <strong className="text-bold">{children}</strong>
                ),
              }}
            />
          )}
        </article>
      </main>
      <Footer className="md:max-w-[696px] xl:max-w-[936px]" />
    </>
  );
}
