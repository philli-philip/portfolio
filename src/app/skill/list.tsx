"use client";

import { blankSkills } from "./content";
import { useLocalStorage } from "@react-hooks-library/core";
import Header from "./header";
import SkillSection from "./skillSection";
import { useCallback } from "react";
import Section from "./section";

import { areas } from "./page";
import Link from "next/link";

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

  const ana = {
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
    <main className="dark:text-white/90">
      <Header />
      <Section className="flex flex-row gap-8">
        <div>
          {areas.map((item) => (
            <SkillSection
              key={item}
              skill={item}
              analysis={ana[item]}
              skills={skills}
              handleUpdate={handleUpdate}
            />
          ))}
          <div className="py-12">
            <button
              className="text-blue-600 hover:underline"
              onMouseDown={() => setSkill(blankSkills)}
            >
              Reset skills
            </button>
          </div>
        </div>
        <aside className="relative md:w-1/3">
          <div className="sticky top-8 rounded-xl bg-blue-50 p-4 text-blue-950 dark:bg-blue-950 dark:text-blue-400">
            <div className="flex flex-row justify-between">
              <h3>
                <Link href={"#"} className="hover:underline">
                  Overall
                </Link>
              </h3>
              <p>
                {ana.overall.score} / {ana.overall.maxScore}
              </p>
              {ana.overall.level}
            </div>
            <div>
              {areas.map((item) => (
                <div key={item} className="flew-row flex">
                  <Link
                    className="capitalize hover:underline"
                    href={"#" + item}
                  >
                    {item}:{" "}
                  </Link>
                  <p>
                    {ana[item].score} / {ana[item].maxScore}
                  </p>
                  <p className="flex-1 text-right">{ana[item].level}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </Section>
    </main>
  );
}
