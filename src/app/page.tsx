import Link from "next/link";
import { ClosingCta } from "@/components/ClosingCta";
import { EventRow } from "@/components/EventRow";
import { LinkButton } from "@/components/LinkButton";
import { Photo } from "@/components/Photo";
import { SectionLabel } from "@/components/SectionLabel";
import { StatusTag } from "@/components/StatusTag";
import { UpcomingEvent } from "@/components/UpcomingEvent";
import { splitEvents } from "@/content/events";
import { paths, pillars } from "@/content/pillars";
import { projects } from "@/content/projects";
import { joinHref, links } from "@/content/site.config";
import { getToday } from "@/lib/today";

export default async function Home() {
  const today = await getToday();
  const { upcoming, past } = splitEvents(today);
  const next = upcoming[0];
  const featured = projects[0];

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="border-b border-line">
        <div className="wrap grid-12 gap-y-10 pb-12 pt-10 md:pb-16 md:pt-16 lg:items-end">
          <div className="col-span-12 lg:col-span-6 lg:pb-6">
            <p className="label text-forest">
              Muslim Tech Collaborative
              <span className="mx-2 opacity-40">/</span>
              UW–Madison chapter
            </p>
            <h1 className="display-hero mt-6">
              Build with purpose.
              <br />
              Find your people.
            </h1>
            <p className="lede mt-7 max-w-[36ch] text-ink-soft">
              A community of students at UW–Madison learning technology, building meaningful
              projects, and growing together.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-5">
              <LinkButton href={joinHref}>Join MTC</LinkButton>
              <LinkButton href="#what-we-do" variant="text">
                Explore what we do
              </LinkButton>
            </div>
          </div>
          <Photo
            id="hero"
            ratio="5 / 4"
            priority
            sizes="(min-width: 64rem) 48vw, 100vw"
            className="col-span-12 lg:col-span-6"
          />
        </div>
      </section>

      {/* ---------- Introduction ---------- */}
      <section className="wrap grid-12 gap-y-8 py-20 md:py-28">
        <SectionLabel index="01" className="col-span-12 text-forest lg:col-span-3 lg:pt-3">
          Who we are
        </SectionLabel>
        <div className="col-span-12 lg:col-span-8">
          <p className="font-display text-[clamp(1.5rem,1.1rem+1.7vw,2.4rem)] leading-[1.18] tracking-[-0.02em]">
            MTC is where Muslim students at UW–Madison who are into technology find each other,
            learn together, and make things that are useful to the people around them.
          </p>
          <div className="mt-10 grid gap-x-10 gap-y-5 text-ink-soft md:grid-cols-2">
            <p>
              We are a chapter of the national Muslim Tech Collaborative, and our approach is
              simple: tech for the community, by the community. That means building things with
              other students, not just hearing about them.
            </p>
            <p>
              Computer science, engineering, AI, product, entrepreneurship: if you are curious
              about any of it, you fit here. Muslim identity is at the center of the community,
              and students of every background are welcome to take part.
            </p>
          </div>
          <LinkButton href="/about" variant="text" className="mt-9">
            More about the chapter
          </LinkButton>
        </div>
      </section>

      {/* ---------- Four pillars ---------- */}
      <section id="what-we-do" className="scroll-mt-8 border-y border-line bg-paper-deep">
        <div className="wrap py-20 md:py-28">
          <div className="grid-12 gap-y-6">
            <SectionLabel index="02" className="col-span-12 text-forest lg:col-span-3 lg:pt-3">
              What we do
            </SectionLabel>
            <h2 className="display-lg col-span-12 lg:col-span-7">
              Four things, done together.
            </h2>
          </div>

          <ol className="mt-14 border-b border-line">
            {pillars.map((p, i) => (
              <li key={p.name} className="grid-12 gap-y-4 border-t border-line py-8 md:py-10">
                <span className="label col-span-2 pt-2 tabular-nums text-ink-soft md:col-span-1">
                  0{i + 1}
                </span>
                <div className="col-span-10 md:col-span-4 lg:col-span-4">
                  <h3 className="display-lg">{p.name}</h3>
                  <p className="mt-3 max-w-[26ch] text-ink-soft">{p.line}</p>
                </div>
                <dl className="col-span-10 col-start-3 grid gap-5 sm:grid-cols-2 md:col-span-7 md:col-start-auto md:pt-2 lg:col-span-6 lg:col-start-7">
                  <div>
                    <dt>
                      <StatusTag status="shipped" label="So far" className="text-forest" />
                    </dt>
                    <dd className="mt-2">{p.now}</dd>
                  </div>
                  <div>
                    <dt>
                      <StatusTag status="planned" label="Working toward" className="text-ink-soft" />
                    </dt>
                    <dd className="mt-2 text-ink-soft">{p.next}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Events ---------- */}
      <section className="on-dark bg-forest-deep text-paper">
        <div className="wrap py-20 md:py-28">
          <div className="grid-12 items-end gap-y-6">
            <div className="col-span-12 lg:col-span-8">
              <SectionLabel index="03" className="text-moss">
                {next ? "Next event" : "Events"}
              </SectionLabel>
              <h2 className="display-lg mt-6">
                {next ? "Come to the next one." : "Nothing on the calendar this week."}
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:text-right">
              <LinkButton href="/events" variant="text" onDark>
                All events
              </LinkButton>
            </div>
          </div>

          <div className="mt-12">
            {next ? (
              <UpcomingEvent event={next} />
            ) : (
              <p className="lede max-w-[46ch] text-paper/80">
                New events are posted here as soon as they are confirmed
                {links.instagram ? (
                  <>
                    , and on{" "}
                    <a
                      href={links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      Instagram
                    </a>
                  </>
                ) : null}
                . Here is what we have been up to.
              </p>
            )}
          </div>

          {past.length > 0 && (
            <div className="mt-16">
              <p className="label mb-4 text-moss">Recently</p>
              <ul className="border-b border-line-light">
                {past.slice(0, 3).map((e) => (
                  <EventRow key={e.slug} event={e} onDark />
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ---------- Project spotlight ---------- */}
      {featured && (
        <section className="wrap py-20 md:py-28">
          <SectionLabel index="04" className="text-forest">
            On the workbench
          </SectionLabel>
          <div className="grid-12 mt-8 gap-y-10">
            <div className="col-span-12 lg:col-span-6">
              <StatusTag status={featured.status} className="text-clay" />
              <h2 className="display-lg mt-4">{featured.title}</h2>
              <p className="lede mt-6 max-w-[40ch] text-ink-soft">{featured.summary}</p>
              <dl className="mt-10 border-b border-line">
                {featured.facts.map((f) => (
                  <div key={f.label} className="grid grid-cols-[7rem_1fr] gap-4 border-t border-line py-3.5">
                    <dt className="label pt-1 text-ink-soft">{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
              <LinkButton href={`/projects#${featured.slug}`} variant="outline" className="mt-9">
                About the project
              </LinkButton>
            </div>
            {featured.photo && (
              <Photo
                id={featured.photo}
                ratio="4 / 5"
                sizes="(min-width: 64rem) 40vw, 100vw"
                className="col-span-12 sm:col-span-8 lg:col-span-5 lg:col-start-8"
              />
            )}
          </div>
        </section>
      )}

      {/* ---------- Photographs ---------- */}
      <section className="border-t border-line">
        <div className="wrap py-20 md:py-28">
          <div className="grid-12 gap-y-6">
            <SectionLabel index="05" className="col-span-12 text-forest lg:col-span-3 lg:pt-3">
              In the room
            </SectionLabel>
            <h2 className="display-lg col-span-12 lg:col-span-7">
              What it looks like when we get together.
            </h2>
          </div>
          {/* An uneven contact sheet: no two frames the same size. */}
          <div className="grid-12 mt-14 items-start gap-y-8">
            <Photo
              id="kickoff"
              ratio="3 / 2"
              sizes="(min-width: 48rem) 58vw, 100vw"
              className="col-span-12 md:col-span-7"
            />
            <Photo
              id="community-1"
              ratio="4 / 5"
              sizes="(min-width: 48rem) 33vw, 100vw"
              className="col-span-8 md:col-span-4 md:col-start-9 md:mt-16"
            />
            <Photo
              id="internship-panel"
              ratio="1 / 1"
              sizes="(min-width: 48rem) 25vw, 50vw"
              className="col-span-6 md:col-span-3"
            />
            <Photo
              id="ai-discussion"
              ratio="3 / 2"
              sizes="(min-width: 48rem) 42vw, 50vw"
              className="col-span-6 md:col-span-5 md:-mt-10"
            />
            <Photo
              id="community-2"
              ratio="4 / 3"
              sizes="(min-width: 48rem) 33vw, 100vw"
              className="col-span-12 md:col-span-4"
            />
          </div>
        </div>
      </section>

      {/* ---------- Ways in ---------- */}
      <section className="border-t border-line bg-paper-deep">
        <div className="wrap grid-12 gap-y-10 py-20 md:py-28">
          <div className="col-span-12 lg:col-span-4">
            <SectionLabel index="06" className="text-forest">
              Take part
            </SectionLabel>
            <h2 className="display-lg mt-6">There is more than one way in.</h2>
            <p className="mt-5 max-w-[34ch] text-ink-soft">
              Most people start by showing up to one event. Some come to build, and some come to
              help students who are where they once were.
            </p>
          </div>
          <ul className="col-span-12 border-b border-line lg:col-span-7 lg:col-start-6">
            {paths.map((p) => (
              <li key={p.id} className="border-t border-line">
                <Link
                  href={`/get-involved#${p.id}`}
                  className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 py-6 transition-colors duration-150 hover:text-forest sm:grid-cols-[8rem_1fr_auto]"
                >
                  <span className="label col-span-2 text-ink-soft sm:col-span-1">{p.who}</span>
                  <span>
                    <span className="font-display block text-2xl tracking-[-0.02em]">{p.title}</span>
                    <span className="mt-1 block text-ink-soft">{p.line}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-xl transition-transform duration-150 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
