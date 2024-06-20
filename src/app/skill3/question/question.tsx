import type { Skill } from "../content";

export default function Question({ item }: { item: Skill }) {
  return (
    <>
      <span className="flex flex-row gap-x-4 capitalize dark:text-gray-400">
        <span>{item.id}</span>
        <span>{item.level}</span>
        <span>{item.category}</span>
        <span>{item.area}</span>
      </span>
      <p className="grow align-middle text-3xl md:text-3xl lg:text-4xl lg:leading-relaxed dark:text-gray-100">
        {item.description}
      </p>
    </>
  );
}
