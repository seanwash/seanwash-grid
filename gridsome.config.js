// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const GHOST_API_KEY = process.env.GRIDSOME_GHOST_API_KEY
const GHOST_API_URL = process.env.GRIDSOME_GHOST_API_URL

module.exports = {
  siteName: 'Sean Washington',
  siteDescription:
    'Programmer in California. Co-host of Does Not Compute Podcast and CTO at Design Kollective. Interested in Elixir, PostgreSQL, and Vue.js.',
  siteUrl: 'https://seanwash.com',
  titleTemplate: '%s | Sean Washington',

  plugins: [
    {
      use: '@gridsome/source-ghost',
      options: {
        baseUrl: GHOST_API_URL,
        contentKey: GHOST_API_KEY,
        routes: {
          post: '/blog/:year/:month/:day/:slug',
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5,
          },
        },
      },
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: ['@gridsome/remark-prismjs'],
    },
  },
}
