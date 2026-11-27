import type { MetadataRoute } from "next";
import { nfcHunt } from "@/content/nfcHunt";
import { site } from "@/content/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}${nfcHunt.path}`, changeFrequency: "weekly", priority: 0.8 },
  ];
}
