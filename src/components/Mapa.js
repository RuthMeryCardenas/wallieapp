import React from 'react';
import loadGoogleMapsAPI from 'load-google-maps-api';
import { connect } from 'react-redux';


const MAP_STYLES = {
    height: '450px',
    width: '100%'
}

let lugares, map;
const API_CONFIG = {
    key: 'AIzaSyABf5qlYG5lHfSeLMN-SKxpwzZWLHfUA7c',
    language: 'es'
}

const MarcadorLugares = (lugares) => {
   
    var markers = lugares.map((location)=> {
        var contentString = '<div id = "content"><p>' + location.name + '</p><p>' + location.direccion + '</p><p>' + location.horario + '</p></div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        const newMarker = new google.maps.Marker({
            position: { lat: location.latitud, lng: location.longitud },
            map: map
        })
        newMarker.addListener("click", function () {
            infowindow.open(map, newMarker);

        });

        return newMarker;
    });
}
class CustomMap extends React.Component {
    componentWillUnmount() {
        // limpiando despues el component ya no es usado
        // evita errores en la console
        const allScripts = document.getElementsByTagName('script');
        // recopilar todos los scripts,
        // filtrar los que contengan la key en 'src'
        // eliminarlo
        [].filter.call(
            allScripts,
            (scpt) => scpt.src.indexOf('key=AIzaSyABf5qlYG5lHfSeLMN-SKxpwzZWLHfUA7c') >= 0
        )[0].remove();
        // resetear la variable de Google
        window.google = {};
    }
    

    componentDidMount() {
        // Promise para que lo q resulta puedas manipular
        // las opciones de Google Maps
        let pos;
        loadGoogleMapsAPI(API_CONFIG).then(googleMaps => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    map = new googleMaps.Map(this.refs.map, {
                        center: pos,
                        zoom: 16
                    });
                    var marker = new google.maps.Marker({
                        position: pos,
                        map: map
                    });
                });
                
                if(lugares) {
                    MarcadorLugares(this.props.materialActivo.lugares_acopio);

                }
            } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, map, map.getCenter());
            }


        }).catch(err => {
            console.warning('Something went wrong loading the map', err);
        });
    }

    renderDetalle() {
        if (!this.props.materialActivo) {
            return (
                <div ref="map" className="col s12" style={MAP_STYLES}></div>
                // <div>Selecciona Material</div>
            )
        }

        const { lugares_acopio } = this.props.materialActivo
         lugares = lugares_acopio;
        return (
            <div ref="map" className="col s12" style={MAP_STYLES}></div>
        )
    }
    render() {
        console.log('Props CustomMap', this.props)
        
        return this.renderDetalle()
    }

    
}

const mapStateToProps = (state) => {
    const { materialActivo } = state

    return {
        materialActivo
    }
}

const CustomMapConRedux = connect(
    mapStateToProps
)(CustomMap)

export default CustomMapConRedux