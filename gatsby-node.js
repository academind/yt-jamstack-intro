const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    // Blog post template
    const blogPostPage = path.resolve('./src/templates/blog-post.js')

    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { fields: [frontmatter___releaseDate], order: DESC }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  author
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Fetch all blog posts
        const blogPosts = result.data.allMarkdownRemark.edges

        blogPosts.forEach(blogPost => {
          createPage({
            path: blogPost.node.fields.slug,
            component: blogPostPage,
            context: {
              slug: blogPost.node.fields.slug,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
    })

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}
