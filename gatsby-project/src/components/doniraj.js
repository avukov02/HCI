/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import doniraj from "../assets/Group4.png"
import {jsx} from "theme-ui"

const Doniraj = () => (
    <Link to="../trebamovas"  sx={{ display: "flex", alignItems: "center" ,marginLeft:"30px"}}>
      <img
        src={doniraj}
        sx={{

          height: "85px",
          width: "auto",
        }}
      />
    </Link>
  )

  export default Doniraj