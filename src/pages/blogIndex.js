import React from "react"
import Layout from "../components/layout"
import Link from "gatsby-link"
import SEO from "../components/seo"
import dayjs from "dayjs"
const BlogIndex = ({ data }) => (
  <Layout>
    <SEO title="Blogs" />
    <div className="blogIndex">
      <div className="container">
        <div className="container__content">
          <div>
            <h1>Blogs</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container__inner">
          {data.allMarkdownRemark.edges.map(post => (
            <Link
              to={post.node.frontmatter.path}
              className="blogIndex__container"
              key={post.node.id}
            >
              <p className="blogIndex__container--date">
                {dayjs(post.node.frontmatter.date).format("MMMM D YYYY")}
              </p>
              <h3 className="featured__blog--title">
                {post.node.frontmatter.title}
              </h3>

              <p>{post.node.frontmatter.excerpt}</p>
              <h4>Read more...</h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "blog" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            type
            excerpt
            date
          }
        }
      }
    }
  }
`

export default BlogIndex
