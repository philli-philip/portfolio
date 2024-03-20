"use client";

import NavBar from "../../components/navBar";
import Footer from "../../components/Footer";
import Filter from "./settings";
import List from "./list";
import FilterBar from "./filterBar";
import React, { createContext, useContext, useReducer } from "react";

export type difficultyValue = string;
export type sortOptions = "id" | "name" | "date" | string;
export type statusOptions = "open" | "completed" | string;

export type Filter = {
  difficulty: difficultyValue | "all";
  sort: sortOptions;
  status: statusOptions | string;
};

export type actionDifficulty = {
  type: "filterDifficulty";
  value: difficultyValue | "all";
};

export type sortActions = {
  type: "changeSort";
  value: sortOptions;
};

export type filterStatus = {
  type: "filterStatus";
  value: statusOptions | "all";
};

function reducer(
  filter: Filter,
  action: actionDifficulty | sortActions | filterStatus
): Filter {
  switch (action.type) {
    case "filterDifficulty": {
      console.log(action.value);
      return { ...filter, difficulty: action.value };
    }
    case "changeSort": {
      console.log(action.value);
      return { ...filter, sort: action.value };
    }
    case "filterStatus": {
      console.log(action.value);
      return { ...filter, status: action.value };
    }
    default:
      return filter;
  }
}

type FilterContext = {
  filter: Filter;
  dispatch: React.Dispatch<actionDifficulty | sortActions | filterStatus>;
};

const FilterContext = createContext<FilterContext | null>(null);

export default function Page() {
  const [filter, dispatch] = useReducer(reducer, {
    difficulty: "all",
    sort: "id",
    status: "all",
  });

  return (
    <>
      <NavBar current="/code" />
      <main className="min-h-screen">
        <section className="mx-auto max-w-4xl pt-20 md:pt-32 lg:pt-48">
          <h1 className="px-4 text-3xl font-bold text-gray-800 md:px-8 dark:text-gray-200">
            Code
          </h1>
          <p className="px-4 pb-2 pt-2 font-light text-gray-600 md:px-8 md:pb-4 lg:pb-8 dark:text-gray-400">
            Past and current coding projects to refine my understanding of how
            the web works.
          </p>
          <FilterContext.Provider
            value={{
              filter,
              dispatch,
            }}
          >
            <div className="flex flex-row  justify-between px-4 py-2 md:px-8">
              <FilterBar />
              <Filter />
            </div>
            <List />
          </FilterContext.Provider>
        </section>
      </main>
      <Footer className="max-w-4xl" />
    </>
  );
}

export function useFilterContext() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("No context given");
  }
  return context;
}
