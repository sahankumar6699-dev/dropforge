import type { MetadataRoute } from "next";

const routes = ["", "/video", "/pdf", "/image", "/converter"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://dropforge.vercel.app${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
