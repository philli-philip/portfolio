import NavBar from "../../components/navBar";
import Footer from "../../components/Footer";
import Filter from "./settings";
import List from "./list";
import FilterBar from "./filterBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philip Mattha | Code snippets",
  description:
    "Past and current coding projects to refine my understanding of how the web works.",
};

export default function Page() {
  return (
    <>
      <NavBar current="/code" />
      <main className="min-h-screen">
        <section className="mx-auto max-w-4xl pt-20 md:pt-32 lg:pt-48">
          <h1 className="px-4 text-3xl font-bold text-gray-800 dark:text-gray-200 md:px-8">
            Code
          </h1>
          <p className="px-4 pb-2 pt-2 font-light text-gray-600 dark:text-gray-400 md:px-8 md:pb-4 lg:pb-8">
            Past and current coding projects to refine my understanding of how
            the web works.
          </p>
          <div className="flex flex-row  justify-between px-4 py-2 md:px-8">
            <FilterBar />
            <Filter />
          </div>
          <List />
        </section>
      </main>
      <Footer className="max-w-4xl" />
    </>
  );
}
