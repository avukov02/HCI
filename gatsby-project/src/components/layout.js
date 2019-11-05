import React from "react"
import { Link } from "gatsby"
import Navigation from "./navigation"
import Footer from "./footer"
import Headertop from "./headertop"
//import "layout.css"

const menuItems=[ 
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

//const myStyles= {backgroundColor: "tomato", height: "100vh"}

//drugi nacin: <div className="layout">
//{props.children} služi da se prikažu stvari na stranici koje su jedistvene

const Layout = (props) => {
return(
 // tu moze style={myStyles} 
 <div style={{backgroundColor: "white", height: "100vh"}}> 
  <Headertop/>
  <Navigation menuItems={menuItems}/>
  {props.children} 
  <Footer/>
  </div>
)
}


export default Layout

//strelica return i kad zelimo vratit jednu komponentu npr. div ne tribaju nikakve zagrade, a kad nesto radimo, ispisujemo triba nam return 
//ako je vise stvari