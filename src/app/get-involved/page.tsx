import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LinkButton, Unconfigured } from "@/components/LinkButton";
import { PageIntro } from "@/components/PageIntro";
import { links, mailto } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Get involved",
  description:
    "Ways to take part in MTC at UW–Madison: join as a student, work on a project, speak or mentor, or propose a project for a student team.",
  alternates: { canonical: "/get-involved" },
};

function Path({
  id,
  index,
  who,
  title,
  children,
  expect,
  actions,
}: {
  id: string;
  index: string;
  who: string;
  title: string;
  children: ReactNode;
  expect: string[];
  actions: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8 border-t border-line">
      <div className="wrap grid-12 gap-y-8 py-14 md:py-20">
        <div className="col-span-12 lg:col-span-3">
          <p className="label text-forest">
            <span className="tabular-nums opacity-60">{index}</span>
            <span className="mx-2 opacity-40">/</span>
            {who}
          </p>
        </div>
        <div className="col-span-12 md:col-span-7 lg:col-span-5">
          <h2 className="display-lg">{title}</h2>
          <div className="mt-5 max-w-[52ch] space-y-4 text-ink-soft">{children}</div>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">{actions}</div>
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-3 lg:col-start-10">
          <p className="label text-ink-soft">What to expect</p>
          <ul className="mt-3 border-b border-line">
            {expect.map((e) => (
              <li key={e} className="border-t border-line py-3 text-[0.97rem]">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function GetInvolved() {
  const noEmail = !links.email && <Unconfigured what="chapter email" />;
  return (
    <>
      <PageIntro label="Get involved" title="Pick the way in that fits you.">
        <p>
          Whether you are a first-year who has never written code or an engineer with twenty
          years behind you, there is something useful you can do here.
        </p>
      </PageIntro>

      <Path
        id="students"
        index="01"
        who="Students"
        title="Join the community"
        expect={[
          "Open to every UW–Madison student",
          "No application and no experience needed",
          "Come to as much or as little as you like",
        ]}
        actions={
          <>
            <LinkButton href={links.join}>Join MTC</LinkButton>
            {!links.join && <Unconfigured what="join / signup link" />}
            <LinkButton href="/events" variant="text">
              See events
            </LinkButton>
            <LinkButton href={links.instagram} variant="text">
              Follow on Instagram
            </LinkButton>
          </>
        }
      >
        <p>
          The best first step is to come to an event and meet people. Joining keeps you in the
          loop on what is coming up.
        </p>
      </Path>

      <Path
        id="builders"
        index="02"
        who="Builders"
        title="Work on a project"
        expect={[
          "Beginners and experienced students work together",
          "A regular time commitment during the semester",
          "First project: the NFC Scavenger Hunt, in development",
        ]}
        actions={
          <>
            <LinkButton href={mailto("Joining a project team")}>Email us about joining</LinkButton>
            {noEmail}
            <LinkButton href="/projects" variant="text">
              See projects
            </LinkButton>
          </>
        }
      >
        <p>
          If you want to learn by building with other people, tell us what you are interested in
          and what you already know, even if the answer is “not much yet.”
        </p>
        <p>You can also bring your own idea for a team to take on.</p>
      </Path>

      <Path
        id="professionals"
        index="03"
        who="Professionals and alumni"
        title="Speak or mentor"
        expect={[
          "A talk, a panel seat, a workshop, or an informal Q&A",
          "In person in Madison, or remote",
          "As little as one evening",
        ]}
        actions={
          <>
            <LinkButton href={mailto("Speaking or mentoring")}>Get in touch</LinkButton>
            {noEmail}
          </>
        }
      >
        <p>
          Students here want to hear from people who are doing the work: how you got started,
          what you would do differently, what your job is actually like.
        </p>
        <p>Tell us a little about your background and what you would be glad to share.</p>
      </Path>

      <Path
        id="organizations"
        index="04"
        who="Businesses and community organizations"
        title="Propose a project"
        expect={[
          "Student teams learning as they build, on a semester schedule",
          "Best for tools and prototypes that are useful but not urgent",
          "We read every idea and reply honestly about fit",
        ]}
        actions={
          <>
            <LinkButton href={mailto("Project proposal")}>Send us an idea</LinkButton>
            {noEmail}
            <LinkButton href="/projects#project-teams" variant="text">
              How project teams will work
            </LinkButton>
          </>
        }
      >
        <p>
          We are setting up student teams to build tools for community organizations. If you
          have a problem that software might help with, describe it in a few sentences: who has
          the problem, and what would be better if it were solved.
        </p>
        <p>
          Project teams are still being planned, so we cannot promise timelines or that every
          idea will be taken on.
        </p>
      </Path>

      <div className="border-t border-line" />
    </>
  );
}
