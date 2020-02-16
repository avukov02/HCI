/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import Img from "gatsby-image"
import useMediaQuery from "@material-ui/core/useMediaQuery"

export default ({ psi }) => {
  const isnotLargeatAll = useMediaQuery("(min-width: 760px)")
  const isMobile = useMediaQuery("(min-width: 450px)")
  const psiList = psi.map(({ pas }) => {
    const { id, excerpt } = pas
    const { name, image, slug } = pas.frontmatter
    return (
      <Link to={`/udomi/${slug}`} style={{ textDecorationLine: "none" }}>
        <div
          key={id}
          sx={{
            display: "grid",
            gridTemplateRows: "auto auto auto",
            gridColumnGap: "20px",
            gridRowGap: "1px",
            justifyItems: "center",
            padding: "10px",
            textAlign: "center",
            justifyContent: "center",
            border: "2px  solid #9AD1C4",
            marginBottom: "20px",
            transition: "all .2s ease-in-out",
            "&:hover": {
              transform: isMobile? "scale(1.03)":"scale(1)",
            },
          }}
        >
          <Img sx={{ mb: 1 }} fixed={image.childImageSharp.fixed} />
          <p sx={{ ml: 0, mr: 0, mb: 0, color: "#9AD1C4" }}>
            <Styled.a
              as={Link}
              to={`/udomi/${slug}`}
              style={{ fontSize: "large", fontWeight: "bold" }}
            >
              {name}
            </Styled.a>
          </p>
          <p
            sx={{
              color: "#808080",
              mb: 1,
              maxWidth: isnotLargeatAll
                ? "222px"
                : isMobile
                ? "300px"
                : "210px",
            }}
          >
            {excerpt}
          </p>
          <Styled.a as={Link} to={`/udomi/${slug}`}>
            <p sx={{ color: "#9AD1C4" }}>Pročitaj više...</p>
          </Styled.a>
        </div>
      </Link>
    )
  })

  return psiList
}
