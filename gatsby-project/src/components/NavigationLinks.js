import React from "react"
import { Link } from "gatsby"
import {Header,jsx,useThemeUI} from "theme-ui"
import Logo from "./logo"
import NavigationLink from "./NavigationLink"

const NavigationLinks = ({ menuItems }) => (
    <>
    {menuItems.map(({link, text}) => (
      <NavigationLink  to={link}>{text}</NavigationLink>  
      ))}
    </>
  )

  export default NavigationLinks