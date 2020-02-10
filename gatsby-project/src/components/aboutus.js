/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"
import useMediaQuery from "@material-ui/core/useMediaQuery"

function renderImage({ file }) {
  return <Img fluid={file.childImageSharp.fluid} />
}

const About = () => {
  const isLarge = useMediaQuery("(min-width: 900px)")
  const isnotLargeatAll = useMediaQuery("(max-width: 900px,min-width:600px)")
  const isMobile = useMediaQuery("(min-width:400px)")
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        margin: isLarge
          ? "70px 150px 30px 150px"
          : isnotLargeatAll
          ? "70px 50px 70px 50px"
          : isMobile
          ? "60px 40px 70px 40px"
          : "60px 30px 70px 30px",
      }}
    >
      <div
        style={{
          fontSize: isLarge ? "20px" : "18px ",
          color: "#A8A7AF",
          letterSpacing: "1px",
          lineHeight: "1.8",
        }}
      >
        <p style={{ textAlign: "left", color: "#898893", marginTop: "-20px" }}>
          {" "}
          Naša udruga pomaže napuštenim i nezbrinutim životinjama s područja
          Velike Gorice i pomažemo udomljavati pse iz skloništa. S obzirom da
          preuzimamo i pse na skrb do udomljenja i najmanja donacija omogućuje
          nam rad i brigu o njima. Budite uz nas.
        </p>
        <p style={{ textAlign: "left", color: "#78758E", marginTop: "-10px" }}>
          Račun za donacije: HR6723600001102587785, ZABAHR2X
        </p>
        <p style={{ textAlign: "left", color: "#78758E", marginTop: "-20px" }}>
          paypal: sigurnakucica@gmail.com
        </p>
      </div>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          position: "relative",
          minWidth: "250px",
          minHeigh: "100px",
          alignSelf: "center",
        }}
      >
        <StaticQuery
          query={graphql`
            query {
              file(relativePath: { eq: "images/sigkuc1.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={renderImage}
        />
      </div>
      <div
        style={{
          fontSize: isLarge ? "20px" : "18px ",
          color: "#898893",
          letterSpacing: "1px",
          lineHeight: "1.8",
          marginLeft: "-15px",
        }}
      >
        <ul
          style={{
            textAlign: "left",
            listStylePosition: "inside",
            textIndent: "-1.5em",
          }}
        >
          <p style={{ color: "#78758E" }}>
            Ciljevi i aktivnosti udruge Sigurna kućica:
          </p>
          <li
            style={{
              marginBottom: "5px",
            }}
          >
            briga za napuštene i neželjene životinje
          </li>
          <li style={{ marginBottom: "5px" }}>
            poticanje udomljavanja i odgovornog vlasništva
          </li>
          <li style={{ marginBottom: "5px" }}>
            sprečavanje zlostavljanja životinja
          </li>
          <li style={{ marginBottom: "5px" }}>
            razvijanje pozitivnog odnosa prema životinjama i promicanje humanog
            postupanja prema njima
          </li>
          <li style={{ marginBottom: "5px" }}>
            razvijanje kulture brige za slabe, nemoćne, nezaštićene i
            neprihvaćene životinje
          </li>
          <li>
            edukacija građana i promicanje aktivnog volontiranja i druženja sa
            životinjama u skloništu.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About
