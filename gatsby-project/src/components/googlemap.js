import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 45.70,
    lng: 16.15,
  },
  zoom: 13,
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => (
  <div style={{display:"flex", height:"220px", width: '320px' }}>
    <GoogleMapReact
      // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
      bootstrapURLKeys={{ key: 'AIzaSyB0iFkm4Bjy2LUAvxwIK5eYjy2eX6VO3y8' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={45.702216}
        lng={16.150805}
        text={'Sigurna Kućica'}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap