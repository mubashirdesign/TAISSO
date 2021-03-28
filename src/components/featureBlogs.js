import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import dayjs from "dayjs"

const FeaturedBlogs = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blog" } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              type
              title
              path
              date
              excerpt
            }
          }
        }
      }
    }
  `)

  return (
    <div className="container">
      <div className="featured__container">
        <h1 className="featured__header margin-bottom-medium">Latest Blogs</h1>
        <div className="featured__blogs">
          {data.allMarkdownRemark.edges.map(post => (
            <a
              href={post.node.frontmatter.path}
              className="featured__blog"
              key={post.node.id}
            >
              <p className="featured__blog--date">
                {dayjs(post.node.frontmatter.date).format("MMMM D YYYY")}
              </p>
              <h3 className="featured__blog--title">
                {post.node.frontmatter.title}
              </h3>

              <p className="featured__blog--excerpt">
                {post.node.frontmatter.excerpt}
              </p>
              <br />
              <h4>Read more...</h4>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
export default FeaturedBlogs
