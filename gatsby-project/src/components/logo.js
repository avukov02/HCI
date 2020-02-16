/** @jsx jsx */
import { Link } from "gatsby"
import logo from "../assets/logo1.png"
import {jsx} from "theme-ui"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const Logo = () => {
  const isLarge=useMediaQuery("(min-width:450px)")
  return(
    <Link to="/"  sx={{ display: "flex", alignItems: "center" }}>
      <img
        alt="logo"
        src={logo}
        sx={{

          height: "logo",
          width: "auto",
          marginTop:"-20px",
          transition: "all .2s ease-in-out",
          "&:hover": {
            transform:isLarge?"scale(1.03)":"scale(1)",
          }, 
        }}
      />
    </Link>
  )
}

  export default Logo