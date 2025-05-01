"use client";
import Example from "../../components/Example";
import { libraryData } from "../../data/data";

interface Props {
  params: {
    topic: string;
    category: string;
  };
}
export const revalidate = 60 * 60 * 24 * 365;

export default function CategoryPage({ params }: Props) {
  const { category, topic } = params;
  const topicData = libraryData.filter((item) => item.slug === topic)[0];
  if (!topicData) return null;
  const areaData = topicData.categories.filter(
    (item) => item.slug === category
  )[0];

  return (
    <>
      <h1 className="pb-4 text-6xl font-extralight dark:text-gray-200">
        {areaData?.title}
      </h1>
      <p className="w-full max-w-[60ch] text-balance pb-12 text-gray-700 dark:text-gray-300">
        {areaData?.description}
      </p>
      {areaData?.examples?.map((example, index) => (
        <Example key={index} example={example} />
      ))}
    </>
  );
}
