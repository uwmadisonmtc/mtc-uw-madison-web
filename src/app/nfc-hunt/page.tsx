import type { Metadata } from "next";
import { Suspense } from "react";
import { LinkButton, buttonBase } from "@/components/LinkButton";
import { SectionHeading } from "@/components/SectionHeading";
import { huntPlace, huntPrizes, huntSoloWhen, huntTime, nfcHunt } from "@/content/nfcHunt";
import { getHuntStats, registerState, statsLine, type HuntStats } from "@/lib/huntStats";
import { dateParts } from "@/lib/today";

const when = dateParts(nfcHunt.date);
const description = `${nfcHunt.pitch} A hands-on NFC workshop and team scavenger hunt through ${nfcHunt.building}, ${when.weekday}, ${when.month} ${when.day}, ${when.year}. Open to all UW–Madison students.`;

export const metadata: Metadata = {
  title: "NFC Scavenger Hunt · MTC",
  description,
  alternates: { canonical: nfcHunt.path },
  openGraph: { title: "NFC Scavenger Hunt · MTC", description, url: nfcHunt.path },
};

/* Register button + live count. Without stats this is exactly the fallback below. */
function HeroActions({ stats }: { stats: HuntStats | null }) {
  const reg = registerState(stats);
  const line = statsLine(stats);
  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
      {"href" in reg ? (
        <LinkButton href={reg.href}>Register your team</LinkButton>
      ) : (
        <span
          role="link"
          aria-disabled="true"
          className={`${buttonBase} cursor-not-allowed bg-grey-light text-grey`}
        >
          {reg.disabled}
        </span>
      )}
      {line && <p className="font-semibold">{line}</p>}
    </div>
  );
}

async function LiveHeroActions() {
  return <HeroActions stats={await getHuntStats()} />;
}

const steps = [
  {
    title: "Register a team",
    text: `Teams of ${nfcHunt.teamSize} people, up to ${nfcHunt.maxTeams} teams. Pre-registration is required, first come, first served. Register online, pick your team name, and your friends join with the team's PIN.`,
  },
  {
    title: "Learn in the workshop",
    text: "Start with a 30-minute hands-on workshop on how NFC works and how to read and write tags.",
  },
  {
    title: `Hunt through ${nfcHunt.building}`,
    text: "Tap NFC tags at hidden stations, solve a puzzle at each one, and race the clock while the live leaderboard runs on screen.",
  },
];

export default function NfcHuntPage() {
  return (
    <>
      {/* Hero */}
      <section className="wrap pb-6 pt-12 md:pt-20">
        <p className="font-semibold uppercase tracking-wide text-accent">MTC UW–Madison event</p>
        <h1 className="display mt-4 max-w-[16ch] uppercase">{nfcHunt.name}</h1>
        <p className="font-display mt-6 text-2xl font-bold leading-tight [font-stretch:105%] md:text-[1.75rem]">
          {nfcHunt.pitch}
        </p>
        <dl className="mt-6 space-y-1 text-lg">
          <div>
            <dt className="sr-only">Date</dt>
            <dd>
              <time dateTime={nfcHunt.date}>{when.full}</time>
            </dd>
          </div>
          <div>
            <dt className="sr-only">Time</dt>
            <dd>{huntTime()}</dd>
          </div>
          <div>
            <dt className="sr-only">Place</dt>
            <dd>{huntPlace()}</dd>
          </div>
        </dl>
        <Suspense fallback={<HeroActions stats={null} />}>
          <LiveHeroActions />
        </Suspense>
      </section>

      {/* What it is */}
      <section className="wrap section">
        <SectionHeading>What it is</SectionHeading>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <p className="display font-display font-extrabold [font-stretch:112%]">
            Learn NFC, then race to use it.
          </p>
          <div className="max-w-[52ch] space-y-5 text-lg lg:pt-2">
            <p>
              It starts with a 30-minute hands-on workshop on NFC: how tap-to-pay, hotel key cards
              and phone blockers work, and how to read and write NFC tags with the free NFC Tools
              app.
            </p>
            <p>
              Then teams race through {nfcHunt.building}, tapping NFC tags at hidden stations and
              solving a puzzle at each one, with a live leaderboard on screen.
            </p>
            <p className="text-grey">
              Open to all UW–Madison students. No experience needed. {huntPrizes()}
            </p>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="wrap section !pt-0">
        <SectionHeading>What you&apos;ll learn</SectionHeading>
        <ul className="grid gap-4 sm:grid-cols-2">
          {nfcHunt.learn.map((item) => (
            <li key={item} className="card p-6 text-lg">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* How it works */}
      <section className="wrap section !pt-0">
        <SectionHeading>How it works</SectionHeading>
        <ol className="grid gap-4 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className={`flex min-h-56 flex-col justify-between rounded-2xl p-6 text-white ${i === 1 ? "bg-accent" : "bg-ink"}`}
            >
              <span className="font-display text-5xl font-extrabold">{i + 1}</span>
              <div className="mt-8">
                <h3 className="text-2xl uppercase">{s.title}</h3>
                <p className="mt-3 text-white/90">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Can't make it? */}
      <section className="wrap section !pt-0">
        <SectionHeading>Can&apos;t make it?</SectionHeading>
        <p className="max-w-[60ch] text-lg">
          A self-guided solo version stays up in {nfcHunt.building} {huntSoloWhen()}. Finish at
          least {nfcHunt.soloMinStations} of {nfcHunt.soloStations} stations and pick up a CAI
          goodie at the Commons desk while supplies last.
        </p>
      </section>

      {/* FAQ */}
      <section className="wrap section !pt-0">
        <SectionHeading>FAQ</SectionHeading>
        <dl className="grid gap-4 md:grid-cols-2">
          {nfcHunt.faq.map((f) => (
            <div key={f.q} className="card p-6">
              <dt className="font-display text-xl font-extrabold [font-stretch:112%]">{f.q}</dt>
              <dd className="mt-2 text-grey">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="on-dark bg-ink text-white">
        <div className="wrap flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/80">{nfcHunt.supportLine}</p>
          <LinkButton href="/" variant="outline-light">
            Back to MTC
          </LinkButton>
        </div>
      </section>
    </>
  );
}
