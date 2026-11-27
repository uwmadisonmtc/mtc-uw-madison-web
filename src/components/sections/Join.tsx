import { LinkButton } from "@/components/LinkButton";
import { SectionHeading } from "@/components/SectionHeading";
import { links } from "@/content/site.config";

export function Join() {
  const missing = (["join", "instagram", "linkedin", "email"] as const).filter((k) => !links[k]);
  return (
    <section id="join" className="on-dark bg-ink text-white">
      <div className="wrap section">
        <SectionHeading light>Join us</SectionHeading>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
          <p className="display font-display font-extrabold [font-stretch:112%]">
            Come build <span className="text-accent brightness-150">with us.</span>
          </p>
          <div>
            <p className="max-w-[40ch] text-lg text-white/80">
              Open to every UW–Madison student. No application, no experience needed. Join the
              WhatsApp group and come to the next event.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={links.join}>Join the WhatsApp group</LinkButton>
              <LinkButton href={links.instagram} variant="outline-light">
                Instagram
              </LinkButton>
              <LinkButton href={links.linkedin} variant="outline-light">
                LinkedIn
              </LinkButton>
              <LinkButton href={links.email && `mailto:${links.email}`} variant="outline-light">
                Email us
              </LinkButton>
            </div>
            {/* Development-only reminder; never shown on the live site. */}
            {missing.length > 0 && process.env.NODE_ENV !== "production" && (
              <p className="mt-6 rounded-lg border border-dashed border-white/40 px-4 py-3 text-sm text-white/70">
                Links not set yet: {missing.join(", ")}. Add them in src/content/site.config.ts.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
