/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import PozadinskaSlika from "../components/pozadinskaslika"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Title from "../components/title"
import BlogNav, { leftArrow, rightArrow } from "../components/blog-navigation"

export default ({ pageContext, data }) => {
  const { post } = data
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <PozadinskaSlika naziv={"Blog"} />
      <div
        style={{
          display: "block",
          width: "80%",
          margin: "0 auto",
        }}
      >
        <Title>{post.frontmatter.title}</Title>
        <span sx={{ fontWeight: "400", fontSize: "1.1em", color: "#a0aec0" }}>
          {post.frontmatter.date}
        </span>
        <div>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </div>

      <BlogNav>
        <BlogNav.Previous>
          {previous && (
            <BlogNav.Link to={`/blog/${previous.frontmatter.slug}`}>
              {leftArrow} {previous.frontmatter.title}
            </BlogNav.Link>
          )}
        </BlogNav.Previous>

        <BlogNav.Next>
          {next && (
            <BlogNav.Link to={`/blog/${next.frontmatter.slug}`}>
              <span>
                {next.frontmatter.title} {rightArrow}
              </span>
            </BlogNav.Link>
          )}
        </BlogNav.Next>
      </BlogNav>
    </Layout>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY")
        description
        slug
        title
      }
      body
    }
  }
`
