/** @jsx jsx */
import { jsx } from "theme-ui"
import more from "../assets/more5.png"
import SideMenu from "./sidemenu"
import React from "react"

class MoreButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
    }
    this.ClickMoreButton = this.ClickMoreButton.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  ClickMoreButton() {
    if (!this.state.opened) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false)
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false)
    }

    this.setState(prevState => ({
      opened: !prevState.opened,
    }))
  }

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return
    }

    this.ClickMoreButton()
  }

  render() {
    const { opened } = this.state

    const disp1 = "no"
    const { disp, menuItems } = this.props
    return disp1 === disp ? (
      <div
        ref={node => {
          this.node = node
        }}
        sx={{
          display: "inline-block",
          position: "relative",
          px: 3,
          ml: 4,
          width: "50px",
          cursor: "pointer",
          // transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "indigo.2",
            // transform:"scale(1.05)",
          },
        }}
        onClick={this.ClickMoreButton}
        onKeyDown={this.ClickMoreButton}
        role="button"
        tabIndex={0}
      >
        <img
          alt="vise"
          src={more}
          sx={{
            position: "absolute",
            top: "-15px",
            stroke: "red",
            height: "more",
            width: "auto",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
            color: "primaryHover",
            transform:"scale(1.05)",
            }}}
        />
        {opened && <SideMenu menuItems={menuItems} />}
      </div>
    ) : (
      <div
        sx={{
          display: "none",
        }}
      >
        <img
          alt="vise1"
          src={more}
          sx={{
            stroke: "red",
            height: "more",
            width: "auto",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
            color: "primaryHover",
            transform:"scale(1.05)",
            }}}
        />
      </div>
    )
  }
}

export default MoreButton
