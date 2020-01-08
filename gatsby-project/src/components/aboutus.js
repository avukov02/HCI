/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"
import useMediaQuery from "react-use-media-query-hook"

function renderImage({ file }) {
  return <Img fluid={file.childImageSharp.fluid} />
}

const About = () => {
  const isLarge = useMediaQuery("(min-width: 900px)")
  const isnotLargeatAll = useMediaQuery("(max-width: 900px,min-width:600px)")
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "0px -8px 20px -8px",
        padding: "30px 0 30px 0",
      }}
    >
      <div
        style={{
          fontSize: isLarge ? "20px" : "18px ",
          color: "#A8A7AF",
          margin: isLarge
            ? "0 150px 0px 150px"
            : isnotLargeatAll
            ? "0 50px 70px 50px"
            : "0 50px 70px 50px",
          letterSpacing: "1px",
          lineHeight: "1.8",
        }}
      >
       <p style={{textAlign: "center"}}> Naša udruga pomaže napuštenim i nezbrinutim životinjama s područja
        Velike Gorice i pomažemo udomljavati pse iz skloništa. S obzirom da
        preuzimamo i pse na skrb do udomljenja i najmanja donacija omogućuje nam
        rad i svakodnevnu brigu o njima. Budite uz nas.
        </p>
        <p style={{textAlign: "center"}}>
        Račun za donacije: HR6723600001102587785, ZABAHR2X
        </p>
        <p style={{textAlign: "center"}}>
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
          color: "#A8A7AF",
          margin: isLarge
            ? "0 150px 0px 150px"
            : isnotLargeatAll
            ? "0 50px 70px 50px"
            : "0 50px 70px 50px",
          letterSpacing: "1px",
          lineHeight: "1.8",
        }}
      >
        <ul style={{ textAlign: "left", listStylePosition: "inside" }}>
          <p>Ciljevi i aktivnosti udruge Sigurna kućica:</p>
          <li>briga za napuštene i neželjene životinje</li>
          <li>poticanje udomljavanja i odgovornog vlasništva</li>
          <li>sprečavanje zlostavljanja životinja</li>
          <li>
            razvijanje pozitivnog odnosa prema životinjama i promicanje humanog
            postupanja prema njima
          </li>
          <li>
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
