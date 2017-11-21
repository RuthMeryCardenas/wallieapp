import React from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel'

const MyMapComponent = compose (
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDFz9yo9606yto6BK07KtVS94iTNvsD_ag&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height:`100%`}} />,
        containerElement: <div style= {{ height: `400px`}} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)( (props) => {
    console.log("googlemaps", props)
    
   return (    
       <GoogleMap
           zoom={props.zoom}
           center={{ lat: -12.0431800, lng: -77.0282400 }}
       >
           {
               
               props.markers &&
               props.markers.map(marker => {
                   return props.isMarkerShown ? (
                       <MarkerWithLabel position={{
                           lat: marker.latitud,
                           lng: marker.longitud
                       }} 
                        key = {marker.name}
                        labelAnchor={new google.maps.Point(0, 0)}
                        labelStyle={{ backgroundColor: "rgba(255, 255, 255,0.5)", fontSize: "14px", padding: "10px" }}
                        labelVisible = {props.showLabel}
                        onMouseOver = {props.onMarkerClick(props)}
                        >
                           <div>
                               <b>{marker.name}</b>
                               <p>{marker.direccion}</p>
                           </div>
                       </MarkerWithLabel>
                   ) : null
               })
           }
       </GoogleMap>     
   )
    }
)

class MyFancyComponent extends React.PureComponent {
    state = {
        showMarkerContent: false,
        showLabel: false,
    }
    
    componentWillMount() {
        this.getLocation()
        
    }
    componentDidMount() {
        this.delayedShowMarker()
    }
    delayedShowMarker = () => {
        setTimeout(()=> {
            this.setState({isMarkerShown:true})
        }, 3000)
    }
    getLocation = () => {
        
        navigator.geolocation.getCurrentPosition((position) =>{
            this.setState({
                currectLocation: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }});
          
        } , error);
              
        function error(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        };

    }
    handleMarkerClick = (props)=> {
        console.log('marker clicked', props)
        // this.setState({showLabel:true})
        // this.delayedShowMarker()
    }
    render() {
        // console.log('marcadores props en el mapa', this.props.marcadores)
        // console.log('actual location', this.props)
        
        return (
            <MyMapComponent
                markers={this.props.marcadores}
                isMarkerShown= {this.state.isMarkerShown}
                onMarkerClick = {this.handleMarkerClick}
                localPosition = {this.getLocation()}
                zoom = {this.props.zoom}
                showLabel = {this.state.showLabel}
            />
        )
    }
}

export default MyFancyComponent