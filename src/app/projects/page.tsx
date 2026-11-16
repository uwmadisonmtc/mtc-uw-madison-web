import type { Metadata } from "next";
import { ClosingCta } from "@/components/ClosingCta";
import { LinkButton, Unconfigured } from "@/components/LinkButton";
import { NodeMark } from "@/components/NodeMark";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { SectionLabel } from "@/components/SectionLabel";
import { StatusTag } from "@/components/StatusTag";
import { projects } from "@/content/projects";
import { links, mailto } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "What MTC at UW–Madison is building: the NFC Scavenger Hunt, now in development, and our plan for semester-long student project teams.",
  alternates: { canonical: "/projects" },
};

const semester = [
  { step: "Pitch", text: "Students and community organizations bring ideas at the start of the term." },
  { step: "Form teams", text: "Small teams form around the ideas people want to work on, mixing experience levels." },
  { step: "Build", text: "Teams meet regularly, with check-ins so nobody is stuck alone." },
  { step: "Show", text: "At the end of the term, every team shows what it made, finished or not." },
];

export default function Projects() {
  return (
    <>
      <PageIntro label="Projects" title="We learn by making things.">
        <p>
          Projects are where MTC is headed. One is in development now. The rest of this page is
          what we plan to do next, and it is labelled that way.
        </p>
      </PageIntro>

      {projects.map((p) => (
        <article key={p.slug} id={p.slug} className="scroll-mt-8 border-t border-line">
          <div className="wrap grid-12 gap-y-12 py-16 md:py-24">
            <div className="col-span-12 lg:col-span-7">
              <StatusTag status={p.status} className="text-clay" />
              <h2 className="display-lg mt-4">{p.title}</h2>
              <p className="lede mt-6 max-w-[42ch] text-ink-soft">{p.summary}</p>

              <h3 className="label mt-14 font-mono font-normal tracking-[0.06em] text-forest">
                How it works
              </h3>
              <div className="mt-4 max-w-[60ch] space-y-4">
                {p.overview.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>

              <h3 className="label mt-12 font-mono font-normal tracking-[0.06em] text-forest">
                What you learn working on it
              </h3>
              <ul className="mt-4 max-w-[60ch] border-b border-line">
                {p.learn.map((item, i) => (
                  <li key={item} className="grid grid-cols-[2.5rem_1fr] border-t border-line py-3.5">
                    <span className="label pt-1 tabular-nums text-ink-soft">0{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {p.repo && (
                <LinkButton href={p.repo} variant="text" className="mt-9">
                  Source on GitHub
                </LinkButton>
              )}
            </div>

            <aside className="col-span-12 lg:col-span-4 lg:col-start-9">
              {p.photo && (
                <Photo id={p.photo} ratio="4 / 5" sizes="(min-width: 64rem) 30vw, 100vw" />
              )}
              <dl className="mt-8 border-b border-line">
                {p.facts.map((f) => (
                  <div key={f.label} className="border-t border-line py-3.5">
                    <dt className="label text-ink-soft">{f.label}</dt>
                    <dd className="mt-1">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </article>
      ))}

      {/* Planned: project teams */}
      <section id="project-teams" className="on-dark scroll-mt-8 bg-forest-deep text-paper">
        <div className="wrap py-20 md:py-28">
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 lg:col-span-6">
              <StatusTag status="planned" className="text-clay-light" />
              <h2 className="display-lg mt-4">Semester-long project teams</h2>
            </div>
            <p className="lede col-span-12 text-paper/80 lg:col-span-5 lg:col-start-8">
              The plan: small teams that take an idea from a sketch to something that works over
              one semester. This has not started yet. Here is how we expect it to run.
            </p>
          </div>

          <ol className="mt-14 grid gap-px bg-line-light sm:grid-cols-2 lg:grid-cols-4">
            {semester.map((s, i) => (
              <li key={s.step} className="bg-forest-deep py-7 sm:px-6 sm:first:pl-0 lg:py-2">
                <span className="label tabular-nums text-moss">Step 0{i + 1}</span>
                <h3 className="mt-3 text-2xl">{s.step}</h3>
                <p className="mt-3 text-paper/75">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Join / propose */}
      <section className="wrap grid-12 gap-y-14 py-20 md:py-28">
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <SectionLabel className="text-forest">For students</SectionLabel>
          <h2 className="display-md mt-6">Join a project team</h2>
          <p className="mt-4 text-ink-soft">
            You do not need to be an expert. If you can commit some time each week and want to
            learn by building, tell us what you are interested in and we will find you a place,
            starting with the scavenger hunt.
          </p>
          <div className="mt-7">
            <LinkButton href={mailto("Joining a project team")} variant="outline">
              Email us about joining
            </LinkButton>
            {!links.email && <Unconfigured what="chapter email" />}
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
          <SectionLabel className="text-forest">For organizations</SectionLabel>
          <h2 className="display-md mt-6">Propose a community project</h2>
          <p className="mt-4 text-ink-soft">
            If your mosque, nonprofit, student group, or small business has a problem that
            software might help with, tell us about it. We cannot promise to take on every
            idea, but we read all of them.
          </p>
          <div className="mt-7">
            <LinkButton href={mailto("Project proposal")} variant="outline">
              Send us an idea
            </LinkButton>
            {!links.email && <Unconfigured what="chapter email" />}
          </div>
        </div>
        <div className="col-span-12">
          <NodeMark className="text-forest" />
        </div>
      </section>

      <ClosingCta title="Want to build something?" line="The quickest way onto a project is to come to an event and tell someone what you want to work on." />
    </>
  );
}
