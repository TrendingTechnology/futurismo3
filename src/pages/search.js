import React from 'react'
import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
  RefinementList,
  Pagination,
  CurrentRefinements,
  ClearRefinements,
} from 'react-instantsearch-dom'
import Layout from '../components/blog/layout'

function Product({ hit }) {
  return (
    <div style={{ marginTop: '10px' }}>
      <span className="hit-name">
        <Highlight attribute="name" hit={hit} />
      </span>
    </div>
  )
}

function Search() {
  return (
    <div className="container-algolia">
      <CurrentRefinements />
      <ClearRefinements />
      <SearchBox />
      <RefinementList attribute="category" />
      <Hits hitComponent={Product} />
      <Pagination />
    </div>
  )
}

const SearchPage = () => (
  <div>
    <Layout>
      <InstantSearch
        appId="1XCOHKDD5L"
        apiKey="431167421af36a57af839c2196b1ff78"
        indexName="futurismo"
      >
        <Search />
      </InstantSearch>
    </Layout>
  </div>
)

export default SearchPage
