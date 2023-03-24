import Link from "next/link";
import { useState } from "react";
import Footer from "../../components/Footer";

type Category = "product" | "industrial";

const filters: { filter: Category | ""; label: string }[] = [
  { filter: "", label: "All" },
  { filter: "product", label: "Product Design" },
  { filter: "industrial", label: "Industrial Design" },
];

type Item = {
  title?: string;
  image: string;
  category: Category;
  year: number;
  link: string;
};

const items: Item[] = [
  {
    title: "Industrial Project",
    image: "/img/project1.png",
    category: "industrial",
    year: 2022,
    link: "/industrial_project",
  },
  {
    title: "Product Project",
    image: "/img/project1.png",
    category: "product",
    year: 2010,
    link: "/product_project",
  },
];

const Projects = () => {
  const [currentFilter, setCurrentFilter] = useState("");
  return (
    <>
      <main className="container mx-auto">
        <h1>Projects</h1>
        <div>
          {filters.map((item, index) => (
            <button
              onClick={(e) => {
                setCurrentFilter(item.filter);
                console.log(e);
              }}
              className="pr-4"
            >
              {item.label}
            </button>
          ))}
        </div>
        Current Filter: {currentFilter}
        <div>
          {items
            .filter((item) => {
              if (currentFilter === "") {
                return items;
              }
              return item.category == currentFilter;
            })
            .sort((a, b) => (a.year < b.year ? 1 : -1))
            .map((item) => (
              <Link href={`/projects${item.link}`}>
                <h3 className="text-gray-800 dark:text-gray-200">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{item.year}</p>
              </Link>
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
