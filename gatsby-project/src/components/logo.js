/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import logo from "../assets/logo1.png"
import {jsx} from "theme-ui"

const Logo = () => (
    <Link to="/"  sx={{ display: "flex", alignItems: "center" }}>
      <img
        src={logo}
        sx={{

          height: "logo",
          width: "auto",
        }}
      />
    </Link>
  )

  export default Logo