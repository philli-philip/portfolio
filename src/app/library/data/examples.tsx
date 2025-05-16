import { Block } from "../components/ExampleComponents";
import Button from "../components/layoutElements/Button";
import Skeleton from "../components/layoutElements/Skeleton";
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
            <Button color="primary" className="w-28" />
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
              <div className="flex space-x-4">
                <Button color="neutral" />
                <Button color="primary" className="w-24" />
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
            <Skeleton className="w-24" />
            <Skeleton className="w-32" />
            <Skeleton className="w-20" />
          </div>
        </div>
      </div>
    ),
    area: (
      <div className="flex flex-col">
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
        <div className="mx-auto flex w-full max-w-4xl grow flex-row">
          <Block
            color="blue"
            name="Primary content"
            className="h-[404px] grow border-r border-gray-200 dark:border-gray-600"
          />
          <Block
            color="undefined" // Using 'undefined' for the secondary content area
            name="Secondary content"
            className="h-[404px] w-1/3 flex-shrink-0"
          />
        </div>
      </div>
    ),
  },
};

export const sidebarLayoutWithHeader: ExampleType = {
  title: "Sidebar Layout with Header",
  description:
    "A layout featuring a fixed sidebar on the left and a main content area with a header on the right.",
  layout: {
    layout: (
      <div className="flex h-[480px] w-full @container/main">
        <div className="flex h-full w-48 flex-col space-y-4 border-r border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
          <Skeleton className="h-4 w-10 rounded-full pb-4" />
          <Skeleton className="h-2 w-3/4" />
          <Skeleton className="h-2 w-full" />
          <Skeleton className="h-2 w-full" />
          <Skeleton className="h-2 w-2/3" />
          <Skeleton className="h-2 w-full" />
          <Skeleton className="h-2 w-1/2" />
        </div>

        <div className="flex flex-grow flex-col">
          <div className="flex items-center justify-between px-4 pt-4">
            <span className="text-xl font-semibold leading-none dark:text-white">
              Heading
            </span>
            <Button color="primary" className="w-24"></Button>
          </div>
          <div className="flex-grow p-4">
            <div className="h-full rounded-lg border border-gray-200 bg-white dark:border-gray-600" />
          </div>
        </div>
      </div>
    ),
    area: (
      <div className="flex h-[480px] w-full">
        <Block
          color="green"
          name="Navigation"
          className="h-full w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-600"
        />
        <div className="flex flex-grow flex-col ">
          <Block
            color="yellow"
            name="Title area"
            className="h-16 flex-shrink-0 border-b border-gray-200 dark:border-gray-600"
          />
          <Block
            color="blue"
            name="Primary content"
            className="h-full flex-grow"
          />
        </div>
      </div>
    ),
  },
};

export const oldFacebook: ExampleType = {
  title: "Facebook (2014)",
  description:
    "The classic Facebook layout with a fixed navigation bar and a main content area with centered feed and two helper bars.",
  layout: {
    layout: (
      <div className="flex h-[480px] w-full flex-col bg-gray-200 @container/main">
        {/* Navigation Bar */}
        <div className="flex h-12 w-full flex-shrink-0 items-center justify-center bg-[#4267B1]"></div>
        {/* Content Area */}
        <div className="mx-auto flex w-full max-w-4xl flex-grow gap-2 px-4">
          {/* Left Secondary Content */}
          <div className="hidden w-[160px] flex-col gap-4 pt-4 @lg:flex">
            <Skeleton className="h-3 w-[50%]" />
            <Skeleton className="h-3 w-[65%]" />
            <Skeleton className="h-3 w-[80%]" />
            <Skeleton className="h-3 w-[50%]" />
            <Skeleton className="h-3 w-[40%]" />
            <Skeleton className="h-3 w-[75%]" />
            <Skeleton className="h-3 w-[80%]" />
          </div>
          {/* Primary Content */}
          <div className="flex grow flex-col items-start justify-start gap-2 pt-2">
            <div className="h-24 w-full rounded bg-white"></div>
            <div className="flex h-56 w-full flex-row gap-2 rounded bg-white p-2 pt-8">
              <div className="h-full grow rounded-lg bg-gray-200" />
              <div className="h-full grow rounded-lg bg-gray-200" />
              <div className="h-full grow rounded-lg bg-gray-200" />
              <div className="h-full grow rounded-lg bg-gray-200" />
            </div>
            <div className="flex h-48 w-full flex-row gap-4 rounded bg-white p-2 py-4">
              <div className="size-8 rounded-full bg-gray-200" />
              <div className="grow rounded-lg bg-gray-200" />
            </div>
          </div>
          {/* Right Secondary Content */}
          <div className="hidden w-1/4 flex-col gap-2 pt-2 @2xl:flex">
            <div className="h-48 w-full rounded bg-white" />
            <div className="h-48 w-full rounded bg-white" />
          </div>
        </div>
      </div>
    ),
    area: (
      <div className="flex h-[480px] w-full flex-col @container">
        <Block
          color="green"
          name="Navigation"
          className="h-12 flex-shrink-0 border-b border-gray-200 dark:border-gray-600"
        />
        <div className="mx-auto flex w-full max-w-4xl flex-grow">
          <Block
            color="blue"
            name="Secondary content"
            className="hidden h-full w-[160px] border-r border-gray-200 @lg:flex dark:border-gray-600"
          />
          <Block
            color="yellow"
            name="Primary content"
            className="h-full grow border-r border-gray-200 dark:border-gray-600"
          />
          <Block
            color="blue"
            name="Secondary content"
            className="hidden h-full @2xl:flex"
          />
        </div>
      </div>
    ),
  },
};
