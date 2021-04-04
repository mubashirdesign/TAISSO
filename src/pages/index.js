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
      <div className="banner__content--text">
        <p className="banner__header impala-font">
          tai<span>SS</span>o
        </p>
        <p className="impala-font">
          Toronto Area <span>Impala SS</span> owners
        </p>
      </div>
      <div className="banner__content--image--container">
        <StaticImage src="../images/imp.png" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
