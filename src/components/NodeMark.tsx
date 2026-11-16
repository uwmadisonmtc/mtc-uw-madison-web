/*
  The site's one recurring motif: nodes joined by a line.
  It stands for the thing the chapter does, connecting people who then build.
  Decorative only, so it is hidden from assistive tech.
*/
export function NodeMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 12"
      width="44"
      height="12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 6h32" stroke="currentColor" strokeWidth="1" />
      <circle cx="6" cy="6" r="3.5" fill="currentColor" />
      <circle cx="22" cy="6" r="2.5" fill="var(--color-paper)" stroke="currentColor" />
      <circle cx="38" cy="6" r="3.5" stroke="currentColor" />
    </svg>
  );
}
