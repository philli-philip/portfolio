"use client";
import Item from "./item";
import { skills } from "./content";
import { useLocalStorage } from "@uidotdev/usehooks";
import Header from "./header";

type Skills = {
  id: string;
  description: string;
  area: string;
  level: string;
  category: string;
};
interface SkillLevel extends Skills {
  checked?: boolean;
}

export default function Page() {
  const [skill, setSkill] = useLocalStorage<SkillLevel[]>("skills", skills);

  const handleUpdate = (id: string, attribute: string, value: boolean) => {
    const newSkill = skill.map((current) => {
      if (current.id === id) {
        return { ...current, [attribute]: value };
      } else {
        return current;
      }
    });
    setSkill(newSkill);
  };
  return (
    <main>
      <Header />
      <div className="flex w-1/2 flex-col gap-0">
        {skill
          .filter((item) => item.level === "L1")
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
    </main>
  );
}
