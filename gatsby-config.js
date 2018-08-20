const config = require('./config/BlogConfig')

const over10k =
  '(1752|1370|516|1814|1998|1985|1291|1651|1376|1375|1355|1352|1313|1363|1392|1289|1295|1740|1283|1391|1364|1220|1818|2064|1205|1330|1610|1179|6950|2427|2700|2849|2177|2514|2439|2866|2200|2745|2360|2273|2091|2165|2795|2213|2750|2467|2538|2349|2259|2530|2449|2490|2355|2462|2525|2277|2789|2209|2872|2488|2266|2271|2527|2596|2628|2482|2768|2403|2680|2326|2226|2623|2330|2417|2868|2523|2354|2510|2101|2586|2604|2862|2414|2545|2503|2805|2675|2435|2678|2843|2682|2730|5842|5997|6016|5742|5921|5783|6755|6254|6037|6290|6834|6389|6564|6721|6039|6490|6378|6440|6718|6761|6736|6820|6166|6481|6682|6637|6445|6766|6285|6106|6828|2888|2935|5367|5158|5552|4287|3007|5341|3950|3071|5146|4739|5692|2950|2974|2910|5558|2940|452|805|412|392|172|798)'

const query = `{
  algolia: allMarkdownRemark(filter: {frontmatter: {url: {regex: "/^(?!.*${over10k}).*$/"}}}) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        internal {
         content
        }
        frontmatter {
          title
          description
          tags
          date
        }
      }
    }
  }
  algolia2: allMarkdownRemark(filter: {frontmatter: {url: {regex: "/${over10k}/"}}}) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        excerpt
        frontmatter {
          title
          description
          tags
          date
        }
      }
    }
  }
  algolia3: allMarkdownRemark(filter: {frontmatter: {size: {eq: true}}}) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        excerpt
        frontmatter {
          title
          description
          tags
          date
        }
      }
    }
  }
  algolia4: allMarkdownRemark(filter: {frontmatter: {size: {eq: false}}}) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        internal {
          content
        }
        frontmatter {
          title
          description
          tags
          date
        }
      }
    }
  }
}`

const queries = [
  {
    query,
    transformer: ({ data }) => data.algolia.edges.map(({ node }) => node),
  },
  {
    query,
    transformer: ({ data }) => data.algolia2.edges.map(({ node }) => node),
  },
  {
    query,
    transformer: ({ data }) => data.algolia3.edges.map(({ node }) => node),
  },
  {
    query,
    transformer: ({ data }) => data.algolia4.edges.map(({ node }) => node),
  },
]

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages/`,
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
          {
            resolve: `gatsby-remark-responsive-image`,
            options: {
              maxWidth: 590,
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
    // `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-purgecss`, algoliaが動かなくなった
    /*
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Sawarabi Gothic`],
      },
    },
    */

    /* image */
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    /* SEO */
    /*
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
    */
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: config.siteUrl,
      },
    },
    `gatsby-plugin-fastclick`,

    /* Netlify */
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*.html': [`Cache-Control: public, max-age=0, must-revalidate`],
          '/static/*': [`Cache-Control: public,max-age=31536000,immutable`],
          '/*.js': [`Cache-Control: public, max-age=0, must-revalidate`],
        },
      },
    },
    /* `gatsby-plugin-netlify-cache`, */
    /* `gatsby-plugin-netlify-cms`, */

    /* PWA */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-nprogress`,

    /* Others */
    /* 
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: config.algoliaAppId,
        apiKey: config.algoliaApiKey,
        indexName: config.algoliaIndexname,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    */
    // `gatsby-plugin-twitter`,
  ],
}
