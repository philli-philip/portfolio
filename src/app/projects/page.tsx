import NavBar from "../../components/navBar";
import Footer from "../../components/Footer";
import {
  Bergaffe,
  Grip,
  Planner,
  PlasticWaste,
  ThreeJS,
  TradingApp,
  Designladder,
} from "./projects";
import FilterBar from "./filterBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects of Philip Mattha",
  description: "Some of the important projects I worked on.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const filter = (await searchParams).cat ?? "";

  return (
    <>
      <NavBar current="/projects" />
      <main className="mx-auto max-w-3xl px-6 pt-32 md:px-0">
        <FilterBar filter={filter} />
        <div className="relative flex flex-col gap-6 md:grid md:grid-cols-2">
          <Planner active={filter} />
          <TradingApp active={filter} />
          <Designladder active={filter} />
          <ThreeJS active={filter} />
          <PlasticWaste active={filter} />
          <Grip active={filter} />
          <Bergaffe active={filter} />
        </div>
        <Footer />
      </main>
    </>
  );
}
