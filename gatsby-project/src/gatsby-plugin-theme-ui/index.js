import { tailwind } from "@theme-ui/presets"

const theme = {
  ...tailwind,
  fonts: {
    body: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
    heading: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  },
  sizes: {
    ...tailwind.sizes,
    container: "1024px",
    logo: "60px",
    more: "25px",
    navLinkBorder: "3px",
    footerimg: "50px",
  },
  colors: {
    primaryHover: "#78758E",
    accent: "#78758E",
  },
  shadows: {
    ...tailwind.shadows,
    header: theme =>
      `0 4px 6px ${theme.colors.primaryHover}, 0 0 1px rgba(1,0,0,.1)`,
  },
  borders: {
    header: theme => `1px solid ${theme.colors.primaryHover}`,
  },
  styles: {
    ...tailwind.styles,
    blockquote: {
      borderLeft: theme => `5px solid ${theme.colors.accent}`,
      paddingLeft: 3,
      marginLeft: 0,
      marginRight: 0,
      fontStyle: "italic",
    },
    p: {
      ...tailwind.styles.p,
      fontSize: [1, 1, 1, 2],
      mt: 4,
      color: "#808080",
    },
    h1: {
      ...tailwind.styles.h1,
      fontSize: [4, 4, 5, 6],
      mt: [4, 5],
    },
    h2: {
      ...tailwind.styles.h2,
      fontSize: [3, 3, 4, 4],
      mt: [4, 5],
    },
    h3: {
      ...tailwind.styles.h3,
      fontSize: [2, 2, 3, 3],
      mt: 4,
      color: "#9AD1C4",
    },
    h4: {
      ...tailwind.styles.h4,
      fontSize: [1, 1, 2, 2],
      mt: 4,
    },
    a: {
      ...tailwind.styles.a,
      color: "#9AD1C4",
    },
  },
}

export default theme
