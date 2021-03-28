import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"
import dayjs from "dayjs"
import SEO from "../components/seo"
require("prismjs/themes/prism-okaidia.css")

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="blog">
        <div className="container">
          <div className="container__content">
            <div>
              <h1>{post.frontmatter.title}</h1>
              <h3>{post.frontmatter.excerpt}</h3>
              <p style={{ marginTop: "2rem" }}>
                {dayjs(post.frontmatter.date).format("MMMM D YYYY")}
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="container__inner">
            <Link className="button" to="/blogIndex">
              &larr;Back
            </Link>

            <div
              style={{ marginTop: "2rem" }}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        excerpt
        date
      }
    }
  }
`
