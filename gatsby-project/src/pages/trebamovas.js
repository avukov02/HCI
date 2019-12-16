import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PozadinskaSlika from "../components/pozadinskaslika"

const trebamovas = () => {
  return (
    <Layout>
      <SEO title="Trebamo vas" />
      <PozadinskaSlika naziv={"Trebamo vas"}/>
    </Layout>
  )
}

export default trebamovas
