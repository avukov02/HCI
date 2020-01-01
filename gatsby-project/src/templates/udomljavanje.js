/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import BlogNav, { leftArrow, rightArrow } from "../components/blog-navigation"
import Layout from "../components/layout"
import PozadinskaSlika from "../components/pozadinskaslika"
import SEO from "../components/seo"
import UdomiExcerpt from "../components/udomi-excerpt"

const Udomljavanje = ({ pageContext,data: {
  allMdx: { psi },
},}) => {

  
  const { currentPage, numofPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numofPages
  const previousPage =
    currentPage - 1 === 1 ? "/udomi/" : `/udomi/${(currentPage - 1).toString()}`
  const nextPage = `/udomi/${(currentPage + 1).toString()}`


  return (
    <Layout>
      <SEO title="Udomi" />
      <PozadinskaSlika naziv={"Udomi"}/>
    <div sx={{
        display: "grid",
        gridTemplateColumns:"auto auto auto",
        gridColumnGap: "10px",
        justifyItems:"center",
        paddingLeft: "100px",
        paddingRight: "100px",
        marginBottom:"10px"
      }}>
     <UdomiExcerpt psi={psi} />
    </div>
    <BlogNav>
        <BlogNav.Previous>
          {!isFirst && (
            <BlogNav.Link to={previousPage}>
              {leftArrow} Previous Page
            </BlogNav.Link>
          )}
        </BlogNav.Previous>

        <BlogNav.Next>
          {!isLast && (
            <BlogNav.Link to={nextPage}>Next Page {rightArrow}</BlogNav.Link>
          )}
        </BlogNav.Next>
      </BlogNav>
    </Layout>
  )
}

export default Udomljavanje


export const query = graphql`
query Udomljavanje($skip: Int, $limit: Int ){
  allMdx(filter: {fileAbsolutePath: {regex: "//content/udomi//"}}
  limit: $limit
      skip: $skip
  ) {
   
    psi: edges {
      pas: node {
        id
        frontmatter {
          name
          slug
          image {
            childImageSharp {
              fixed(height: 258, width: 222) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        excerpt(pruneLength: 50)
      }
    }
  }
}
`