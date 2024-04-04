"use client";

import Table from "./Table";
import List from "./List";
import MuiGrid from "./MuiGrid";

export const buttonStyle = "hover:bg-gray-200 p-2 rounded-md";

export default function Page() {
  return (
    <main className="relative h-screen w-screen gap-y-12">
      <Table />
      <MuiGrid />
      <List />
    </main>
  );
}
