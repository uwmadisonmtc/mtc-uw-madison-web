import type { MetadataRoute } from "next";
import { nav, site } from "@/content/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...nav.map((n) => n.href)].map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: path === "/events" || path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
