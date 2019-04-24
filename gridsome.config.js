// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Sean Washington',
  siteDescription:
    'Programmer in California. Co-host of Does Not Compute Podcast and CTO at Design Kollective. Interested in Elixir, PostgreSQL, and Vue.js.',
  siteUrl: 'https://seanwash.com',
  titleTemplate: '%s | Sean Washington',

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        route: '/blog/:year/:month/:day/:slug',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            route: 'blog/tags/:id',
            create: true,
          },
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
