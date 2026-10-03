// Last edited: 2026-10-03 13:20 CDT
import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/siteConfig";


export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/*",
          "/admin/*",
          "/_next/*",
          "/*.json$",
          "/cdn-cgi/*",
        ]
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
