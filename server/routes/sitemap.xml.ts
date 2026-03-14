export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event);
  const siteUrl = (
    config.public.siteUrl || 'https://bintangmurtifandy.id'
  ).replace(/\/$/, '');

  const now = new Date().toISOString();
  const routes = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/about', changefreq: 'monthly', priority: '0.8' },
    { path: '/portofolio', changefreq: 'weekly', priority: '0.9' },
    { path: '/contact', changefreq: 'monthly', priority: '0.7' },
  ];

  const items = routes
    .map(
      (route) => `
  <url>
    <loc>${siteUrl}${route.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${items}
</urlset>`;

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8');
  return xml;
});
