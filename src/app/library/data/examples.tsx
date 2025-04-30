import { Block } from "../components/ExampleComponents";
import { ExampleType } from "./data";

export const simpleDetailPageTopNavigation: ExampleType = {
  title: "Simple detail page",
  description:
    "This is the super simple starter. It can then later be extended by adding multiple columns or tabs as you see in other examples.",
  layout: {
    layout: (
      <div className="flex flex-col items-center @container">
        <div className="h-12 w-full bg-gray-300 dark:bg-gray-700" />
        <div className="h-16 w-full ">
          <div className="mx-auto flex h-full max-w-4xl grow flex-row items-center justify-between px-4 @md:px-6">
            <span className="text-2xl font-light leading-none dark:text-white">
              Page title
            </span>
            <div className="h-8 w-20 rounded bg-orange-500" />
          </div>
        </div>
        <div className="mx-auto w-full max-w-4xl px-0 @md:px-6">
          <div className="mb-6 h-[360px] border-y border-gray-200 bg-white @md:rounded-xl @md:border dark:border-gray-700 dark:bg-gray-600" />
        </div>
      </div>
    ),
    area: (
      <div className="mx-auto flex flex-col ">
        <Block
          color="green"
          name="Navigation"
          className="f-full h-12 border-b border-gray-200 dark:border-gray-600"
        />
        <Block
          color="yellow"
          name="Title"
          className="h-16 w-full max-w-4xl grow self-center border-b border-gray-200 dark:border-gray-600"
        />
        <Block
          color="blue"
          name="Main content"
          className="h-[384px] w-full max-w-4xl grow self-center"
        />
      </div>
    ),
  },
};

export const twoColumnLayoutWithHeader: ExampleType = {
  title: "Two-column layout with header",
  description:
    "A common layout featuring a header section spanning the top and a two-column content area below.",
  layout: {
    layout: (
      <div className="flex flex-col items-center @container/main">
        <div className="h-12 w-full bg-gray-300 dark:bg-gray-700" />
        <div className="w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="mx-auto max-w-4xl px-4 pt-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                Heading
              </span>
              <div className="flex space-x-2">
                <div className="h-8 w-20 rounded bg-gray-200 dark:bg-gray-600" />
                <div className="h-8 w-20 rounded bg-orange-500" />
              </div>
            </div>
            {/* Tabs */}
            <div className="flex space-x-4 ">
              <span className="border-b-2 border-orange-500 px-1 pb-2 text-sm font-medium text-orange-600 dark:text-orange-400">
                Tab 1
              </span>
              <span className="px-1 pb-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                Tab 2
              </span>
              <span className="px-1 pb-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                Tab 3
              </span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-0 py-6 @md/main:flex-row @md/main:px-6">
          <div className="h-[360px] w-full border-y border-gray-200 bg-white @md/main:w-2/3 @md/main:rounded-xl @md/main:border dark:border-gray-700 dark:bg-gray-800" />
          <div className="flex h-[360px] grow flex-col gap-6 px-4 pt-8">
            <div className="h-3 w-24 rounded-full bg-gray-300" />
            <div className="h-3 w-32 rounded-full bg-gray-300" />
            <div className="h-3 w-20 rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    ),
    area: (
      <div className="flex h-[480px] flex-col">
        {/* Header Section */}
        <Block
          color="green"
          name="Nav"
          className="h-12 flex-shrink-0 border-b border-gray-200 dark:border-gray-600"
        />
        <Block
          color="yellow"
          name="Title area"
          className="h-16 flex-shrink-0 border-b border-gray-200 dark:border-gray-600"
        />
        <Block
          color="green"
          name="Sub-navigation"
          className="h-10 flex-shrink-0 border-b border-gray-200 dark:border-gray-600"
        />
        {/* Content Section */}
        <div className="flex grow flex-row">
          <Block
            color="blue"
            name="Primary content"
            className="grow border-r border-gray-200 dark:border-gray-600"
          />
          <Block
            color="undefined" // Using 'undefined' for the secondary content area
            name="Secondary content"
            className="w-1/3 flex-shrink-0"
          />
        </div>
      </div>
    ),
  },
};
