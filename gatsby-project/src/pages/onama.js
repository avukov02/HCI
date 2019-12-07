import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import About from "../components/aboutus"

const onama = ({ data }) => {
  const { slika } = data
  return (
    <Layout>
      <SEO title="O nama" />
      <BackgroundImage
        fluid={slika.sharp.fluid}
        style={{
          height: "300px",
          margin: "-14px -8px 20px -8px",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
          }}
        >
          <h1
            style={{
              position: "absolute",
              left: "180px",
              top: "100px",
              m: 0,
              fontSize: "40px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            O nama
          </h1>
        </div>
      </BackgroundImage>
      <About/>
      
      <Link to="/">Idi na naslovnu</Link>
    </Layout>
  )
}

export default onama

export const query = graphql`
  {
    slika: file(relativePath: { eq: "images/pas3.jpeg" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 1920, traceSVG: { color: "#c3dafe" }) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
