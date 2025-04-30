import { simpleDetailPageTopNavigation } from "./examples";

export type ExampleType = {
  title?: string;
  description?: string;
  layout?: JSX.Element;
};

export type Category = {
  title: string;
  slug: string;
  description: string;
  examples: ExampleType[];
  preview?: {
    light: URL;
    dark: URL;
  };
};
export type Topic = {
  title: string;
  description: string;
  categories: Category[];
  slug: string;
};
export type LibraryData = Topic[];

export const libraryData: LibraryData = [
  {
    title: "Application UI",
    slug: "application",
    description:
      "I think there are really only a few pages that you are building over time. This are the ones I created so you do not need to reinvent them again.",
    categories: [
      {
        title: "Detail pages",
        slug: "detail-pages",
        description:
          "I think there are really only a few pages that you are building over time. This are the ones I created so you do not need to reinvent them again.",
        examples: [simpleDetailPageTopNavigation],
      },
      { title: "Dashboard", description: "", slug: "dashboards", examples: [] },
    ],
  },
  {
    title: "Famous examples",
    description:
      "I think there are really only a few pages that you are building over time. This are the ones I created so you do not need to reinvent them again.",
    slug: "famous",
    categories: [
      {
        title: "Social networks",
        slug: "social-networks",
        description: "Facebook, Twitter, Instagram, Linkedin, etc.",
        examples: [],
      },
    ],
  },
];
