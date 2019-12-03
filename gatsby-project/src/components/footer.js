/** @jsx jsx */
import React from "react"
import { useThemeUI, jsx } from "theme-ui"
import FooterIcon from "./footericon"
import GoogleMap from "./googlemap"

const Footer = () => {
  const { theme } = useThemeUI()
  return (
    <footer
      sx={{
        backgroundColor: "#E2F0ED",
        padding: "30px",
        margin: "0 -8.3px 0 -8px",
      }}
    >
      <div
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <FooterIcon />
        <GoogleMap />
      </div>
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          color: "#76DFC5",
        }}
      >
        Ⓒ 2019 Sigurna Kućica - All rights reserved
      </div>
    </footer>
  )
}

export default Footer
