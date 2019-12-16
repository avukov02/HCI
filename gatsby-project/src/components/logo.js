/** @jsx jsx */
import { Link } from "gatsby"
import logo from "../assets/logo1.png"
import {jsx} from "theme-ui"

const Logo = () => (
    <Link to="/"  sx={{ display: "flex", alignItems: "center" }}>
      <img
        alt="logo"
        src={logo}
        sx={{

          height: "logo",
          width: "auto",
          marginTop:"-20px"
        }}
      />
    </Link>
  )

  export default Logo