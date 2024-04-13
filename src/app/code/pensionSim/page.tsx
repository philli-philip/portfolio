"use client";

import React, { createContext, useContext, useReducer } from "react";
import type { Task } from "../../../utils/types";
import Diagram from "./blocks/Diagram";
import PopulationSettings from "./blocks/PopulationSettings";
import type { Population } from "./types";

export const pensionSim: Task = {
  id: 10,
  name: "Pension Simulator",
  link: "/code/pensionSim",
  difficulty: "master",
  status: "open",
};

const defaultPopulation: Population = {
  year: 2024,
  startingPopulation: 1_000_000_000,
  menStartingAge: 19,
  menFinishAge: 20,
  menDistribution: [8, 7, 5, 5, 4, 3, 1, 0],
  womenStartingAge: 65,
  womenFinishAge: 67,
  womenDistribution: [8, 7, 5, 5, 4, 3, 1, 0],
  distributionName: "de",
};

type PopulationContext = {
  data: Population;
  dispatch: React.Dispatch<PopulationActions>;
};

type PopulationActions =
  | {
      type:
        | "setYear"
        | "setPopulation"
        | "setMenEnterWork"
        | "setMenLeaveWork"
        | "setWomenEnterWork"
        | "setWomenLeaveWork";
      value: number;
    }
  | { type: "setMenDistribution" | "setWomenDistribution"; value: number[] };

function reducer(
  population: Population,
  action: PopulationActions
): Population {
  switch (action.type) {
    case "setYear":
      return { ...population, year: action.value };
    case "setPopulation":
      return { ...population, startingPopulation: action.value };
    case "setMenEnterWork":
      return { ...population, menStartingAge: action.value };
    case "setMenLeaveWork":
      return { ...population, menFinishAge: action.value };
    case "setMenDistribution":
      return { ...population, menDistribution: action.value };
    case "setWomenEnterWork":
      return { ...population, womenStartingAge: action.value };
    case "setWomenLeaveWork":
      return { ...population, womenFinishAge: action.value };
    case "setWomenDistribution":
      return { ...population, womenDistribution: action.value };
  }
}

const PopulationContext = createContext<PopulationContext | null>(null);

export default function Page() {
  const [population, setPopulation] = useReducer(reducer, defaultPopulation);

  return (
    <PopulationContext.Provider
      value={{ data: population, dispatch: setPopulation }}
    >
      <div className="h-screen w-screen bg-blue-100 px-4">
        <h1>Pension sim</h1>
        <div className="flex flex-row gap-x-4">
          <Diagram />
          <PopulationSettings />
        </div>
      </div>
    </PopulationContext.Provider>
  );
}

export function usePopulationContext() {
  const population = useContext(PopulationContext);
  if (!population) {
    throw Error("no population context!");
  } else {
    return population;
  }
}
