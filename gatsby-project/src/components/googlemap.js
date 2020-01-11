import React from "react"
import GoogleMapReact from "google-map-react"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const defaultProps = {
  center: {
    lat: 45.7,
    lng: 16.15,
  },
  zoom: 13,
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => {
  const isLarge = useMediaQuery("(min-width: 500px)")
  return (
    <div
      style={{
        display: "flex",
        height: isLarge ? "220px" : "200px",
        width: isLarge ? "320px" : "250px",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={45.702216}
          lng={16.150805}
          text={"Sigurna Kućica"}
        />
      </GoogleMapReact>
    </div>
  )
}

export default GoogleMap

//dotenv package
