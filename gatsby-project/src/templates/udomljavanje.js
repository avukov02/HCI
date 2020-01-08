/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import BlogNav, { leftArrow, rightArrow } from "../components/blog-navigation"
import Layout from "../components/layout"
import PozadinskaSlika from "../components/pozadinskaslika"
import SEO from "../components/seo"
import UdomiExcerpt from "../components/udomi-excerpt"
import useMediaQuery from "react-use-media-query-hook"

const Udomljavanje = ({ pageContext,data: {
  allMdx: { psi },
},}) => {

  const isLarge = useMediaQuery("(min-width: 900px)")
  const isnotLargeatAll = useMediaQuery("(min-width:650px)")
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
        gridTemplateColumns: isLarge ? "auto auto auto" : isnotLargeatAll ? "auto auto" : "auto",
        gridColumnGap: "10px",
        gridRowGap:"10px",
        justifyItems:"center",
        paddingLeft: isLarge ? "100px" : isnotLargeatAll ? "100px" : "20px",
      paddingRight: isLarge ? "100px" : isnotLargeatAll ? "100px" : "20px",
        marginBottom:"10px",
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