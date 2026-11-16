import { joinHref, links } from "@/content/site.config";
import { LinkButton } from "./LinkButton";
import { NodeMark } from "./NodeMark";

export function ClosingCta({
  title = "Come build with us.",
  line = "Show up to an event, meet people, and see if it is for you. That is all it takes to start.",
}: {
  title?: string;
  line?: string;
}) {
  return (
    <section className="on-dark bg-forest text-paper">
      <div className="wrap grid-12 gap-y-8 py-20 md:py-28">
        <div className="col-span-12 lg:col-span-7">
          <NodeMark className="text-moss [--color-paper:var(--color-forest)]" />
          <h2 className="display-xl mt-6">{title}</h2>
        </div>
        <div className="col-span-12 self-end lg:col-span-4 lg:col-start-9">
          <p className="lede text-paper/85">{line}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5">
            <LinkButton href={joinHref} onDark>
              Join MTC
            </LinkButton>
            <LinkButton href={links.calendar ?? "/events"} variant="text" onDark>
              See events
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
