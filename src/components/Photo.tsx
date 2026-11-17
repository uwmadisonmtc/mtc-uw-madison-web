import Image from "next/image";
import { getPhoto } from "@/content/photos";

type Props = {
  /** Slot id from src/content/photos.ts */
  id: string;
  /** CSS aspect-ratio to crop to, e.g. "4 / 3". */
  ratio: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/* A photo cropped to `ratio`. An empty slot shows a plain grey block with a note. */
export function Photo({ id, ratio, sizes, priority, className = "" }: Props) {
  const photo = getPhoto(id);

  if (!photo?.file || !photo.dims) {
    return (
      <div
        style={{ aspectRatio: ratio }}
        className={`flex items-center justify-center bg-grey-light p-4 text-center text-sm text-grey ${className}`}
      >
        Photo to come{photo?.brief ? `: ${photo.brief}` : ""}
      </div>
    );
  }

  return (
    <div style={{ aspectRatio: ratio }} className={`overflow-hidden bg-grey-light ${className}`}>
      <Image
        src={photo.file}
        alt={photo.alt}
        width={photo.dims.width}
        height={photo.dims.height}
        sizes={sizes}
        priority={priority}
        placeholder={photo.dims.blurDataURL ? "blur" : "empty"}
        blurDataURL={photo.dims.blurDataURL}
        style={photo.focus ? { objectPosition: photo.focus } : undefined}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
