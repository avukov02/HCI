/** @jsx jsx */
import doniraj from "../assets/Group42.png"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const Doniraj = ({ menuItem }) => {
  const isLarge=useMediaQuery("(min-width:450px)")
  return (
    <Link
      to={menuItem.link}
      sx={{
        display: "flex",
        alignItems: "center",
        marginLeft: "30px",
        zIndex: "1",
        transition: "all .2s ease-in-out",
          "&:hover": {
            transform:isLarge?"scale(1.05)":"scale(1)",
          }, }}
    >
      <img
        alt="doniraj"
        src={doniraj}
        sx={{
          height: "85px",
          width: "auto",
        }}
      />
    </Link>
  )
}

export default Doniraj
