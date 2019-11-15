/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import {Header,jsx,useThemeUI} from "theme-ui"
import Logo from "./logo"

const NavigationLink=({children, ...prop})=>{
const {theme}=useThemeUI()

return (
    <Link
    {...prop}
    sx={{
      display: "inline-block",
      px: 2,
      ml: 4,
      color: "#78758E",
      textDecoration: "none",
      whiteSpace: "nowrap",
      letterSpacing: "wide",
      lineHeight: theme =>
        `calc(${theme.sizes.logo} - 5 * ${theme.sizes.navLinkBorder})`,
      borderTop: theme => `${theme.sizes.navLinkBorder} solid transparent`,
      borderBottom: theme => `${theme.sizes.navLinkBorder} solid transparent`,
      transition: "all 0.25s linear",
      "&:hover": {
        color: "primaryHover",
        borderBottom: theme =>
          `${theme.sizes.navLinkBorder} solid #9AD1C4`,
      },
    }}
    activeStyle={{
      color: theme.colors.primaryHover,
      borderBottom: `${theme.sizes.navLinkBorder} solid #9AD1C4`,
    }}
  >
    {children}
  </Link>
)
}

export default NavigationLink