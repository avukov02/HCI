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
    navLinkBorder: "3px",
    footerimg:"50px"
  },
  colors:{
     primaryHover:"#78758E",
  },
  
}

export default theme