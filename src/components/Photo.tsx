import Image from "next/image";
import { getPhoto } from "@/content/photos";

type Props = {
  /** Slot id from src/content/photos.ts */
  id: string;
  /** CSS aspect-ratio to crop to, e.g. "4 / 5". Omit to keep the original shape. */
  ratio?: string;
  /** Aspect used for the empty placeholder when no ratio is forced. */
  placeholderRatio?: string;
  sizes: string;
  priority?: boolean;
  showCaption?: boolean;
  onDark?: boolean;
  className?: string;
};

export function Photo({
  id,
  ratio,
  placeholderRatio = "3 / 2",
  sizes,
  priority,
  showCaption = true,
  onDark,
  className = "",
}: Props) {
  const photo = getPhoto(id);
  const captionCls = `label mt-2.5 ${onDark ? "text-paper/70" : "text-ink-soft"}`;

  if (!photo?.file || !photo.dims) {
    return (
      <figure className={className}>
        <div
          style={{ aspectRatio: ratio ?? placeholderRatio }}
          className={`hatch flex items-end border border-dashed p-4 ${
            onDark ? "border-paper/40 text-paper/80" : "border-ink/40 bg-paper-deep text-ink-soft"
          }`}
        >
          <p className="label max-w-[28ch]">
            <span className="mb-1 block font-medium text-clay">Photo needed</span>
            {photo?.brief ?? `Unknown photo id "${id}"`}
          </p>
        </div>
      </figure>
    );
  }

  return (
    <figure className={className}>
      <div style={ratio ? { aspectRatio: ratio } : undefined} className="overflow-hidden bg-paper-deep">
        <Image
          src={photo.file}
          alt={photo.alt}
          width={photo.dims.width}
          height={photo.dims.height}
          sizes={sizes}
          priority={priority}
          placeholder={photo.dims.blurDataURL ? "blur" : "empty"}
          blurDataURL={photo.dims.blurDataURL}
          className={ratio ? "h-full w-full object-cover" : "h-auto w-full"}
        />
      </div>
      {showCaption && photo.caption && <figcaption className={captionCls}>{photo.caption}</figcaption>}
    </figure>
  );
}
