import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const isPrototype = (process.env.VITE_PROTOTYPE_MODE ?? process.env.NEXT_PUBLIC_VITE_PROTOTYPE_MODE ?? "true") === "true";

  if (isPrototype) {
    return [];
  }

  const baseUrl = "https://www.keletsoprototype.com";

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/request-quote`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
