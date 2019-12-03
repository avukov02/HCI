import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const udomi = ({data}) => {
  const {slika}=data
  return(
  <Layout>
    <SEO title="Udomi"/>
    <BackgroundImage
        fluid={slika.sharp.fluid}
        style={{
          height: "300px",
          margin:"-14px -8px 20px -8px",
          position:"relative"
          
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display:"flex",
          }}
        >
         <h1
              style={{
                position:"absolute",
                left:"180px", 
                top:"100px",
                m: 0,
                fontSize: "40px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Udomi
            </h1>
          </div>
        </BackgroundImage>
    <Link to="/">Idi na naslovnu</Link>

    </Layout>
)
  }


export default udomi

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
  }
  `
