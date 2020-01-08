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
      }}
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
