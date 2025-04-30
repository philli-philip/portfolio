import { Block } from "../components/ExampleComponents";
import { ExampleType } from "./data";

export const twitterLayoutExample: ExampleType = {
  title: "Twitter",
  description:
    "A recreation of a common social media layout, featuring sidebars and a main content feed.",
  layout: {
    layout: (
      <div className="flex h-[600px] w-full flex-row justify-center bg-white @container/twitter dark:bg-black">
        {/* Left Sidebar */}
        <div className="hidden h-full w-[240px] flex-col items-end border-r border-gray-200 px-4 py-4 @xl/twitter:flex dark:border-gray-800">
          <div className="flex h-full w-full flex-col justify-between">
            <div className="flex flex-col items-start gap-2">
              {/* Logo Placeholder */}
              <div className="mb-2 h-8 w-8 rounded-full bg-blue-400 dark:bg-blue-500" />
              {/* Nav Items Placeholders */}
              <div className="h-6 w-24 rounded-full bg-gray-200 @lg/twitter:w-32 dark:bg-gray-700" />
              <div className="h-6 w-24 rounded-full bg-gray-200 @lg/twitter:w-32 dark:bg-gray-700" />
              <div className="h-6 w-24 rounded-full bg-gray-200 @lg/twitter:w-32 dark:bg-gray-700" />
              <div className="h-6 w-24 rounded-full bg-gray-200 @lg/twitter:w-32 dark:bg-gray-700" />
              {/* Tweet Button Placeholder */}
              <div className="mt-4 h-10 w-10 rounded-full bg-blue-400 @lg/twitter:w-full dark:bg-blue-500" />
            </div>
            {/* Profile Placeholder */}
            <div className="h-10 w-10 rounded-full bg-gray-300 @lg/twitter:w-full dark:bg-gray-600" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex h-full max-w-lg grow flex-col border-r border-gray-200 dark:border-gray-800">
          {/* Header */}
          <div className="flex h-14 items-center border-b border-gray-200 px-4 dark:border-gray-800">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Home
            </span>
          </div>
          {/* Tweet Input Area */}
          <div className="flex h-28 items-center border-b border-gray-200 p-4 dark:border-gray-800">
            <div className="h-12 w-12 flex-shrink-0 rounded-full bg-gray-300 dark:bg-gray-600" />
            <div className="ml-4 h-8 grow rounded-full bg-gray-100 dark:bg-gray-900" />
          </div>
          {/* Feed Placeholder */}
          <div className="grow overflow-y-auto p-4">
            <div className="mb-4 h-32 rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950" />
            <div className="mb-4 h-32 rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950" />
            <div className="h-32 rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950" />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden h-full w-[300px] flex-col gap-4 p-4 @[900px]/twitter:flex">
          {/* Search Bar Placeholder */}
          <div className="h-10 w-full rounded-full bg-gray-100 dark:bg-gray-800" />
          {/* What's Happening Placeholder */}
          <div className="h-48 w-full rounded-lg bg-gray-100 dark:bg-gray-800" />
          {/* Who to Follow Placeholder */}
          <div className="h-64 w-full rounded-lg bg-gray-100 dark:bg-gray-800" />
        </div>
      </div>
    ),
    area: (
      <div className="flex h-[600px] flex-row justify-center @container">
        <Block
          color="green"
          name="Left Sidebar"
          className="hidden w-[240px] border-r border-gray-200 @xl:flex dark:border-gray-600"
        />
        <Block
          color="blue"
          name="Main Content"
          className="max-w-lg grow border-r border-gray-200 dark:border-gray-600"
        />
        <Block
          color="yellow"
          name="Right Sidebar"
          className="hidden w-[300px] @[900px]:flex"
        />
      </div>
    ),
  },
};
