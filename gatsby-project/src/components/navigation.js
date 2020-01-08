/** @jsx jsx */
import { Header, jsx } from "theme-ui"
import Logo from "./logo"
import NavigationLinks from "./NavigationLinks"
import Doniraj from "./doniraj"

const Navigation = ({ menuItems }) => {
  //const menus= menuItems.map(({link, text}) => (
  // <NavigationLink  to={link}>{text}</NavigationLink>
  //  ))

  //  return <Header sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
  //      <Logo/>
  //      {menus}
  // </Header>
  return (
    <Header sx={{ justifyContent: "center", alignContent: "center" }}>
      <Logo />
      <nav sx={{ display: "inline-block" }}>
        <NavigationLinks menuItems={menuItems} />
      </nav>
      <Doniraj menuItem={menuItems[2]} />
    </Header>
  )
}

export default Navigation

//problem each child... unique key... je ode u komponenti i bila bi sporija stranica
//svaki child mora imat jedinstveni property koji se zove key, trebamo dodat key element, a to su nam li
//key moze bit link jer je jedinstven
//nav element kod navigationa
