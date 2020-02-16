/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import useMediaQuery from "@material-ui/core/useMediaQuery"

export default ({ posts }) => {
  const postsList = posts.map(({ post }) => {
    const { id, excerpt } = post
    const { title, date, slug } = post.frontmatter
    const isLarge = useMediaQuery("(min-width: 500px)")
    return (
      <Link to={`/blog/${slug}`}
      style={{textDecorationLine:"none",
      marginBottom:"2vh",
      }}>
      <section key={id} sx={{ mb: [3, 4] ,
      transition: "all .2s ease-in-out",
      "&:hover": {
        transform: isLarge? "scale(1.03)":"scale(1)",
      }, }}>
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
      </Link>
    )
  })

  return postsList
}
