import type { ChapterEvent } from "@/content/events";
import { dateParts } from "@/lib/today";
import { LinkButton } from "./LinkButton";

/* The next event, set like a ticket: big date on the left, details on the right. */
export function UpcomingEvent({ event }: { event: ChapterEvent }) {
  const d = dateParts(event.date!);
  return (
    <article className="grid-12 border border-line-light">
      <div className="col-span-12 flex items-end justify-between gap-6 border-b border-line-light p-6 md:col-span-4 md:flex-col md:items-start md:justify-between md:border-b-0 md:border-r md:p-8">
        <p className="label text-moss">
          {d.weekday}
          {event.time && <span className="block">{event.time}</span>}
        </p>
        <time dateTime={event.date!} className="block text-right md:text-left">
          <span className="font-display block text-7xl leading-[0.85] tracking-[-0.05em] md:text-8xl">
            {d.day}
          </span>
          <span className="label mt-2 block">
            {d.month} {d.year}
          </span>
        </time>
      </div>
      <div className="col-span-12 p-6 md:col-span-8 md:p-8">
        <p className="label text-moss">{event.kind}</p>
        <h3 className="display-md mt-3">{event.title}</h3>
        {event.location && <p className="mt-2 text-paper/80">{event.location}</p>}
        <p className="mt-4 max-w-[52ch] text-paper/80">{event.summary}</p>
        {event.url && (
          <LinkButton href={event.url} variant="solid" onDark className="mt-7">
            Details and RSVP
          </LinkButton>
        )}
      </div>
    </article>
  );
}
