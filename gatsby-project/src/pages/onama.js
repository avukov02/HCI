import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/aboutus"
import PozadinskaSlika from "../components/pozadinskaslika"

const onama = () => {

  return (
    <Layout>
      <SEO title="O nama" />
      <PozadinskaSlika naziv={"O nama"}/>
      <About/>
      
      <Link to="/">Idi na naslovnu</Link>
    </Layout>
  )
}

export default onama


