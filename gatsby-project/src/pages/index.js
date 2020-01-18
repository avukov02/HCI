/** @jsx jsx */
//import { Link } from "gatsby"

// ne triba jer cemo dodat u layout: import Navigation from "../components/navigation"
//importamo layout
import Layout from "../components/layout"
import { jsx } from "theme-ui"
//import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import ImageGallery from "react-image-gallery"
import Sigurna from "../components/sigurna"
import "../components/image-gallery.css"
import BlogExcerpt from "../components/blog-excerpt"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { IdentityContextProvider } from "react-netlify-identity-widget"
import "../components/netlify-identity.css"
/*
const menuItems=[ //niz u kojem su svi linkovi
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
  const posts = data.second.posts
  const isLarge = useMediaQuery("(min-width: 900px)")
  const isnotLargeatAll = useMediaQuery("(min-width: 650px)")
  const identity = "https://modest-goodall-3c77be.netlify.com"
  return (
    <Layout>
      <IdentityContextProvider url={identity}>
        <SEO title="Sigurna Kućica" />
        <ImageGallery
          items={[
            data.first.edges[0].node.childImageSharp.fluid,
            data.first.edges[1].node.childImageSharp.fluid,
            data.first.edges[2].node.childImageSharp.fluid,
          ]}
          autoPlay={true}
          showPlayButton={false}
          showBullets={false}
          showFullscreenButton={false}
          showThumbnails={false}
          style={{}}
        />

        <Sigurna />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: "#78758E",
              fontSize: "30px",
              marginTop: isLarge ? "10px" : "-20px",
              marginBottom: "10px",
            }}
          >
            Najnovije s bloga
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isLarge ? "auto auto auto" : "auto",
              gridColumnGap: "100px",
              justifyItems: "center",
              paddingLeft: isLarge
                ? "100px"
                : isnotLargeatAll
                ? "70px"
                : "30px",
              paddingRight: isLarge
                ? "100px"
                : isnotLargeatAll
                ? "70px"
                : "30px",
              textAlign: "left",
              marginBottom: isLarge ? "0px" : "20px",
            }}
          >
            <BlogExcerpt posts={posts} />
          </div>
        </div>
      </IdentityContextProvider>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    first: allFile(
      filter: { absolutePath: { regex: "//content/background/" } }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }

    second: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      filter: { fileAbsolutePath: { regex: "//content/blog//" } }
    ) {
      posts: edges {
        post: node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
          }
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
/* <BackgroundSlider 
query={useStaticQuery(graphql`
query {
   content:allFile (filter: {sourceInstanceName: {eq: "content"}}){
    nodes {
      relativePath
      childImageSharp {
        fluid (maxWidth: 4000, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}
`)}
initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
transition={4} // transition duration between images
duration={8} // how long an image is shown
// specify images to include (and their order) according to `relativePath`
images={["background/pas2.jpeg", "background/pas3.jpeg", "background/pas22.jpg", "background/pas111.png", "background/pas2.jpeg"]} 

// pass down standard element props
style={{
transform: "rotate(-2deg) scale(.9)",
}}           
> 

</BackgroundSlider>*/
