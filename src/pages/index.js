import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Ok, today I start learning React</h1>
        <p>This is my first website built with React and Gatsby. This is the hero banner and a pretty stupid text in it.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
