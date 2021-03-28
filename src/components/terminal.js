import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Terminal = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { type: { eq: "terminal" } }) {
        id
        html
      }
    }
  `)

  return (
    <div className="terminal">
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
  )
}

export default Terminal
