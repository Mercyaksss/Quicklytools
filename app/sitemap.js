export default function sitemap() {
  const baseUrl = 'https://mytools.com'; // Replace with your domain
  const currentDate = new Date().toISOString().split('T')[0];

  const pages = [
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/privacy-policy`,
      lastmod: currentDate,
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/tools/age-calculator`,
      lastmod: currentDate,
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/tools/days-between-dates`,
      lastmod: currentDate,
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/tools/word-counter`,
      lastmod: currentDate,
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/tools/password-generator`,
      lastmod: currentDate,
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/tools/bmi-calculator`,
      lastmod: currentDate,
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/tools/loan-calculator`,
      lastmod: currentDate,
      priority: 0.9,
    },
  ];

  return pages.map((page) => ({
    url: page.loc,
    lastModified: new Date(page.lastmod),
    priority: page.priority,
  }));
}