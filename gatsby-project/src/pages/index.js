import React from "react"
//import { Link } from "gatsby"

// ne triba jer cemo dodat u layout: import Navigation from "../components/navigation"
//importamo layout
import Layout from "../components/layout"

//import Image from "../components/image"
import SEO from "../components/seo"

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

const IndexPage = () => (
  <Layout>
    <SEO title="Sigurna Kućica"/>
    <h1>Sigurna Kućica</h1>
  </Layout>
  
)

export default IndexPage

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