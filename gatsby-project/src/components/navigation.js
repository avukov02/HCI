import React from "react"
import { Link } from "gatsby"


const Navigation = ({menuItems}) =>{
    const menus= menuItems.map(({link, text}) => (
        <li key={link}>
      <Link to={link}>{text}</Link>
        </li>
       ))

       return <div style={{display:"flex"}}>
           {menus}
       </div>
   }

export default Navigation

//problem each child... unique key... je ode u komponenti i bila bi sporija stranica
//svaki child mora imat jedinstveni property koji se zove key, trebamo dodat key element, a to su nam li
//key moze bit link jer je jedinstven