/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import PozadinskaSlika from "../components/pozadinskaslika"
import SEO from "../components/seo"
import Layout from "../components/layout"
import BlogExcerpt from "../components/blog-excerpt"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import BlogNav, { leftArrow, rightArrow } from "../components/blog-navigation"
import SearchIcon from "../components/searchicon"

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
  const emptyQuery = ""
  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  })
  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value
    const allposts = posts || []
    // this is how we get all of our posts
    // return all filtered posts
    const filteredData = allposts.filter(({ post }) => {
      // destructure data from post frontmatter
      const { title, date } = post.frontmatter
      const { excerpt } = post
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string
        excerpt.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        date.toLowerCase().includes(query.toLowerCase())
      )
    })
    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts1 = hasSearchResults ? filteredData : posts
  const isLarge = useMediaQuery("(min-width: 730px)")
  const isnotLarge = useMediaQuery("(min-width: 375px)")

  return (
    <Layout>
      <SEO title="Blog" />
      <PozadinskaSlika naziv={"Blog"} />
      <div
        style={{
          marginLeft: isLarge ? "100px" : "30px",
          marginRight: isLarge ? "100px" : "30px",
          position: "relative",
          paddingLeft: "10px",
          marginBottom: "1vh",
          borderTop: "1px solid #78758E",
          borderBottom: "1px solid #78758E",
          transition: "all .2s ease-in-out",
          "&:hover": {
            transform: "scale(1.03)",
          },
        }}
      >
        <input
          type="text"
          aria-label="Search"
          placeholder="Type to filter posts..."
          onChange={handleInputChange}
          sx={{
            marginTop: "5px",
            marginBottom: "5px",
            py: 2,
            paddingLeft: 4,
            marginRight: "20px",
            overflow: "hidden",
            borderWidth: 0,
            color: "text",
            fontSize: 1,
            fontWeight: "medium",
            width: "800px",
            transition: "all .2s ease-in-out",
            "&:hover": {
              transform: "scale(1.01)",
            },
            "&:focus": {
              outline: "none",
              backgroundColor: "rgb(226, 240, 237)",
              maxWidth: isnotLarge ? "200px" : "158px",
            },
          }}
        />
        <div style={{ position: "absolute", left: "18px", top: "50%" }}>
          <SearchIcon
            sx={{
              width: 4,
              height: 4,
              pointerEvents: "none",
              transform: "translateY(-50%)",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "auto auto auto",
          gridColumnGap: "10px",
          justifyItems: "center",
          paddingLeft: isLarge ? "100px" : "30px",
          paddingRight: isLarge ? "100px" : "30px",
        }}
      >
        <BlogExcerpt posts={posts1} />
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
