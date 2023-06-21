import type { GetStaticProps } from "next";
import sanityClient from "../utils/sanity-client";
import PortableText from "react-portable-text";
import type { TypedObject } from "sanity";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import LeftArrow from "../components/icons/left-arrow";

type Imprint = {
  title: string;
  body: TypedObject[];
};

export const getStaticProps: GetStaticProps = async () => {
  const imprint: Imprint = await sanityClient.fetch(
    `
        *[_type == "oneOff" && slug.current == "impressum"][0]
        {
          title,
          body,
        }
        `
  );
  return {
    props: {
      imprint,
    },
    revalidate: 10,
  };
};

const Imprint = ({ imprint }: { imprint: Imprint }) => {
  return (
    <div className="mx-6 md:mx-auto md:mt-24 md:max-w-[696px] lg:mt-32 xl:max-w-[936px]">
      <Head>
        <title>{imprint?.title}</title>
      </Head>
      <article>
        <Link
          href="/"
          className=" absolute hidden rounded-lg bg-gray-800 p-2 text-white shadow-lg hover:bg-gray-900 focus-visible:outline-orange-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 md:block md:-translate-x-12 lg:-translate-x-16 lg:p-3"
        >
          <LeftArrow />
        </Link>
        <h1 className="mb-6 text-2xl font-semibold md:text-3xl lg:text-4xl">
          {imprint?.title}
        </h1>

        {imprint?.body && (
          <PortableText
            className="prose dark:prose-invert prose-headings:font-semibold prose-headings:text-gray-800 prose-p:font-light prose-p:text-gray-600 prose-a:font-normal prose-a:text-current hover:prose-a:text-gray-900 prose-ul:pl-0 prose-li:ml-6 prose-li:pl-4 prose-li:font-light dark:prose-headings:text-gray-200 dark:prose-p:text-gray-300 dark:hover:prose-a:text-gray-100"
            content={imprint?.body}
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
      <Footer/>
    </div>
  );
};

export default Imprint;
