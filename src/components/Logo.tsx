import Image from "next/image";

/* The official MTC wordmark. `tone` picks the black or white file. */
export function Logo({
  tone = "black",
  className = "",
  priority,
  sizes = "120px",
}: {
  tone?: "black" | "white";
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={`/assets/brand/mtc-logo-${tone}.png`}
      alt=""
      width={889}
      height={331}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
