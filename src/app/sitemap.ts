// Last edited: 2026-10-03 13:20 CDT
import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/siteConfig";

const routes = ["", "/projects", "/research"];

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date().toISOString();
	return routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified }));
}
