/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default ({ psi }) => {
  const psiList = psi.map(({ pas }) => {
    const { id, excerpt } = pas
    const { name, image, slug } = pas.frontmatter
    return (
        <div
        key={id}
        sx={{
          display: "grid",
          gridTemplateRows:"auto auto auto",
          gridColumnGap: "10px",
          justifyItems:"center",
          padding:"10px",
          textAlign:"center",
          border: "1px  solid #9AD1C4",
          marginBottom:"20px"
        }}
      >
        <Img
            sx={{ mb: 1 }}
            fixed={image.childImageSharp.fixed}
          />
         <p sx={{ ml: 0, mr: 0, mb: 0, color:"#9AD1C4"}}>
         <Styled.a as={Link} to={`/udomi/${slug}`}>
            {name}
          </Styled.a> 
         </p>
          <p sx={{ mb: 1 ,maxWidth:"222px"}}>{excerpt}</p>
          <Styled.a as={Link} to={`/udomi/${slug}`}>
          <p sx={{color:"#9AD1C4"}}>Pročitaj više...</p>
          </Styled.a>
      </div>
    )
  })

  return psiList
}
