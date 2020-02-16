import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"
import Headertop from "./headertop"
import { useStaticQuery, graphql } from "gatsby"

//import "layout.css"
//drugi nacin: <div className="layout">
//{props.children} služi da se prikažu stvari na stranici koje su jedistvene

const Layout = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menuItems {
            link
            text
            id
          }
        }
      }
    }
  `)

  const { menuItems } = data.site.siteMetadata
  return (
    // tu moze style={myStyles}
    <div style={{ height: "100vh", backgroundColor: "white" }}>
      <Headertop />
      <Navigation menuItems={menuItems} />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout

//strelica return i kad zelimo vratit jednu komponentu npr. div ne tribaju nikakve zagrade, a kad nesto radimo, ispisujemo triba nam return
//ako je vise stvari
