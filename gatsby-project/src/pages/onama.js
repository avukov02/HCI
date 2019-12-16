import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/aboutus"
import PozadinskaSlika from "../components/pozadinskaslika"

const onama = () => {
  return (
    <Layout>
      <SEO title="O nama"/>
      <PozadinskaSlika naziv={"O nama"} />
      <About/>
    </Layout>
  )
}

export default onama
