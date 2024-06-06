import Link from "next/link";
import Section from "./section";
import type { Analysis } from "./page";

import { areas } from "./page";

const results = {
  L1: { title: "Junior", description: "You are a junior." },
  L2: { title: "Mid", description: "You are mid." },
  L3: { title: "Senior", description: "You have seen some stuff" },
  L4: { title: "Lead", description: "You have the potential to lead" },
  L5: { title: "Head of  Design", description: "You know design!" },
  L6: {
    title: "Director of Design",
    description: "You are a known person in the space",
  },
};

export default function Summary({ analysis }: { analysis: Analysis }) {
  return (
    <Section id="summary">
      <h2 className="mt-12 text-2xl font-light">Result</h2>
      <p className="pb-4 text-sm font-light text-gray-600 dark:text-gray-400">
        Consider this is a computer program, so is more of a guideline than a
        final judgement.
      </p>
      <div className="flex flex-col gap-8 border border-gray-200 p-4 lg:flex-row dark:border-gray-600">
        <div className="flex grow flex-col gap-y-2">
          <h3 className="text-2xl font-light">
            {results[analysis.overall.level].title}
          </h3>
          <span>
            {analysis.overall.score} / {analysis.overall.maxScore}
          </span>
          <p>{results[analysis.overall.level].description}</p>
        </div>
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
      </div>
    </Section>
  );
}
