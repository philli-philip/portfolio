import Link from "next/link";
import { libraryData } from "./data/data";
export default function Page() {
  return (
    <>
      <div>
        <h1 className="pb-4 text-6xl font-extralight dark:text-gray-200">
          Layouts
        </h1>
        <p className="w-full max-w-[60ch] text-balance pb-12 text-gray-700 dark:text-gray-300">
          Explore the repeating patterns and layouts used across software and
          particular the web. The focus is primarily productivity applications
          but you will also find marketing and content focused examples. This is
          by no means comprehensive and can help to find solution to unstuck you
          from your current project.
        </p>
      </div>
      <div>
        {libraryData.map((topic) => (
          <div key={topic.slug}>
            <h2 className="pb-4 text-lg font-extralight dark:text-gray-200">
              {topic.title}
            </h2>
            <div className="mb-24 grid grid-cols-2 gap-0 border border-gray-200 md:grid-cols-2 lg:grid-cols-4 dark:border-gray-600">
              {topic.categories.map((category) => {
                return (
                  <Link
                    href={`/library/${topic.slug}/${category.slug}`}
                    key={category.slug}
                    className="flex flex-col border-r border-gray-200 bg-white p-3 transition-colors duration-75 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="mb-3 aspect-video rounded-lg border border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-600"></div>
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
          </div>
        ))}
      </div>
    </>
  );
}
