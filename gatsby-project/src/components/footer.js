/** @jsx jsx */
import { jsx } from "theme-ui"
import FooterIcon from "./footericon"
import GoogleMap from "./googlemap"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const Footer = () => {
  const isRowBased = useMediaQuery("(min-width: 700px)")
  return (
    <footer
      style={{
        backgroundColor: "#E2F0ED",
        padding: "30px",
        margin: "0 -8px 0 -8px",
      }}
    >
      <div style={isRowBased ? styles1 : styles2}>
        <FooterIcon />
        <GoogleMap />
      </div>
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          color: "#406b62",
          textAlign: "center",
        }}
      >
        Ⓒ 2019 Sigurna Kućica - All rights reserved
      </div>
    </footer>
  )
}

export default Footer

const styles1 = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}

const styles2 = {
  display: "grid",
  justifyItems: "center",
  gridRowGap: "20px",
}
