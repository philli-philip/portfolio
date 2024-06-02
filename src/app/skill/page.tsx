import { Suspense } from "react";
import Header from "./header";
import List from "./list";

export type Skill = {
  id: string;
  description: string;
  area: string;
  level: tLevels;
  category: tArea;
  checked?: boolean;
};

export type Skills = Skill[];

export type Area = {
  level: string;
  score: number;
  maxScore: number;
};

export type Analysis = {
  overall: Area;
  product: Area;
  research: Area;
  vision: Area;
  visual: Area;
  interaction: Area;
  systems: Area;
  communication: Area;
  process: Area;
  mindset: Area;
  effectiveness: Area;
  leadership: Area;
  citizenship: Area;
};

export const area: {
  [key in tArea]?: { description: string; maxSkill: number };
} = {
  product: {
    description:
      "Product is about your strategic thinking how to architect and plan products",
    maxSkill: 9,
  },
  research: {
    description:
      "Conduct, interpret and communicate user research to drive business and design decisions",
    maxSkill: 13,
  },
};

export type tArea =
  | "product"
  | "research"
  | "vision"
  | "visual"
  | "interaction"
  | "systems"
  | "communication"
  | "process"
  | "mindset"
  | "effectiveness"
  | "leadership"
  | "citizenship";

export const areas: tArea[] = [
  "product",
  "research",
  "vision",
  "visual",
  "interaction",
  "systems",
  "communication",
  "process",
  "mindset",
  "effectiveness",
  "leadership",
  "citizenship",
];
export type tLevels = "L1" | "L2" | "L3" | "L4" | "L5";

export const levels: tLevels[] = ["L1", "L2", "L3", "L4", "L5"];

export default function Page() {
  return (
    <main className="dark:text-white/90">
      <Header />
      <Suspense>
        <List />
      </Suspense>
    </main>
  );
}
