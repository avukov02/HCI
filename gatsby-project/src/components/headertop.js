/** @jsx jsx */
import { jsx } from "theme-ui"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"
import React from "react"
import "@reach/tabs/styles.css"
import "@reach/dialog"
import "@reach/visually-hidden"

const Headertop = () => {
  const isLarge = useMediaQuery("(min-width: 700px)")
  const Hide = useMediaQuery("(min-width: 440px)")
  const [dialog, setDialog] = React.useState(false)
  const identity = useIdentityContext()
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.name) ||
    "NoName"
  const isLoggedIn = identity && identity.isLoggedIn

  return (
    <div style={isLarge ? style1 : style2}>
      <div
        style={{
          display: Hide ? "flex" : "none",
          flexDirection: "row",
        }}
      >
        <p style={{ marginRight: "10px", color: "#666378" }}>
          Kontaktirajte nas na: 091234568
        </p>
        <p style={{ color: "#666378" }}>sigurnakucica@gmail.com</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          onClick={() => setDialog(true)}
          sx={{
            display: "inline-block",
            margin: Hide ? "6px 2px" : "10px 2px",
            padding: Hide ? "5px 20px" : "8px 20px",
            fontSize: "15px",
            cursor: "pointer",
            textAlign: "center",
            textDecoration: "none",
            outline: "none",
            color: "#fff",
            backgroundColor: "#9AD1C4",
            border: "none",
            borderRadius: "15px",
            transition: "all .2s ease-in-out",
            "&:hover": {
              backgroundColor: "#7DD0BC",
              opacity: 1,
              transform:Hide?"scale(1.03)":"scale(1)",
            },
            "&:active": {
              transform: "translateY(1px)",
            },
          }}
        >
          {isLoggedIn ? `Odjavi se` : "Prijava"}
        </button>
      </div>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => console.log("hello ", user.user_metadata)}
        onSignup={user => console.log("welcome ", user.user_metadata)}
        onLogout={() => console.log("bye ", name)}
      />
    </div>
  )
}

export default Headertop

const style1 = {
  marginTop: "-10px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  borderBottom: "1px solid #78758E",
}

const style2 = {
  marginTop: "-10px",
  display: "grid",
  justifyItems: "center",
  borderBottom: "1px solid #78758E",
  marginRight: "-8px",
  marginLeft: "-8px",
}
