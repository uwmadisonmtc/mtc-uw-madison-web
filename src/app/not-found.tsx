import { LinkButton } from "@/components/LinkButton";

export default function NotFound() {
  return (
    <section className="wrap py-28 md:py-40">
      <p className="label text-forest">404</p>
      <h1 className="display-xl mt-6 max-w-[14ch]">That page is not here.</h1>
      <p className="lede mt-6 max-w-[40ch] text-ink-soft">
        It may have moved, or the link may be out of date.
      </p>
      <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4">
        <LinkButton href="/">Back to home</LinkButton>
        <LinkButton href="/events" variant="text">
          See events
        </LinkButton>
      </div>
    </section>
  );
}
