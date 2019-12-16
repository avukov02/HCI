import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PozadinskaSlika from "../components/pozadinskaslika"

const udomi = () => {
  return (
    <Layout>
      <SEO title="Udomi" />
      <PozadinskaSlika naziv={"Udomi"}/>
    </Layout>
  )
}

export default udomi
