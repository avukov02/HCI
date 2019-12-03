/** @jsx jsx */
import React from "react"
import { jsx, useThemeUI } from "theme-ui"

const Headertop = () => {
  return (
    <div
      style={{
        marginTop: "-10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottom: "1px solid #78758E",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <p style={{ marginRight: "10px", color: "#78758E" }}>
          Kontaktirajte nas na: 091234568
        </p>
        <p style={{ color: "#78758E" }}>sigurnakucica@gmail.com</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          sx={{
            display: "inline-block",
            margin: "6px 2px",
            padding: "5px 15px",
            fontSize: "15px",
            cursor: "pointer",
            textAlign: "center",
            textDecoration: "none",
            outline: "none",
            color: "#fff",
            backgroundColor: "#9AD1C4",
            border: "none",
            borderRadius: "15px",
            "&:hover": {
              backgroundColor: "#7DD0BC",
              opacity: 1,
            },
            "&:active": {
              transform: "translateY(1px)",
            },
          }}
        >
          Prijava
        </button>
        <button
          sx={{
            display: "inline-block",
            margin: "6px 2px",
            padding: "5px 15px",
            fontSize: "15px",
            cursor: "pointer",
            textAlign: "center",
            textDecoration: "none",
            outline: "none",
            color: "#fff",
            backgroundColor: "#9AD1C4",
            border: "none",
            borderRadius: "15px",
            "&:hover": {
              backgroundColor: "#7DD0BC",
              opacity: 1,
            },
            "&:active": {
              transform: "translateY(1px)",
            },
          }}
        >
          Registracija
        </button>
      </div>
    </div>
  )
}

export default Headertop
