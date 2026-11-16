import type { Metadata } from "next";
import { ClosingCta } from "@/components/ClosingCta";
import { LinkButton } from "@/components/LinkButton";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { SectionLabel } from "@/components/SectionLabel";
import { StatusTag } from "@/components/StatusTag";
import { UpcomingEvent } from "@/components/UpcomingEvent";
import { inPlanning, splitEvents } from "@/content/events";
import { links } from "@/content/site.config";
import { dateParts, getToday } from "@/lib/today";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past events from the Muslim Tech Collaborative chapter at UW–Madison: kickoff, internship panels, professional development, and AI discussions.",
  alternates: { canonical: "/events" },
};

export default async function Events() {
  const { upcoming, past } = splitEvents(await getToday());

  return (
    <>
      <PageIntro label="Events" title="Come to one. That is how most people start.">
        <p>Events are open to all students. You do not need to be a member or sign up first.</p>
      </PageIntro>

      {/* Upcoming */}
      <section className="on-dark bg-forest-deep text-paper">
        <div className="wrap py-16 md:py-24">
          <SectionLabel className="text-moss">Upcoming</SectionLabel>
          {upcoming.length > 0 ? (
            <div className="mt-8 space-y-6">
              {upcoming.map((e) => (
                <UpcomingEvent key={e.slug} event={e} />
              ))}
            </div>
          ) : (
            <div className="grid-12 mt-8 gap-y-6">
              <h2 className="display-lg col-span-12 lg:col-span-7">
                No dates confirmed right now.
              </h2>
              <p className="lede col-span-12 text-paper/80 lg:col-span-5">
                We post events here as soon as the date and room are set.
              </p>
            </div>
          )}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            <LinkButton href={links.calendar} variant="text" onDark>
              Event calendar
            </LinkButton>
            <LinkButton href={links.instagram} variant="text" onDark>
              Announcements on Instagram
            </LinkButton>
          </div>

          {inPlanning.length > 0 && (
            <div className="mt-16">
              <StatusTag status="planned" label="In planning, no date yet" className="text-clay-light" />
              <ul className="mt-5 border-b border-line-light">
                {inPlanning.map((item) => (
                  <li key={item.title} className="grid-12 gap-y-2 border-t border-line-light py-5">
                    <h3 className="col-span-12 text-xl md:col-span-4">{item.title}</h3>
                    <p className="col-span-12 text-paper/75 md:col-span-7 md:col-start-6">
                      {item.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Past */}
      <section className="wrap py-20 md:py-28">
        <SectionLabel className="text-forest">Past events</SectionLabel>
        <h2 className="display-lg mt-6">What we have done so far.</h2>

        <ol className="mt-14">
          {past.map((e, i) => {
            const d = e.date ? dateParts(e.date) : null;
            const flip = i % 2 === 1;
            return (
              <li
                key={e.slug}
                id={e.slug}
                className="grid-12 scroll-mt-8 items-center gap-y-6 border-t border-line py-10 md:py-14"
              >
                {e.photo && (
                  <Photo
                    id={e.photo}
                    sizes="(min-width: 48rem) 50vw, 100vw"
                    className={`col-span-12 md:col-span-6 ${flip ? "md:order-2 md:col-start-7" : ""}`}
                  />
                )}
                <div
                  className={`col-span-12 md:col-span-5 ${
                    flip ? "md:order-1 md:col-start-1" : "md:col-start-8"
                  }`}
                >
                  <p className="label text-ink-soft">
                    {d && (
                      <>
                        <time dateTime={e.date!}>
                          {d.month} {d.day}, {d.year}
                        </time>
                        <span className="mx-2 opacity-40">/</span>
                      </>
                    )}
                    {e.kind}
                  </p>
                  <h3 className="display-md mt-3">{e.title}</h3>
                  {e.location && <p className="mt-1 text-ink-soft">{e.location}</p>}
                  <p className="mt-4 max-w-[46ch] text-ink-soft">{e.summary}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <ClosingCta
        title="Have an idea for an event?"
        line="Workshops, speakers, study sessions, something we have not thought of. Tell us and help make it happen."
      />
    </>
  );
}
