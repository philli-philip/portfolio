import { GetStaticPaths, GetStaticProps } from "next";
import sanityClient from "../../utils/sanity-client";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import RightArrow from "../../components/icons/right-arrow";
import LeftArrow from "../../components/icons/left-arrow";

type Post = {
  body?: [];
  title?: string;
  slug: {
    current: string;
  };
  id: string;
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug = "0e326dce-111a-4637-9c52-b8a92e09501c" } =
    context.params as Params;
  const post: any = await sanityClient.fetch(
    `
      *[_type == "post" && slug.current == $slug][0]
      {
          title,
          body,
          slug,
          _id
      }
      `,
    { slug }
  );
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

const Post = ({ post }: { post: Post }) => {
  return (
    <article className="container mx-auto">
      <h1>article: {post?.title}</h1>
      <p>route: {post?.slug?.current}</p>
      <div className="flex flex-row ">
        <Link
          href={"/"}
          className="group relative w-1/2 overflow-hidden border-t border-b border-l border-gray-200 px-6 py-6"
        >
          <div className="flex flex-row">
            <span className="mr-0 w-0 opacity-0 duration-75 group-hover:mr-2 group-hover:w-4 group-hover:opacity-100">
              <LeftArrow width={16} strokeWeight={3} />
            </span>
            <h4 className="inline font-semibold text-gray-700">
              Previous Projects
            </h4>
          </div>
          <p className="text-sm text-gray-500">How to teach junior designer?</p>
          <span className=" animate-random-walk-fast absolute -z-10 aspect-square h-32 rounded-full bg-gradient-to-br from-green-300 to-green-400 opacity-0 blur-lg duration-500 group-hover:opacity-80"></span>
        </Link>
        <Link
          href={"/"}
          className="group relative w-1/2 overflow-hidden border border-gray-200 px-6 py-6"
        >
          <div className="flex flex-row justify-end">
            <h4 className="inline text-right font-semibold text-gray-700">
              Next Projects
            </h4>
            <span className="ml-0 w-0 opacity-0 duration-75 group-hover:ml-2 group-hover:w-4 group-hover:opacity-100">
              <RightArrow width={16} strokeWeight={3} />
            </span>
          </div>
          <p className="text-right text-sm text-gray-500">
            How to teach junior designer?
          </p>
          <span className=" animate-random-walk-fast absolute -z-10 aspect-square h-32 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 opacity-0 blur-lg duration-500 group-hover:opacity-80"></span>
        </Link>
      </div>
    </article>
  );
};

export default Post;
