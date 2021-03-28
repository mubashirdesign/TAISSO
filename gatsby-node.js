const path = require("path")

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const postTemplate = path.resolve("src/templates/blog.js")

  return graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              type
              date
              excerpt
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
}
