export const revalidate = 60 * 60 * 24 * 365;

export default function Page() {
  return (
    <div>
      <h1 className="pb-4 text-6xl font-extralight dark:text-gray-200">
        Layouts
      </h1>
      <p className="w-full max-w-[60ch] text-balance pb-12 text-gray-700 dark:text-gray-300">
        Explore the repeating patterns and layouts used across software and
        particular the web. The focus is primarily productivity applications but
        you will also find marketing and content focused examples. This is by no
        means comprehensive and can help to find solution to unstuck you from
        your current project.
      </p>
    </div>
  );
}
