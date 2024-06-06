"use client";

import { blankSkills } from "./content";
import { useLocalStorage } from "@react-hooks-library/core";
import SkillSection from "./skillSection";
import { useCallback } from "react";
import Section from "./section";

import { Analysis, levels } from "./page";
import Summary from "./summary";

export default function List() {
  const [skills, setSkill] = useLocalStorage("skills", blankSkills);

  const handleUpdate = (id: string, attribute: string, value: boolean) => {
    const newSkill = skills.map((current) => {
      if (current.id === id) {
        return { ...current, [attribute]: value };
      } else {
        return current;
      }
    });
    setSkill(newSkill);
  };

  const countSkill = useCallback(
    (skillToCount: string) => {
      return skills.reduce((count, current) => {
        if (current.category === skillToCount && current.checked) {
          count++;
        } else if (skillToCount === "overall" && current.checked) {
          count++;
        }

        return count;
      }, 0);
    },
    [skills]
  );

  const mapLevel = useCallback((score: number, max: number) => {
    switch (true) {
      case score / max > 0.92:
        return "L5";
      case score / max > 0.85:
        return "L4";
      case score / max > 0.5:
        return "L3";
      case score / max > 0.3:
        return "L2";
      default:
        return "L1";
    }
  }, []);

  const ana: Analysis = {
    overall: {
      level: mapLevel(countSkill("overall"), 143),
      score: countSkill("overall"),
      maxScore: 143,
    },
    product: {
      level: mapLevel(countSkill("product"), 9),
      score: countSkill("product"),
      maxScore: 9,
    },
    research: {
      level: mapLevel(countSkill("research"), 13),
      score: countSkill("research"),
      maxScore: 13,
    },
    vision: {
      level: mapLevel(countSkill("vision"), 8),
      score: countSkill("vision"),
      maxScore: 8,
    },
    visual: {
      level: mapLevel(countSkill("visual"), 15),
      score: countSkill("visual"),
      maxScore: 15,
    },
    interaction: {
      level: mapLevel(countSkill("interaction"), 14),
      score: countSkill("interaction"),
      maxScore: 14,
    },
    systems: {
      level: mapLevel(countSkill("systems"), 14),
      score: countSkill("systems"),
      maxScore: 14,
    },
    communication: {
      level: mapLevel(countSkill("communication"), 14),
      score: countSkill("communication"),
      maxScore: 14,
    },
    process: {
      level: mapLevel(countSkill("process"), 15),
      score: countSkill("process"),
      maxScore: 15,
    },
    mindset: {
      level: mapLevel(countSkill("mindset"), 7),
      score: countSkill("mindset"),
      maxScore: 7,
    },
    effectiveness: {
      level: mapLevel(countSkill("effectiveness"), 15),
      score: countSkill("effectiveness"),
      maxScore: 15,
    },
    leadership: {
      level: mapLevel(countSkill("leadership"), 11),
      score: countSkill("leadership"),
      maxScore: 11,
    },
    citizenship: {
      level: mapLevel(countSkill("citizenship"), 10),
      score: countSkill("citizenship"),
      maxScore: 10,
    },
  };

  return (
    <>
      <Section id="list">
        <div>
          <h2 className="text-3xl font-light">Evaluation</h2>
          <p className="pb-4 text-sm font-light text-gray-500 dark:text-gray-400">
            Skills, behaviours that guide you to grow as a designer.
          </p>
          <div className="border-b border-gray-200 dark:border-gray-600">
            {levels.map((item, index) => (
              <SkillSection
                key={item}
                skills={skills.filter((skill) => skill.level === item)}
                handleUpdate={handleUpdate}
                level={item}
                defaultOpen={index === 0 ? true : false}
              />
            ))}
          </div>
        </div>
      </Section>
      <Summary analysis={ana} />
      <Section className="py-8">
        <button
          className="text-gray-700 decoration-gray-400 underline-offset-4 hover:underline dark:text-gray-400"
          onClick={() => setSkill(blankSkills)}
        >
          Reset skills
        </button>
      </Section>
    </>
  );
}
