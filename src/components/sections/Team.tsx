import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { team } from "@/content/team";

/* Hidden until src/content/team.ts has people in it. */
export function Team() {
  if (team.length === 0) return null;
  return (
    <section id="team" className="wrap section !pt-0">
      <SectionHeading>Team</SectionHeading>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {team.map((m) => (
          <li key={m.name} className="card">
            {m.photo ? (
              <Photo
                id={m.photo}
                ratio="1 / 1"
                sizes="(min-width: 64rem) 18rem, (min-width: 48rem) 33vw, 50vw"
              />
            ) : (
              <div
                aria-hidden="true"
                className="font-display flex aspect-square items-center justify-center bg-grey-light text-5xl font-extrabold text-white"
              >
                {m.name
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")}
              </div>
            )}
            <div className="border-t-2 border-ink px-4 py-3.5">
              <p className="font-semibold leading-tight">{m.name}</p>
              <p className="mt-1 text-sm font-medium text-accent">{m.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
