import React from "react"
import NavigationLink from "./NavigationLink"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import MenuButton from "./MenuButton"
import MenuButton2 from "./MenuButton2"

const NavigationLinks = ({ menuItems }) => {
  const isLarge = useMediaQuery("(min-width: 795px)")
  const isLarge1 = useMediaQuery("(min-width: 695px)")
  const isLarge2 = useMediaQuery("(min-width: 577px)")
  const isLarge3 = useMediaQuery("(min-width: 430px)")

  return isLarge ? (
    <>
      {menuItems.map(({ link, text, id }) => (
        <NavigationLink key={id} to={link}>
          {text}
        </NavigationLink>
      ))}
      <MenuButton disp={"yes"} />
    </>
  ) : isLarge1 ? (
    <>
      {menuItems.slice(0, 3).map(({ link, text, id }) => (
        <NavigationLink key={id} to={link}>
          {text}
        </NavigationLink>
      ))}
      <MenuButton disp={"no"} menuItems={menuItems.slice(3, 5)} />
    </>
  ) : isLarge2 ? (
    <>
      {menuItems.slice(0, 2).map(({ link, text, id }) => (
        <NavigationLink key={id} to={link}>
          {text}
        </NavigationLink>
      ))}
      <MenuButton disp={"no"} menuItems={menuItems.slice(2, 5)} />
    </>
  ) : isLarge3 ? (
    <>
      {menuItems.slice(0, 1).map(({ link, text, id }) => (
        <NavigationLink key={id} to={link}>
          {text}
        </NavigationLink>
      ))}
      <MenuButton disp={"no"} menuItems={menuItems.slice(1, 5)} />
    </>
  ) : (
    <>
      {menuItems.slice(0, 0).map(({ link, text, id }) => (
        <NavigationLink key={id} to={link}>
          {text}
        </NavigationLink>
      ))}
      <MenuButton2 menuItems={menuItems} />
    </>
  )
}

export default NavigationLinks
