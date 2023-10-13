import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Head from "next/head";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { getYear, parseJSON } from "date-fns";
import sanityClient from "../../utils/sanity-client";
import { useRouter } from "next/router";
import NavBar from "../../components/navBar";

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

  const all: Category[] = [{ _id: "0", slug: "all", title: "All Projects" }];
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
  const [currentFilter, setCurrentFilter] = useState(
    router.query.project || "all"
  );

  useEffect(() => {
    const { project } = router.query;
    project && setCurrentFilter(project);
  }, [router.query]);

  const filteredPosts = posts.filter((post) => {
    if (currentFilter === "all") {
      return true;
    } else {
      return post.categories.some(
        (category) => category.current === currentFilter
      );
    }
  });

  return (
    <>
      <Head>
        <title>Projects - Philip Mattha</title>
      </Head>
      <NavBar current="/projects" />
      <main className="container mx-auto">
        <div className="overflow-auto pt-8 scrollbar-hide md:pt-32">
          <div className="whitespace-nowrap pl-4 pr-16 md:pl-0">
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
              <div className="bottom-16 ml-4 mt-2 sm:absolute sm:bottom-6 sm:left-6 sm:hidden sm:group-hover:block">
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
