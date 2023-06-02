import type { GetStaticPaths, GetStaticProps } from "next";
import sanityClient from "../../utils/sanity-client";
import type { ParsedUrlQuery } from "querystring";
import PortableText from "react-portable-text";
import type { TypedObject } from "sanity";
import Footer from "../../components/Footer";
import Head from "next/head";
import Link from "next/link";
import { format } from "date-fns";
import { type } from "os";

type Article = {
  title: string;
  body: TypedObject[];
  _id: string;
  publishedAt: string;
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
          publishedAt,
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

const Article = ({ article }: { article: Article }) => {
  return (
    <div className="mx-6 md:mx-auto md:mt-24 md:max-w-[696px] lg:mt-32 xl:max-w-[936px]">
      <Head>
        <title>{article?.title}</title>
      </Head>
      <nav className="mb-6">
        <Link
          href="/"
          className="mr-2 text-gray-500 hover:text-gray-800 dark:text-gray-200"
        >
          Home
        </Link>
        <Link href="/blog/" className="hover:text-gray-900">
          Blog
        </Link>
      </nav>
      <article className="">
        <h1 className="mb-6 text-3xl font-semibold md:text-4xl lg:text-5xl">
          {article?.title}
        </h1>
        <span className="mb-6 block text-lg font-light text-gray-500">
          <span className="mr-2">
            {article?.publishedAt &&
              "Published on: " +
                format(Date.parse(article.publishedAt), "dd MMM yyy")}
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
            className="prose prose-lg dark:prose-invert lg:prose-xl xl:prose-xl prose-headings:font-semibold prose-headings:text-gray-800 prose-p:font-light prose-p:text-gray-600 prose-a:font-normal prose-a:text-current hover:prose-a:text-gray-900 prose-ul:pl-0 prose-li:ml-6 prose-li:pl-4 prose-li:font-light dark:prose-headings:text-gray-200 dark:prose-p:text-gray-300 dark:hover:prose-a:text-gray-100"
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
      <Footer className="not-prose max-w-[696px]" />
    </div>
  );
};

export default Article;
