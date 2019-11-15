import React from "react"
import { Link } from "gatsby"
//import Navigation from "../components/navigation"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"


const Blog = ({ data }) => {
    return(
<Layout>
    <SEO title="Blog"/>
    <h1>Blog</h1>
    {data.allFile.edges.map(({node})=>(
    <Img key={node.id} fluid={node.childImageSharp.fluid}/>
    ))}
    <Link to="/">Index</Link>
</Layout>
    )
}

export default Blog

export const query = graphql`
  {
    allFile(filter: {absolutePath: {regex: "//content/images//"}}) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_tracedSVG
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
