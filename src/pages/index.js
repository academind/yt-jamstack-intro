import React from 'react'
import { Link } from '@reach/router'
import { graphql } from 'gatsby';

import Layout from '../components/layout'
import './index.css'

const IndexPage = props => {
  const posts = props.data.posts.edges.map(postData => {
    const metadata = postData.node.frontmatter
    return (
      <li key={postData.node.id} className="posts__item">
        <Link to={postData.node.fields.slug}>
          <h2>{metadata.title}</h2>
          <h3>{metadata.author}</h3>
        </Link>
      </li>
    )
  })

  return (
    <Layout>
      <ul className="posts">{posts}</ul>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___releaseDate], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            author
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
