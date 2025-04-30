"use client";
import { libraryData } from "../data/data";

interface Props {
  params: {
    topic: string;
  };
}

export default function TopicPage({ params }: Props) {
  const { topic } = params;
  const topicData = libraryData.filter((item) => item.slug === topic)[0];

  console.log(topicData?.description);
  console.log(topic);
  console.log(libraryData);

  return (
    <div>
      <h1 className="pb-10 text-6xl font-extralight dark:text-gray-200">
        {topicData?.title}
      </h1>
      <p className="max-w-[60ch] text-balance text-gray-700 dark:text-gray-300">
        {topicData?.description}
      </p>
    </div>
  );
}
