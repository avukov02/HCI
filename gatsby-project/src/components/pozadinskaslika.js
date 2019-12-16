import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, StaticQuery } from "gatsby"
import useMediaQuery from "react-use-media-query-hook"

const PozadinskaSlika = ({ naziv }) => {
  const isLarge = useMediaQuery('(min-width: 700px)');
  const isNotLarge =useMediaQuery('(min-width: 500px)');
  const IsSmall=useMediaQuery('(min-width: 380px)');
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "images/pas3.jpeg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <BackgroundImage
          fluid={data.file.childImageSharp.fluid}
          style={{
            height: "300px",
            margin: "-14px -8px 20px -8px",
            position: "relative",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
            }}
          >
            <h1
              style={{
                position: "absolute",
                left: isNotLarge ? "10%" : "5%",
                top: "30%",
                m: 0,
                fontSize: isLarge ? "40px" : IsSmall ? "33px" : "28px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {naziv}
            </h1>
          </div>
        </BackgroundImage>
      )}
    />
  )
}

export default PozadinskaSlika
