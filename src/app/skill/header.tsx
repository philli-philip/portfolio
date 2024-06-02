import Section from "./section";

export default function Header() {
  return (
    <Section>
      <h1 className="pt-12 text-3xl font-light lg:text-4xl">Skill matrix</h1>
      <p className="max-w-[56ch] pt-2 text-sm font-light opacity-60 lg:pt-4">
        Largely based on Figmas Design ladder. My addition is the guidance what
        level you are based on the skills you have. Go through all section to
        see what level you are.
      </p>
      <ol className="fley-row flex flex-wrap gap-x-8 pb-12 pt-4 text-sm font-light opacity-60">
        <li>L1 — Early career</li>
        <li>L2 — Experienced</li>
        <li>L3 — Emerging leader</li>
        <li>L4 — Leader</li>
        <li>L5 — Seasoned Leader</li>
      </ol>
    </Section>
  );
}
