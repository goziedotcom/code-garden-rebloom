import { createServerFileRoute } from "@tanstack/react-start/server";

export const ServerRoute = createServerFileRoute("/sitemap.xml").methods({
  GET: () => {
    const baseUrl = "https://www.officialcodegarden.com";
    const pages = ["", "/about", "/courses", "/contact"];

    const urls = pages
      .map(
        (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${path === "" ? "1.0" : "0.8"}</priority>
  </url>`
      )
      .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  },
});