/** @jsx jsx */
import doniraj from "../assets/Group42.png"
import { jsx } from "theme-ui"

const Doniraj = () => (
  <a
    href="../trebamovas"
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
  </a>
)

export default Doniraj
