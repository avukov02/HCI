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

export default ({ pageContext, data }) => {
  const { pas } = data
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO title={pas.frontmatter.name} />
      <PozadinskaSlika naziv={"Udomi"}/>
      <div style={{
        display:"block",
        width:"80%",
        margin: "0 auto"
        
      }}>
      <Title>{pas.frontmatter.name}</Title>
      <div>
      <MDXRenderer>{pas.body}</MDXRenderer>
      </div>
      <div>
          <Img fixed={pas.frontmatter.image.childImageSharp.fixed}/>
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
    pas: mdx(frontmatter: {slug: {eq: $slug}}) {
      id
      frontmatter {
        slug
        name
        image {
          childImageSharp {
            fixed(width: 316, height: 344) {
                ...GatsbyImageSharpFixed
            }
          }
        }
      }
      body
    }
  }
  
`