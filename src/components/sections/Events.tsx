import { LinkButton } from "@/components/LinkButton";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { splitEvents } from "@/content/events";
import { dateParts, getToday } from "@/lib/today";

export async function Events() {
  const { upcoming, past } = splitEvents(await getToday());
  const next = upcoming[0];

  return (
    <section id="events" className="wrap section !pt-0">
      {/* Shown only when an event with a future date exists. */}
      {next && (
        <div className="on-accent mb-16 flex flex-col gap-6 rounded-2xl bg-accent p-6 text-white md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="font-semibold uppercase tracking-wide text-white/85">Next event</p>
            <h2 className="mt-2 text-3xl md:text-5xl">{next.title}</h2>
            <p className="mt-3 text-lg">
              <time dateTime={next.date!}>{dateParts(next.date!).full}</time>
              {next.time && ` · ${next.time}`}
              {next.location && ` · ${next.location}`}
            </p>
          </div>
          <LinkButton href={next.url ?? null} variant="outline-light" className="shrink-0">
            Details
          </LinkButton>
        </div>
      )}

      {past.length > 0 && (
        <>
          <SectionHeading>Past events</SectionHeading>
          <ul className="grid gap-5 sm:grid-cols-2">
            {past.map((e) => {
              const d = e.date ? dateParts(e.date) : null;
              const body = (
                <>
                  <Photo id={e.photo} ratio="3 / 2" sizes="(min-width: 40rem) 50vw, 100vw" />
                  <div className="flex items-baseline justify-between gap-4 border-t-2 border-ink px-5 py-4">
                    <h3 className="text-xl md:text-2xl">{e.title}</h3>
                    {d && (
                      <time dateTime={e.date!} className="shrink-0 text-sm font-medium text-grey">
                        {d.month.slice(0, 3)} {d.day}, {d.year}
                      </time>
                    )}
                  </div>
                </>
              );
              return (
                <li key={e.title}>
                  {e.instagramUrl ? (
                    <a
                      href={e.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card block transition-colors duration-150 hover:border-accent"
                    >
                      {body}
                      <span className="sr-only"> on Instagram (opens in a new tab)</span>
                    </a>
                  ) : (
                    <article className="card">{body}</article>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </section>
  );
}
