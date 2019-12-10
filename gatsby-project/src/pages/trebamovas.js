import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PozadinskaSlika from "../components/pozadinskaslika"

const trebamovas = () => {
  return (
    <Layout>
      <SEO title="Trebamo vas" />
      <PozadinskaSlika naziv={"Trebamo vas"}/>
      <Link to="/">Idi na naslovnu</Link>
    </Layout>
  )
}

export default trebamovas
