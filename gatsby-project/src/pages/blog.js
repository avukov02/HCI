import React from "react"
import { Link } from "gatsby"
//import Navigation from "../components/navigation"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const Blog = ({ data }) => {
  const { slika, imageFiles } = data
  return (
    <Layout>
      <SEO title="Blog" />
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
            Blog
          </h1>
        </div>
      </BackgroundImage>

      {imageFiles.images.map(({ image }) => (
        <Img key={image.id} fluid={image.sharp.fluid} />
      ))}
      <Link to="/">Index</Link>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  {
    slika: file(relativePath: { eq: "background/pas3.jpeg" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 1920, traceSVG: { color: "#c3dafe" }) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }

    imageFiles: allFile(
      filter: { absolutePath: { regex: "//content/images//" } }
    ) {
      images: edges {
        image: node {
          id
          base
          sharp: childImageSharp {
            fluid(maxWidth: 400, traceSVG: { color: "#c3dafe" }) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

//tribali kopirat menu items jer ga nemamo ode, a tribamo ga poslat ko arg navigation
//za vise slika je bilo <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid}
//u gridu repeat auto-fill kod grid-template-columns
