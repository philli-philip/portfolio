"use client";

import { useSearchParams } from "next/navigation";
import NavBar from "../../components/navBar";
import Footer from "../../components/Footer";
import {
  Bergaffe,
  Powerbank,
  Grip,
  Planner,
  PlasticWaste,
  ThreeJS,
  TradingApp,
} from "./projects";
import FilterBar from "./filterBar";

export default function Page() {
  const filter = useSearchParams()?.get("cat") ?? "";

  return (
    <>
      <NavBar current="/projects" />
      <main className="mx-auto max-w-3xl px-6 pt-32 md:px-0">
        <FilterBar filter={filter} />
        <div className="relative flex flex-col gap-6 md:grid md:grid-cols-2">
          <Planner active={filter} />
          <TradingApp active={filter} />
          <Powerbank active={filter} />
          <ThreeJS active={filter} />
          <PlasticWaste active={filter} />
          <Bergaffe active={filter} />
          <Grip active={filter} />
        </div>
        <Footer />
      </main>
    </>
  );
}
