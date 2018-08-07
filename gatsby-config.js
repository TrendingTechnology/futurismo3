module.exports = {
  siteMetadata: {
    title: `Futurismo`,
    description: 'beating the averages',
    siteUrl: `https://futurismo.biz`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // name: `static`,
        path: `${__dirname}/static/img/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },

    /* Markdown */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          `gatsby-remark-autolink-headers`,
        ],
      },
    },

    /* CSS */
    // `gatsby-plugin-purify-css`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,

    /* image */
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    /* SEO */
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-16438908-2',
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://futurismo.biz`,
      },
    },

    /* Netlify */
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify`,
    /* `gatsby-plugin-netlify-cms`, */

    /* PWA */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Futurismo',
        short_name: 'Futurismo',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
