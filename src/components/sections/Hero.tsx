import { LinkButton } from "@/components/LinkButton";
import { Logo } from "@/components/Logo";
import { Photo } from "@/components/Photo";
import { joinHref, links } from "@/content/site.config";

export function Hero() {
  return (
    <section id="top" className="wrap pb-6 pt-12 md:pt-20">
      <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
        <h1 className="@container max-w-[40rem]">
          <span className="sr-only">Muslim Tech Collaborative at </span>
          <Logo priority sizes="(min-width: 64rem) 640px, 90vw" className="h-auto w-full" />
          {/* Sized from the heading's own width so it always spans exactly as wide as the logo. */}
          <span className="mt-[2cqw] block whitespace-nowrap text-[13.7cqw] uppercase leading-[0.9] tracking-[-0.03em] text-accent [font-stretch:100%] [font-weight:900]">
            UW–Madison
          </span>
        </h1>
        <div className="lg:pb-3">
          <p className="font-display text-2xl font-bold leading-tight [font-stretch:105%] md:text-[1.75rem]">
            Build with purpose.
            <br />
            Find your people.
          </p>
          <p className="mt-4 max-w-[34ch] text-grey">
            A community of students at UW–Madison learning technology, building meaningful
            projects, and growing together.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <LinkButton href={joinHref}>Join MTC</LinkButton>
            <LinkButton href={links.instagram} variant="outline">
              Instagram
            </LinkButton>
          </div>
        </div>
      </div>
      <Photo
        id="hero"
        ratio="21 / 9"
        priority
        sizes="(min-width: 76rem) 71rem, 100vw"
        className="mt-12 rounded-2xl max-md:!aspect-[4/3] md:mt-16"
      />
    </section>
  );
}
