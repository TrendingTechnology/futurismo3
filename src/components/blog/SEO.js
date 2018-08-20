import React from 'react'
import Helmet from 'react-helmet'
import urljoin from 'url-join'
import config from '../../../config/BlogConfig'

const SEO = props => {
  const { data } = props
  const postTitle = ((data || {}).frontmatter || {}).title
  const postDescription = ((data || {}).frontmatter || {}).description
  const postImage = ((data || {}).frontmatter || {}).image
  const postSlug = ((data || {}).fields || {}).slug
  const postDate = ((data || {}).frontmatter || {}).date

  const title = postTitle
    ? `${postTitle} | ${config.siteTitleShort}`
    : `${config.siteTitle} | ${config.siteSubtitle}`
  const description = postDescription || config.siteDescription
  const image = postImage || urljoin(config.siteUrl, config.siteImage)
  const url = postSlug ? urljoin(config.siteUrl, postSlug) : config.siteUrl
  const date = postDate || ''

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.siteUrl,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ]

  if (postTitle) {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': url,
              name: title,
              image,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: config.siteUrl,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        headline: title,
        image,
        description,
        author: config.userName,
        datePublished: date,
        publisher: {
          '@type': 'Organization',
          '@id': config.siteUrl,
          name: config.siteTitle,
          logo: {
            '@type': 'ImageObject',
            url: urljoin(config.siteUrl, config.favicon),
            width: 30,
            height: 30,
          },
        },
        dateModified: date,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url,
        },
      }
    )
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: config.siteLanguage,
        prefix: 'og: http://ogp.me/ns#',
      }}
    >
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="fb:app_id" content={config.facebookAppId} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.userNameTwitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO
