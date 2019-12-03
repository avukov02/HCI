/** @jsx jsx */
import React from "react"
//import { Link } from "gatsby"

// ne triba jer cemo dodat u layout: import Navigation from "../components/navigation"
//importamo layout
import Layout from "../components/layout"
import { useThemeUI, jsx } from "theme-ui"
//import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import Sigurna from "../components/sigurna"

/*
const menuItems=[ //niz u kojem su svi linkovi
  {
    text:"Naslovna",
    link:"/"
  },
  {
    text:"Udomi",
    link: "/udomi",
  },
  {
    text:"Trebamo vas",
    link: "/trebamovas",
  },
  {
    text:"O nama",
    link: "/onama",
  },
  {
    text:"Blog",
    link: "/blog",
  },

]
*/

const IndexPage = ({ data }) => {
  const { slika } = data
  return (
    <Layout>
      <SEO title="Sigurna Kućica" />
      <BackgroundImage
        fluid={slika.sharp.fluid}
        style={{
          height: "430px",
          margin: "-14px -8px 0px -8px",
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
          <p
            sx={{
              color: "white",
              fontSize: "40px",
              position: "absolute",
              left: "120px",
              top: "160px",
            }}
          >
            PRUŽI MI DOM
          </p>
          <p
            sx={{
              color: "white",
              fontSize: "30px",
              padding: "4px",
              position: "absolute",
              left: "120px",
              top: "230px",
              border: "2px solid white",
            }}
          >
            Udomi
          </p>
        </div>
      </BackgroundImage>

      <Sigurna />

      <div
        style={{
          display: "flex",
          height: "400px",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "#78758E", fontSize: "30px", marginTop: "10px" }}>
          Najnovije s bloga
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    slika: file(relativePath: { eq: "background/pas22.jpg" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 1920, traceSVG: { color: "#c3dafe" }) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

//<Img> kompontenta za unos slika, blura ih...
//map fja podrzava js array, za svaki element niza primjeni funkciju koju zadamo i vrati novi array s primjenjenom fjom

//viticaste zagrade tribaju jer pisemo js kod unutar ovih tagova
//<ul>
//{
//  menuItems.map(menuItem => (
//  <li>
// <Link to={menuItem.link}>{menuItem.text}</Link>
//  </li>
//  )) }
//</ul>
//destrukturiranje primjenjeno gori , a mozemo i bez to je ovo povise
//zelimo header pa od tog napravimo komponentu koju cemo izdvojiti, npr navigation komponenta i ukljucimo je na sve str
// ako dodamo npr index.modules.css i layout.modules.css onda mozemo imati iste nazive klasa u oba file-a
//podatke iz baze uzimamo isto preko graphql-a
//gatsby-source-pg za  bazu plugin
//postgraphile izgenerira api automatski i upite radimo graphql-om a on napravi svoje upite i vraca podatke
//unutar pages mozemo koristit page query, ali za sve sta je van pages radimo staticni query kod graphql upita
//npm install ime plugina
//prettier instalirat
