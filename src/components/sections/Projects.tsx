import Link from "next/link";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/content/projects";

const statusLabel = { "in-progress": "In progress", done: "Done" } as const;

export function Projects() {
  if (projects.length === 0) return null;
  return (
    <section id="projects" className="wrap section">
      <SectionHeading>Projects</SectionHeading>
      <ul className="space-y-6">
        {projects.map((p) => {
          const body = (
            <>
              <Photo
                id={p.photo}
                ratio="4 / 3"
                sizes="(min-width: 48rem) 40vw, 100vw"
                className="md:w-[44%] md:shrink-0"
              />
              <div className="flex flex-col justify-center p-6 md:p-10">
                <span className="w-fit rounded-full border-2 border-ink px-3 py-0.5 text-sm font-semibold">
                  {p.label ?? statusLabel[p.status]}
                </span>
                <h3 className="mt-5 text-3xl md:text-4xl">{p.title}</h3>
                <p className="mt-4 max-w-[44ch] text-lg text-grey">{p.blurb}</p>
              </div>
            </>
          );
          const cardLink = "card flex flex-col transition-colors duration-150 hover:border-accent md:flex-row";
          return (
            <li key={p.title}>
              {p.url?.startsWith("/") ? (
                <Link href={p.url} className={cardLink}>
                  {body}
                </Link>
              ) : p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardLink}
                >
                  {body}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <article className="card flex flex-col md:flex-row">{body}</article>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
