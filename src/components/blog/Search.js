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
import styled from 'styled-components'
import config from '../../../config/BlogConfig'

const StyledHit = styled.div`
    padding: .5em 0 0 0;
    position: relative;
    font-size: 1.2em;
    display: block;
    width: 100%;
    color: #666;
    &::before {
      position: absolute;
      top: .5em;
      left: .1em;
      color: #709425;
    },
    & span {
      font-weight: 300;
      display: block;
      font-size: .9em;
      margin: .2em 0 0 0;
    }
  }
`

const Hit = ({ hit }) => (
  <StyledHit>
    <Link to={`${hit.fields.slug}`}>
      {moment(hit.frontmatter.date).format('YYYY-MM-DD ')}
      {hit.frontmatter.title}
    </Link>
  </StyledHit>
)

const StyledSearch = styled.div`
  margin-top: -1em;

  .ais-SearchBox {
    width: 100%;
  }
  .ais-SearchBox-form {
    position: relative;
    border-bottom: 1px solid #aaa;
    display: flex;
    justify-content: space-between;
  }
  .ais-SearchBox-input {
    border: none;
    font-family: 'Open Sans';
    padding: 0.2em;
    font-size: 1.4em;
    flex-grow: 1;
  }
  .ais-SearchBox-submit,
  & .ais-SearchBox-reset {
    background: none;
    border: none;
    fill: #666;
    flex-grow: 0;
  }
  .ais-Stats {
    margin: 0.5em 0 2em 0.3em;
    font-size: 0.9em;
    color: #999;
    display: block;
  }
  .ais-Hits-list {
    list-style: none;
    padding: 0;
  }
  .ais-Pagination-list {
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 0;
  }
  .ais-Pagination-item {
    a,
    & span {
      color: #666;
      font-size: 1.2em;
      display: block;
      padding: 0.5em 0.5em 2em;
      @media (min-width: 1040px) {
        font-size: 1.3em;
        padding: 0.5em 0.7em 0;
      }
    }
    a {
      &:hover {
        color: #709425;
      }
    }
    .ais-Pagination-item--firstPage,
    &.ais-Pagination-item--previousPage,
    &.ais-Pagination-item--nextPage {
      & a,
      & span {
        padding: 0.4em 0.5em 0.6em;
        @media (min-width: 1040px) {
          padding: 0.4em 0.7em 0.6em;
        }
      }
    }
  }
  a {
    font-weight: 400;
  }
`

const SearchPage = () => (
  <div>
    <StyledSearch>
      <br />
      <br />
      <InstantSearch
        appId={config.algoliaAppId}
        apiKey={config.algoliaApiKey}
        indexName={config.algoliaIndexname}
      >
        <SearchBox />
        <Stats />
        <Hits hitComponent={Hit} />
        <Pagination />
      </InstantSearch>
      <a href="https://www.algolia.com/" target="__blank">
        <img
          src="https://www.algolia.com/static_assets/images/v3/shared/logos/algolia/search-by-algolia-light-background-8762ce8b.svg"
          alt="algolia"
          width="250"
        />
      </a>
    </StyledSearch>
  </div>
)

export default SearchPage
