import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const dataPath = resolve(root, "src/data.js");
const sitemapPath = resolve(root, "public/sitemap.xml");
const baseUrl = "https://nikunjmathur.vercel.app";

const dataSource = readFileSync(dataPath, "utf8");
const slugMatches = [...dataSource.matchAll(/slug:\s*"([^"]+)"/g)];
const slugs = [...new Set(slugMatches.map((match) => match[1]))];
const lastmod = new Date().toISOString().split("T")[0];

const urls = [
  {
    loc: `${baseUrl}/`,
    changefreq: "weekly",
    priority: "1.0",
  },
  ...slugs.map((slug) => ({
    loc: `${baseUrl}/projects/${slug}`,
    changefreq: "monthly",
    priority: "0.8",
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(sitemapPath, xml, "utf8");
console.log(`Sitemap generated with ${urls.length} URLs at ${sitemapPath}`);
