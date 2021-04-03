import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TorontoIcon from "../components/icons/torontoIcon"
import ImpalaIcon from "../components/icons/impalaIcon"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="banner__content">
      <ImpalaIcon />
      <p className="banner__header">
        tai<span>SS</span>o
      </p>
      <p>Coming SSoon</p>
    </div>
    <TorontoIcon />
  </Layout>
)

export default IndexPage
