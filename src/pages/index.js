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
    <div className="container">
      <div className="banner__content">
        <div className="banner__content--text">
          <h1 className="banner__header impala-font">
            tai<span>SS</span>o
          </h1>
          <h2 className="impala-font">
            Toronto Area <span>Impala SS</span> owners
          </h2>
          <p>Join us at facebook group</p>
        </div>
        <div className="banner__content--image--container">
          <StaticImage src="../images/imp.png" />
        </div>
      </div>
      <TorontoIcon />
    </div>
    <div className="container">
      <div className="banner__content--text">
        <h1 className="aboutus__header impala-font">Who We Are</h1>
        <p>
          We are a bunch of b-body enthuisasts in the Southern Ontario Region
        </p>
        <StaticImage src="../images/imp2ss.png" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
