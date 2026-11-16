/* Capital section title with a rule running to the edge of the page. */
export function SectionHeading({ children, light }: { children: string; light?: boolean }) {
  return (
    <div className="mb-10 flex items-center gap-5 md:mb-14">
      <h2
        className={`text-2xl uppercase tracking-normal md:text-3xl ${light ? "text-white" : "text-accent"}`}
      >
        {children}
      </h2>
      <span aria-hidden="true" className={`h-0.5 flex-1 ${light ? "bg-white/30" : "bg-grey-light"}`} />
      <span aria-hidden="true" className={`h-0.5 w-10 ${light ? "bg-white" : "bg-accent"}`} />
    </div>
  );
}
