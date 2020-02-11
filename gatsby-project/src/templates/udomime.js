/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import PozadinskaSlika from "../components/pozadinskaslika"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Title from "../components/title"
import BlogNav, { leftArrow, rightArrow } from "../components/blog-navigation"
import Img from "gatsby-image"
import useMediaQuery from "@material-ui/core/useMediaQuery"

export default ({ pageContext, data }) => {
  const { pas } = data
  const { previous, next } = pageContext
  const isLarge = useMediaQuery("(min-width: 640px)")

  return (
    <Layout>
      <SEO title={pas.frontmatter.name} />
      <PozadinskaSlika naziv={"Udomi"} />

      <BlogNav.Previous style={{marginTop:"-15px"}}>
          {(next || previous) && (
            <BlogNav.Link to={`/udomi/`}>
              {leftArrow} {'Nazad na udomi'}
            </BlogNav.Link>
          )}
        </BlogNav.Previous>

      <div
        style={{
          display: "block",
          width: "80%",
          margin: isLarge ? "-60px auto 0 auto" : "-30px auto 0 auto"
        }}
      >
        <Title>{pas.frontmatter.name}</Title>
        <div>
          <MDXRenderer>{pas.body}</MDXRenderer>
        </div>
        <div>
          <Img
            style={{
              maxWidth: "316px",
              maxHeight: "344px",
            }}
            fluid={pas.frontmatter.image.childImageSharp.fluid}
          />
        </div>
      </div>

      <BlogNav>
        <BlogNav.Previous>
          {previous && (
            <BlogNav.Link to={`/udomi/${previous.frontmatter.slug}`}>
              {leftArrow} {previous.frontmatter.name}
            </BlogNav.Link>
          )}
        </BlogNav.Previous>

        <BlogNav.Next>
          {next && (
            <BlogNav.Link to={`/udomi/${next.frontmatter.slug}`}>
              <span>
                {next.frontmatter.name} {rightArrow}
              </span>
            </BlogNav.Link>
          )}
        </BlogNav.Next>
      </BlogNav>
    </Layout>
  )
}

export const query = graphql`
  query Udomi($slug: String) {
    pas: mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        slug
        name
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`
