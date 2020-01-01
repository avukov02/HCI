/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import PozadinskaSlika from "../components/pozadinskaslika"
import SEO from "../components/seo"
import Layout from "../components/layout"
import BlogExcerpt from "../components/blog-excerpt"
import BlogNav, { leftArrow, rightArrow } from "../components/blog-navigation"

const BlogList = ({
  pageContext,
  data: {
    allMdx: { posts },
  },
}) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const previousPage =
    currentPage - 1 === 1 ? "/blog/" : `/blog/${(currentPage - 1).toString()}`
  const nextPage = `/blog/${(currentPage + 1).toString()}`

  return (
    <Layout>
      <SEO title="Blog" />
      <PozadinskaSlika naziv={"Blog"}/>
      <div style={{display: "grid",
      gridTemplateRows:"auto auto auto",
      gridColumnGap: "10px",
      justifyItems:"center",
      paddingLeft: "100px",
      paddingRight: "100px"}} >
      <BlogExcerpt posts={posts} />
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

export default BlogList

export const query = graphql`
  query BlogList($skip: Int, $limit: Int) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "//content/blog//" }
        frontmatter: { published: { eq: true } }
      }
      limit: $limit
      skip: $skip
    ) {
      posts: edges {
        post: node {
          id
          frontmatter {
            author
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`