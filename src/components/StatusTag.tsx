import { type ProjectStatus, statusLabel } from "@/content/projects";

/* A filled dot means it exists; a half or empty dot means it does not yet. */
const dot: Record<ProjectStatus, string> = {
  shipped: "bg-current",
  "in-development": "bg-[linear-gradient(90deg,currentColor_50%,transparent_50%)]",
  planned: "",
};

export function StatusTag({
  status,
  label,
  className = "",
}: {
  status: ProjectStatus;
  label?: string;
  className?: string;
}) {
  return (
    <span className={`label inline-flex items-center gap-2 ${className}`}>
      <span aria-hidden="true" className={`size-2 rounded-full border border-current ${dot[status]}`} />
      {label ?? statusLabel[status]}
    </span>
  );
}
