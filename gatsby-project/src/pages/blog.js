import React from "react"
//import Navigation from "../components/navigation"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PozadinskaSlika from "../components/pozadinskaslika"

const Blog = ({ data }) => {
  const { imageFiles } = data
  return (
    <Layout>
      <SEO title="Blog" />
      <PozadinskaSlika naziv={"Blog"}/>

      {imageFiles.images.map(({ image }) => (
        <Img key={image.id} fluid={image.sharp.fluid} />
      ))}
    </Layout>
  )
}

export default Blog

export const query = graphql`
  {

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
