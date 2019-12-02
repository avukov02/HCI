/** @jsx jsx */
import React from "react"
import {useThemeUI,jsx} from "theme-ui"
import FooterIcon from "./footericon"
import GoogleMap from "./googlemap"

const Footer=()=> {
    const {theme}=useThemeUI()
    return (
        <footer sx={{
            backgroundColor:"#D0EDE6",
            padding:"30px",
            margin:"0 -8.3px 0 -8px",
            /*gridRowStart: 7,
            gridRowEnd: 8*/
            position:"relative",
            bottom:"0",
            left:"0",
            right:"0",
            width:"100%"

        }}>
            <div sx={{
                display:"flex",
                justifyContent:"space-around",
                alignItems:"center"
            }}>

            
            <FooterIcon/>
            <GoogleMap />
            </div>
            <div sx={{display:"flex",justifyContent:"center",marginTop:"20px",color:"#76DFC5"}}>Ⓒ 2019 Sigurna Kućica - All rights reserved</div>
        </footer>
    )
}

export default Footer