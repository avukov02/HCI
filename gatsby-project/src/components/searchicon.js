/** @jsx jsx */
import { jsx } from "theme-ui"
import search from "../assets/search.png"

const SearchIcon = ({ ...prop }) => (
  <img
    {...prop}
    src={search}
    alt="trazi"
  />
    
)

export default SearchIcon