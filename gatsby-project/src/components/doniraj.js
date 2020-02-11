/** @jsx jsx */
import doniraj from "../assets/Group42.png"
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const Doniraj = ({ menuItem }) => {
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
            transform:"scale(1.05)",
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
