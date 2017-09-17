'use strict';

function initMap (locations) {
    console.log("hola");
    var uluru = { lat: -25.363, lng: 131.044 };
    var map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 4,
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
                zoom: 14,
                center: pos
            });
            
            var marker = new google.maps.Marker({
                position: pos,
                map: map
            });
            
            // var markers = state.locations.map(function (location, i) {
            //     return new google.maps.Marker({
            //         position: location,
            //         map: map
            //     });
            // });

            // const directionsDisplay = new google.maps.DirectionsRenderer;
            // const directionsService = new google.maps.DirectionsService;
            // directionsDisplay.setMap(map);
            // calculateAndDisplayRoute(directionsService, directionsDisplay, pos);
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

function calculateAndDisplayRoute(directionsService, directionsDisplay, pos) {
     const directionsDisplay = new google.maps.DirectionsRenderer;
     const directionsService = new google.maps.DirectionsService;
     directionsDisplay.setMap(map);
    directionsService.route({
        origin: pos,
        destination: { lat: state.selectedStation.lat, lng: state.selectedStation.long },
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(response);
            const distancia = ((response.routes[0].legs[0].distance.text));
            $('#km').text(distancia);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

