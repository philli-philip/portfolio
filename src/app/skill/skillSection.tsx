"use client";

import type { Area, Skills, tArea } from "./page";
import Item from "./item";

import { area } from "./page";

export default function SkillSection({
  skills,
  skill,
  handleUpdate,
  analysis,
}: {
  skills: Skills;
  skill: tArea;
  handleUpdate: (id: string, attribute: string, value: boolean) => void;
  analysis: Area;
}) {
  return (
    <div className="pb-8">
      <h3 className="text-xl capitalize">{skill}</h3>
      <p className="hidden">
        {analysis.score}/{analysis.maxScore} — {analysis.level}
      </p>
      <p className="text-sm opacity-60">{area[skill]?.description}</p>
      <div>
        {skills
          .filter((item) => item.category === skill)
          .sort((a, b) => a.level.localeCompare(b.level))
          .map((item, index) => (
            <Item
              description={item.description}
              key={index}
              id={item.id}
              update={handleUpdate}
              checked={item.checked || false}
            />
          ))}
      </div>
    </div>
  );
}
