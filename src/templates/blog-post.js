import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Comments from '../components/comments/comments'
import './blog-post.css'

const IndexPage = props => {
  const post = props.data.post

  return (
    <Layout>
      <div className="post__data">
        <h1 className="post__title">{post.frontmatter.title}</h1>
        <h2 className="post__metadata">By {post.frontmatter.author}</h2>
      </div>
      <div
        className="post__content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <Comments postId={post.id} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query GetBlogPost($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
      }
    }
  }
`
