import React from 'react'
import { compose, withProps } from "recompose"
import Geolocation from 'react-geolocation'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const position = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.warn(position)
            return {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            
        });
        
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, map, map.getCenter());
    }

}
const MyMapComponent = compose (
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height:`100%`}} />,
        containerElement: <div style= {{ height: `400px`}} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)( (props) => {
    
   return (
    <Geolocation
    render={({
      position: { coords: { latitude, longitude } = {} } = {},
      error,
      getCurrentPosition
    }) =>
      <div>
        {error &&
          <div>
            {error.message}
          </div>}
          <GoogleMap
        defaultZoom={16}
        defaultCenter={position.coords}
    >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
        <Marker position={{ lat: -12.397, lng: 150.644 }} />
    </GoogleMap>
      </div>}
  />
   )
    }
)

class MyFancyComponent extends React.PureComponent {
    state = {
        isMarkerShown: false,
    }

    componentDidMount() {
        this.delayedShowMarker()
    }
    delayedShowMarker = () => {
        setTimeout(()=> {
            this.setState({isMarkerShown:true})
        }, 3000)
    }
    handleMarkerClick = ()=> {
        this.setState({isMarkerShown:false})
        this.delayedShowMarker()
    }
    render() {
        return (
            <MyMapComponent
                isMarkerShown= {this.state.isMarkerShown}
                onMarkerClick = {this.handleMarkerClick}
            />
        )
    }
}

export default MyFancyComponent