type Example = {
  title?: string;
  description?: string;
  layout?: JSX.Element;
};

type Category = {
  title: string;
  slug: string;
  description: string;
  examples: Example[];
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
          "The login page is the first page you see when you open the app.",
        examples: [],
      },
      { title: "Dashboard", description: "", slug: "dashboards", examples: [] },
    ],
  },
  {
    title: "Famous examples",
    description: "",
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
