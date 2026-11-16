import type { Metadata } from "next";
import { ClosingCta } from "@/components/ClosingCta";
import { LinkButton } from "@/components/LinkButton";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { SectionLabel } from "@/components/SectionLabel";
import { links } from "@/content/site.config";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "What the Muslim Tech Collaborative chapter at UW–Madison is, why it exists, and how it relates to the national organization.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <PageIntro label="About" title="A place to build, and people to build with.">
        <p>
          MTC at UW–Madison is a student-led community for Muslim students in technology. We
          learn together, work on projects together, and look out for each other.
        </p>
      </PageIntro>

      <div className="wrap">
        <Photo id="about-group" ratio="21 / 9" priority sizes="(min-width: 84rem) 80rem, 100vw" />
      </div>

      {/* Mission */}
      <section className="wrap grid-12 gap-y-8 py-20 md:py-28">
        <SectionLabel index="01" className="col-span-12 text-forest lg:col-span-3 lg:pt-3">
          Why we exist
        </SectionLabel>
        <div className="col-span-12 lg:col-span-8">
          <h2 className="display-lg">Tech for the community, by the community.</h2>
          <div className="mt-8 max-w-[62ch] space-y-5 text-ink-soft">
            <p>
              A lot of what you need to grow in tech does not come from a lecture: a project you
              care about, someone a year ahead who will answer an honest question, friends who
              are working on things too. MTC exists so Muslim students at UW–Madison have a
              place to find all three.
            </p>
            <p>
              We want what we build to be useful beyond ourselves. That is why our projects
              start close to home, with things for campus and for the communities we belong to,
              and why we teach each other as we go.
            </p>
            <p>
              Muslim identity is central to who we are. You do not have to be Muslim to come to
              an event, join a project, or learn with us.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter + national */}
      <section className="border-y border-line bg-paper-deep">
        <div className="wrap grid-12 gap-y-14 py-20 md:py-28">
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <SectionLabel index="02" className="text-forest">
              The chapter
            </SectionLabel>
            <h2 className="display-md mt-6">Here in Madison</h2>
            <div className="mt-5 space-y-4 text-ink-soft">
              <p>
                We are a young chapter. So far we have held a kickoff, internship and
                professional development panels, and discussions on AI, and we have our first
                project in development.
              </p>
              <p>
                Students from any major are welcome: computer science, engineering, data,
                design, business, or still deciding.
              </p>
            </div>
            <LinkButton href="/events" variant="text" className="mt-7">
              See what we have done
            </LinkButton>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
            <SectionLabel index="03" className="text-forest">
              The national organization
            </SectionLabel>
            <h2 className="display-md mt-6">Part of something larger</h2>
            <div className="mt-5 space-y-4 text-ink-soft">
              <p>
                Muslim Tech Collaborative is a national community of Muslim technologists and
                builders, with chapters at universities across the country. We are its
                UW–Madison chapter.
              </p>
              <p>
                The chapter is run by students here. Being part of the national community
                connects us to people doing the same work on other campuses.
              </p>
            </div>
            <LinkButton href={links.national} variant="text" className="mt-7">
              Visit mtc.so
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="wrap grid-12 gap-y-8 py-20 md:py-28">
        <SectionLabel index="04" className="col-span-12 text-forest lg:col-span-3 lg:pt-3">
          Leadership
        </SectionLabel>
        <div className="col-span-12 lg:col-span-8">
          <h2 className="display-lg">Run by students.</h2>
          <p className="mt-6 max-w-[58ch] text-ink-soft">
            MTC at UW–Madison is organized by a student leadership team that plans events, leads
            projects, and keeps the community running. If you want to help, we would like to
            hear from you.
          </p>
          {team.length > 0 && (
            <ul className="mt-12 grid gap-x-8 gap-y-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((m) => (
                <li key={m.name}>
                  {m.photo && (
                    <Photo
                      id={m.photo}
                      ratio="4 / 5"
                      showCaption={false}
                      sizes="(min-width: 64rem) 20vw, (min-width: 40rem) 45vw, 100vw"
                      className="mb-4"
                    />
                  )}
                  <p className="font-display text-xl tracking-[-0.02em]">{m.name}</p>
                  <p className="label mt-1.5 text-forest">{m.role}</p>
                  {m.detail && <p className="mt-1 text-sm text-ink-soft">{m.detail}</p>}
                </li>
              ))}
            </ul>
          )}
          <LinkButton href="/get-involved" variant="outline" className="mt-9">
            Ways to get involved
          </LinkButton>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
