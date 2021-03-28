import React from "react"

import Banner from "../components/banner"
import Layout from "../components/layout"

import Introduction from "../components/introduction"
import FeaturedBlogs from "../components/featureBlogs"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner />
      <Introduction />
      <FeaturedBlogs />
    </Layout>
  )
}

export default IndexPage
