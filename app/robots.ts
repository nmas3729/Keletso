import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isPrototype = (process.env.VITE_PROTOTYPE_MODE ?? process.env.NEXT_PUBLIC_VITE_PROTOTYPE_MODE ?? "true") === "true";

  return {
    rules: isPrototype
      ? {
          userAgent: "*",
          disallow: "/",
        }
      : {
          userAgent: "*",
          allow: "/",
        },
    sitemap: "https://www.keletsoprototype.com/sitemap.xml",
  };
}
