'use strict';

function initMap () {

    var uluru = { lat: -25.363, lng: 131.044 };
    var map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 16,
        center: uluru
    });

    let pos;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            const map = new google.maps.Map(document.getElementById("mapa"), {
                zoom: 12,
                center: pos
            });

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: new google.maps.MarkerImage('assets/img/start.png',
                new google.maps.Size(100,50),
                new google.maps.Point(0,0),
                new google.maps.Point(50,50)),
                title: 'I am here'
            });
           
            if(state.pagina == 2){
                var markers = state.locations[0].lugares_acopio.map(function (location) {
                    var contentString = '<div id = "content"><p>'+location.name+'</p><p>'+location.direccion+'</p><p>'+location.horario+'</p></div>';
                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });

                    const newMarker = new google.maps.Marker({
                        position: {lat: location.latitud, lng: location.longitud},
                        map:map,
                        icon: new google.maps.MarkerImage('assets/img/end.png',
                        new google.maps.Size(100,50),
                        new google.maps.Point(0,0),
                        new google.maps.Point(50,50)),
                        title: `${location.name}`
                    })
                    newMarker.addListener("click", function(){
                        infowindow.open(map, newMarker);

                    });

                    return newMarker;
                });


            }else {
                marker.setMap(null);
                calculateAndDisplayRoute(pos, map);

            }

        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, map, map.getCenter());
    }


}

function handleLocationError(browserHasGeolocation, map, pos) {
    map.setPosition(pos);
    map.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}

function calculateAndDisplayRoute(pos, map) {

     const directionsService = new google.maps.DirectionsService;
     const rendererOptions = {
        map: map,
        suppressMarkers: true
    };
    const directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
    directionsDisplay.setMap(map);
    directionsService.route({
        origin: pos,
        destination: { lat: state.selectedLocation.latitud, lng: state.selectedLocation.longitud },
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(response);
            const distancia = ((response.routes[0].legs[0].distance.text));
            const route = response.routes[0].legs[0];
            createMarkerRoutesInit(route.start_location, map);
            createMarkerRoutesFinish(route.end_location, map);
            // $('#km').text(distancia);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
    directionsDisplay.setOptions({
        polylineOptions: {
                    strokeWeight: 4,
                    strokeOpacity: 1,
                    strokeColor:  'green' 
                }
    });
}

function createMarkerRoutesInit(position, map) {
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        icon: new google.maps.MarkerImage('assets/img/start.png')
    });
}

function createMarkerRoutesFinish(position, map) {
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        icon: new google.maps.MarkerImage('assets/img/end.png')
    });
}