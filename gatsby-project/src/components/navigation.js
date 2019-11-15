/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import {Header,jsx,useThemeUI} from "theme-ui"
import Logo from "./logo"
import NavigationLinks from "./NavigationLinks"

const Navigation = ({menuItems}) =>{
    //const menus= menuItems.map(({link, text}) => (
     // <NavigationLink  to={link}>{text}</NavigationLink>   
     //  ))

     //  return <Header sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
     //      <Logo/>
     //      {menus}
      // </Header>
      return(
        
        <Header sx={{justifyContent:"center",alignContent:"center"}}>
            <Logo />
        <nav>
        <NavigationLinks menuItems={menuItems} />
        </nav>
        </Header>
      )
   }

export default Navigation

//problem each child... unique key... je ode u komponenti i bila bi sporija stranica
//svaki child mora imat jedinstveni property koji se zove key, trebamo dodat key element, a to su nam li
//key moze bit link jer je jedinstven
//nav element kod navigationa