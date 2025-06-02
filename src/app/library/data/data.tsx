import {
  sidebarLayoutWithHeader,
  simpleDetailPageTopNavigation,
  twoColumnLayoutWithHeader,
  oldFacebook,
} from "./examples";
import { twitterLayoutExample } from "./twitter-examples";

export type ExampleType = {
  title?: string;
  description?: string;
  layout: {
    area?: JSX.Element;
    layout?: JSX.Element;
  };
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
        preview: {
          light: new URL(
            "/public/library/thumbnail/application/detail-page-light.png",
            import.meta.url
          ),
          dark: new URL(
            "/public/library/thumbnail/application/detail-page-dark.png",
            import.meta.url
          ),
        },
        description:
          "I think there are really only a few pages that you are building over time. This are the ones I created so you do not need to reinvent them again.",
        examples: [
          simpleDetailPageTopNavigation,
          twoColumnLayoutWithHeader,
          sidebarLayoutWithHeader,
        ],
      },
      {
        title: "Feed",
        description: "",
        slug: "feeds",
        examples: [twitterLayoutExample, oldFacebook],
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
        examples: [twitterLayoutExample, oldFacebook],
      },
    ],
  },
];
