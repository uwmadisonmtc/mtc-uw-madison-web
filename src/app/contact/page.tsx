import type { Metadata } from "next";
import { Unconfigured } from "@/components/LinkButton";
import { NodeMark } from "@/components/NodeMark";
import { PageIntro } from "@/components/PageIntro";
import { links, mailto } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach the Muslim Tech Collaborative chapter at UW–Madison.",
  alternates: { canonical: "/contact" },
};

/* Shown as "instagram.com/handle" rather than the full URL. */
function pretty(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export default function Contact() {
  const channels = [
    {
      key: "email",
      label: "Email",
      note: "Questions, speaking, mentoring, and project ideas.",
      href: mailto(),
      text: links.email,
    },
    {
      key: "instagram",
      label: "Instagram",
      note: "Event announcements and photos.",
      href: links.instagram,
      text: links.instagram && pretty(links.instagram),
    },
    {
      key: "calendar",
      label: "Event calendar",
      note: "Dates, times, and rooms.",
      href: links.calendar,
      text: links.calendar && pretty(links.calendar),
    },
    {
      key: "github",
      label: "GitHub",
      note: "Code from chapter projects.",
      href: links.github,
      text: links.github && pretty(links.github),
    },
    {
      key: "national",
      label: "MTC National",
      note: "The national Muslim Tech Collaborative.",
      href: links.national,
      text: links.national && pretty(links.national),
    },
  ];

  return (
    <>
      <PageIntro label="Contact" title="Say hello.">
        <p>We are students, so replies can take a few days during exams. We do read everything.</p>
      </PageIntro>

      <section className="wrap pb-24 md:pb-32">
        <ul className="border-b border-line">
          {channels.map((c) => {
            if (!c.href || !c.text) {
              return process.env.NODE_ENV === "production" ? null : (
                <li key={c.key} className="border-t border-line py-6">
                  <Unconfigured what={c.label} />
                </li>
              );
            }
            const web = c.href.startsWith("http");
            return (
              <li key={c.key} className="border-t border-line">
                <a
                  href={c.href}
                  {...(web ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group grid-12 items-baseline gap-y-1 py-7 transition-colors duration-150 hover:text-forest"
                >
                  <span className="label col-span-12 text-ink-soft md:col-span-3">{c.label}</span>
                  <span className="font-display col-span-11 break-words text-[clamp(1.4rem,1rem+1.8vw,2.25rem)] leading-tight tracking-[-0.025em] md:col-span-5">
                    {c.text}
                  </span>
                  <span
                    aria-hidden="true"
                    className="col-span-1 text-right text-xl transition-transform duration-150 group-hover:translate-x-1 md:order-last"
                  >
                    {web ? "↗" : "→"}
                  </span>
                  <span className="col-span-12 text-ink-soft md:col-span-3">
                    {c.note}
                    {web && <span className="sr-only"> (opens in a new tab)</span>}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="mt-12 flex items-center gap-5 text-ink-soft">
          <NodeMark className="shrink-0 text-forest" />
          <p>University of Wisconsin–Madison · Madison, Wisconsin</p>
        </div>
      </section>
    </>
  );
}
