/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, useThemeUI } from "theme-ui"

const NavigationLink = ({ children, ...prop }) => {
  const { theme } = useThemeUI()

  return (
    <Link
      {...prop}
      sx={{
        display: "inline-block",
        px: 3,
        ml: 4,
        color: "#666378",
        textDecoration: "none",
        whiteSpace: "nowrap",
        letterSpacing: "wide",
        lineHeight: theme =>
          `calc(${theme.sizes.logo} - 4 * ${theme.sizes.navLinkBorder})`,
        borderTop: theme => `${theme.sizes.navLinkBorder} solid transparent`,
        borderBottom: theme => `${theme.sizes.navLinkBorder} solid transparent`,
        transition: "all 0.25s ease-in-out",
        "&:hover": {
          color: "primaryHover",
          borderBottom: theme => `${theme.sizes.navLinkBorder} solid #9AD1C4`
        },
      }}
      activeStyle={{
        color: "#666378",
        borderBottom: `${theme.sizes.navLinkBorder} solid #9AD1C4`,
      }}
    >
      {children}
    </Link>
  )
}

export default NavigationLink
