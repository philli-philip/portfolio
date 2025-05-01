"use client";
import Link from "next/link";
import { libraryData } from "../data/data";

interface Props {
  params: {
    topic: string;
  };
}

export const revalidate = 60 * 60 * 24 * 365;

export default function TopicPage({ params }: Props) {
  const { topic } = params;
  const topicData = libraryData.filter((item) => item.slug === topic)[0];

  console.log(topicData?.description);
  console.log(topic);
  console.log(libraryData);

  return (
    <>
      <div className="pb-12">
        <h1 className="pb-10 text-6xl font-extralight dark:text-gray-200">
          {topicData?.title}
        </h1>
        <p className="max-w-[60ch] text-balance text-gray-700 dark:text-gray-300">
          {topicData?.description}
        </p>
      </div>
      <Grid topic={topic} />
    </>
  );
}

const Grid = ({ topic }: { topic: string }) => {
  const topicData = libraryData.filter((item) => item.slug === topic)[0];
  if (!topicData) return null;
  const categories = topicData.categories;
  return (
    <div className="border-gray-200md:grid-cols-2 grid grid-cols-2 gap-0 border lg:grid-cols-4">
      {categories.map((category) => {
        return (
          <Link
            href={`/library/${topic}/${category.slug}`}
            key={category.slug}
            className="flex flex-col border-r bg-white p-3 transition-colors duration-75 hover:bg-gray-100"
          >
            <div className="mb-3 aspect-video rounded-lg border border-gray-200 bg-gray-100"></div>
            <h2 className="pb-0.5 font-bold text-gray-900 dark:text-white">
              {category.title}
            </h2>
            <span className="font-mono text-sm text-gray-600 dark:text-gray-400">
              {category.examples.length} examples
            </span>
          </Link>
        );
      })}
    </div>
  );
};
