import Section from "./section";

export default function Header() {
  return (
    <Section>
      <h1 className="pt-12 text-2xl font-bold lg:text-4xl">Skill matrix</h1>
      <p className="max-w-[56ch] pt-4 text-sm opacity-60">
        Largely based on Figmas Design ladder. My addition is the guidance what
        level you are based on the skills you have. Go through all section to
        see what level you are.
      </p>
      <ol className="fley-row flex gap-x-8 pb-12 pt-4 text-sm opacity-60">
        <li>L1 — Early career</li>
        <li>L2 — Experienced</li>
        <li>L3 — Emerging leader</li>
        <li>L4 — Leader</li>
        <li>L5 — Seasoned Leader</li>
      </ol>
    </Section>
  );
}
