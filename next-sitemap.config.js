/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://andrew-web.ru',
  generateRobotsTxt: true,
  output: "standalone",

  additionalPaths: async (config) => {
    const pagesResponse = await fetch("https://serv1.andrew-web.ru/api/pages");
    const articlesResponse = await fetch("https://serv1.andrew-web.ru/api/articles");

    let paths = [];

    const baseConfigurationLocation = {
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString()
    }

    if (pagesResponse.ok) {
      const pages = await pagesResponse.json();
      pages.data.map((page) => {
        paths.push({loc: config.siteUrl + page.attributes.path, ...baseConfigurationLocation});
      });
    }
    if (articlesResponse.ok) {
      const posts = await articlesResponse.json();
      posts.data.map((post) => {
        paths.push({loc: config.siteUrl + "/blog/" + post.attributes.slug, ...baseConfigurationLocation});
      });
    }
    console.log('paths: ', paths);
    return paths;
  }
}