import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aurex.co";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/request-card`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
  ];
}
