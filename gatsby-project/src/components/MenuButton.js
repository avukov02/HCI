import React from "react"

const MenuButton = ({ status, onClick, className }) => {
  const isDisplayed = useMediaQuery("(min-width: 790px)")
  return (
    <button
      className={cn(styles.Button, styles[status], className)}
      onClick={onClick}
      style={{
        height: "40px",
        position: "fixed",
        right: "0px",
        top: "calc(var(--height) / 2)",
        transform: "translateY(-50%)",

        cursor: "pointer",
        background: "#fff",
        border: "1px solid var(--color-grey, #000)",
        display: isDisplayed ? "none" : "block",

        padding: " 0 10px",
        overflowY: "hidden",
        transition: "all 0.25s linear",

        zIndex: "var(--z-index-menu, 1000)",
      }}
    >
      <span className={cn(styles.Content, styles[status])}>MENU</span>
    </button>
  )
}

export default MenuButton
