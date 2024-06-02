import Link from "next/link";
import Section from "./section";
import type { Analysis } from "./page";

import { areas } from "./page";

export default function Summary({ analysis }: { analysis: Analysis }) {
  const level = mapLevel(analysis.overall.level);

  function mapLevel(lvl: string) {
    switch (true) {
      case lvl === "L1":
        return "Junior";
      case lvl === "L2":
        return "Mid";
      case lvl === "L3":
        return "Senior";
      case lvl === "L4":
        return "Lead";
      case lvl === "L5":
        return "Head of Design";
      default:
        return "error";
    }
  }
  return (
    <Section id="summary">
      <h2 className="mt-12 text-2xl font-light">Result</h2>
      <p className="pb-4 text-sm font-light text-gray-600">
        Consider this is a computer program, so is more of a guideline than a
        final judgement.
      </p>
      <div className="flex flex-col-reverse gap-8 border border-gray-200 p-4 md:flex-row">
        <div className="grow">
          {areas.map((item) => (
            <div key={item} className="flew-row flex">
              <Link className="capitalize hover:underline" href={"#" + item}>
                {item}:{" "}
              </Link>
              <p>
                {analysis[item].score} / {analysis[item].maxScore}
              </p>
              <p className="flex-1 text-right">{analysis[item].level}</p>
            </div>
          ))}
        </div>
        <div className="flex grow flex-row justify-between">
          <h3 className="text-2xl font-light">{level}</h3>
          <p>
            {analysis.overall.score} / {analysis.overall.maxScore}
          </p>
        </div>
      </div>
    </Section>
  );
}
