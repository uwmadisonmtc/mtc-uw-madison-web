import type { NextConfig } from "next";

/* The site used to have separate pages. Old addresses now lead to the matching section. */
const moved: Record<string, string> = {
  "/about": "/#about",
  "/projects": "/#projects",
  "/events": "/#events",
  "/get-involved": "/#join",
  "/contact": "/#join",
};

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  redirects() {
    return Object.entries(moved).map(([source, destination]) => ({
      source,
      destination,
      permanent: false,
    }));
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
