import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Just in case you add an admin area later
    },
    sitemap: "https://chayilfoundingnetwork.com/sitemap.xml",
  };
}
