import { pillars } from "@/content/pillars";

/* Slow scrolling band of the four words. Decorative; stands still for reduced motion. */
export function TextBand() {
  const run = [...pillars, ...pillars];
  return (
    <div aria-hidden="true" className="overflow-hidden border-y-2 border-ink bg-white py-5 md:py-7">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((half) => (
          <ul key={half} className="flex shrink-0 items-center">
            {run.map((p, i) => (
              <li
                key={i}
                className="font-display flex items-center text-5xl uppercase leading-none tracking-[-0.02em] [font-stretch:112%] [font-weight:900] md:text-7xl"
              >
                <span className={i % 2 ? "text-accent" : "text-ink"}>{p.name}</span>
                <span className="mx-6 size-3 rounded-full bg-ink md:mx-9 md:size-4" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
