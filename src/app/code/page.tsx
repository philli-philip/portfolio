import NavBar from "../../components/navBar";
import Footer from "../../components/Footer";
import Filter from "./settings";
import List from "./list";
import FilterBar from "./filterBar";

export default function Page() {
  return (
    <body className=" bg-gray-100 dark:bg-gray-900">
      <NavBar current="/code" />
      <main className="min-h-screen">
        <section className="mx-auto max-w-4xl pt-48">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            Code
          </h1>
          <p className="font-light text-gray-600 dark:text-gray-400">
            Past and current coding projects to refine my understanding of how
            the web works.
          </p>
          <div className="flex flex-row  justify-between py-2">
            <FilterBar />
            <Filter />
          </div>
          <List />
        </section>
      </main>
      <Footer className="max-w-4xl" />
    </body>
  );
}
