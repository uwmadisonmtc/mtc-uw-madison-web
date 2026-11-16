import { LinkButton } from "@/components/LinkButton";

export default function NotFound() {
  return (
    <section className="wrap section">
      <p className="font-semibold uppercase text-accent">404</p>
      <h1 className="display mt-4">That page is not here.</h1>
      <LinkButton href="/" variant="ink" className="mt-8">
        Back to home
      </LinkButton>
    </section>
  );
}
