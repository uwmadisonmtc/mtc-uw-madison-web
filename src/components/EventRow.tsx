import type { ChapterEvent } from "@/content/events";
import { dateParts } from "@/lib/today";

/* One past event as a ruled row: date, title, summary. */
export function EventRow({ event, onDark }: { event: ChapterEvent; onDark?: boolean }) {
  const d = event.date ? dateParts(event.date) : null;
  const soft = onDark ? "text-paper/70" : "text-ink-soft";
  return (
    <li className={`grid-12 border-t py-6 ${onDark ? "border-line-light" : "border-line"}`}>
      <p className={`label col-span-12 mb-2 md:col-span-3 md:mb-0 md:pt-1.5 ${soft}`}>
        {d ? (
          <time dateTime={event.date!}>
            {d.month} {d.day}, {d.year}
          </time>
        ) : (
          <span>{event.kind}</span>
        )}
        {d && <span className="mt-1 hidden md:block">{event.kind}</span>}
      </p>
      <h3 className="col-span-12 text-2xl md:col-span-4">{event.title}</h3>
      <p className={`col-span-12 mt-2 md:col-span-5 md:mt-0 ${soft}`}>{event.summary}</p>
    </li>
  );
}
