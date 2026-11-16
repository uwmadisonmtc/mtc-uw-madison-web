import Link from "next/link";

/*
  Text wordmark. Swap for the official logo file in
  /public/assets/brand once it has been added.
*/
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Muslim Tech Collaborative at UW–Madison, home"
      className={`group inline-flex items-baseline gap-2.5 ${className}`}
    >
      <span className="font-display text-[1.6rem] font-semibold leading-none tracking-[-0.05em]">
        MTC
      </span>
      <span className="label border-l border-current/30 pl-2.5 leading-none opacity-80">
        UW–Madison
      </span>
    </Link>
  );
}
