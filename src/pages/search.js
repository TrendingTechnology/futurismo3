import React from 'react'
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Stats,
} from 'react-instantsearch-dom'
import Link from 'gatsby-link'
import moment from 'moment'
import Layout from '../components/blog/layout'

import 'instantsearch.css/themes/reset-min.css'

const Hit = ({ hit }) => (
  <Link to={`${hit.fields.slug}`}>
    {moment(hit.frontmatter.date).format('YYYY-MM-DD ')}
    {hit.frontmatter.title}
  </Link>
)

const SearchPage = () => (
  <div>
    <Layout>
      <h2>Search</h2>
      <InstantSearch
        appId="1XCOHKDD5L"
        apiKey="431167421af36a57af839c2196b1ff78"
        indexName="futurismo"
      >
        <SearchBox />
        <Stats />
        <img
          src="https://www.algolia.com/static_assets/images/v3/shared/logos/algolia/search-by-algolia-light-background-8762ce8b.svg"
          alt="algolia"
        />
        <Hits hitComponent={Hit} />
        <Pagination />
      </InstantSearch>
    </Layout>
  </div>
)

export default SearchPage
