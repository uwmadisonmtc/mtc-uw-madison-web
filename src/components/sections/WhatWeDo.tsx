import { SectionHeading } from "@/components/SectionHeading";
import { pillars } from "@/content/pillars";

/* Black, accent, accent, black on two columns; alternating on four. */
const tone = [
  "bg-ink text-white",
  "bg-accent text-white",
  "bg-accent text-white lg:bg-ink",
  "bg-ink text-white lg:bg-accent",
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="wrap section !pt-0">
      <SectionHeading>What we do</SectionHeading>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <li
            key={p.name}
            className={`flex min-h-56 flex-col justify-between rounded-2xl p-6 lg:min-h-72 ${tone[i % 4]}`}
          >
            <h3 className="text-[2rem] uppercase">{p.name}</h3>
            <p className="mt-8 text-white/90">{p.line}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
