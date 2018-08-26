import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const WorksPage = ({ fluid }) => (
  <section id="works" className="main style1">
    <div className="grid-wrapper">
      <div className="col-6">
        <header className="major">
          <h2>職務経歴</h2>
        </header>
        <p>
          ⼤学では数学とComputer Science を学びました。 ⼤学卒業後、
          2010年富⼠通コンピュー タテクノロジーズに⼊社し、
          主にストレージシステムの開発に携ってきました。
          C、Javaでのミドルウェアの開発を経験。
          常に新しい技術に対して興味を持ち、 学習が早いと⾃負しております。
          現在はフリーランスのWebエンジニアとして日々学んでいます。
        </p>
        <ul className="actions">
          <li>
            <Link to="/profile/works" className="button">
              More
            </Link>
          </li>
          <li>
            <a href="/resume.pdf" className="button">
              Download Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6">
        <span className="image fit">
          <Img fluid={fluid} alt="works" />
        </span>
      </div>
    </div>
  </section>
)

export default WorksPage
