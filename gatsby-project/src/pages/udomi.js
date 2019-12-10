import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PozadinskaSlika from "../components/pozadinskaslika"

const udomi = () => {
  return (
    <Layout>
      <SEO title="Udomi" />
      <PozadinskaSlika naziv={"Udomi"}/>
      <Link to="/">Idi na naslovnu</Link>
    </Layout>
  )
}

export default udomi
