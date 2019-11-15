import React from "react"
import NavigationLink from "./NavigationLink"

const NavigationLinks = ({ menuItems }) => (
    <>
    {menuItems.map(({link, text}) => (
      <NavigationLink  to={link}>{text}</NavigationLink>  
      ))}
    </>
  )

  export default NavigationLinks