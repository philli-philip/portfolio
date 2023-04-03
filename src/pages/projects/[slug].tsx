import { GetStaticPaths, GetStaticProps } from "next";
import sanityClient from "../../utils/sanity-client";
import { ParsedUrlQuery } from "querystring";

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
    <>
      <h1>article: {post?.title}</h1>
      <p>route: {post?.slug?.current}</p>
    </>
  );
};

export default Post;
