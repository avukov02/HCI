/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

export default ({ posts }) => {
  const postsList = posts.map(({ post }) => {
    const { id, excerpt } = post
    const { title, date, slug } = post.frontmatter
    return (
      <section key={id} sx={{ mb: [3, 4] }}>
        <Styled.h3 sx={{ mb: 1 }}>
          <Styled.a as={Link} to={`/blog/${slug}`}>
            {title}
          </Styled.a>
        </Styled.h3>
        <span sx={{ fontWeight: "400", fontSize: "1.1em", color: "#a0aec0" }}>
          {date}
        </span>
        <Styled.p sx={{ m: 0 }}>{excerpt}</Styled.p>
      </section>
    )
  })

  return postsList
}