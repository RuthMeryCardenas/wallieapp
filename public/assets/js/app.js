"use strict";


const root = $(".root");
const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');

    switch (state.pagina) {
        case null:
            wrapper.append(Home(updated));
            break;
        case 1:
            wrapper.append(Recicla(updated));
            break;
        case 2:
            wrapper.append(MapaRecicla(updated));
            break;
        case 3:
            wrapper.append(RutaRecicla(updated));
            break;
        case 4:
            wrapper.append(FormAcopio(updated));
            break;
        case 5:
            wrapper.append(SuccesAcopio(updated));
            break;
        case 6:
            wrapper.append(TipsR(updated));
            break;
<<<<<<< HEAD
        case 7:
            wrapper.append(TipDetail(updated));
            break;
    };
=======
        
    }
>>>>>>> 21b7e2b4d620a6a7da59b046adb0c48768b264e6

    root.append(wrapper);
    if(state.pagina == 2 || state.pagina == 3){
        initMap();
        
    }

}

const updated = function () {
    render(root);
}
const state = {
    pagina: null,
}


$(_ => {
  var config = {
    apiKey: "AIzaSyD046Ozxa4rsgWa1uTUC5lkIYJsOB6nW3c",
    authDomain: "wallie-6af03.firebaseapp.com",
    databaseURL: "https://wallie-6af03.firebaseio.com",
    projectId: "wallie-6af03",
    storageBucket: "wallie-6af03.appspot.com",
    messagingSenderId: "846422299759"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
    database.ref().on("value", function(snap){

        state.wallie = snap.val();
        console.log(state.wallie);

        const root = $(".root");
        render(root);

    });
});

"use strict";

const TipDetail = (updated) => {

    const parent = $('<div class="container"></div>');
    const row = $('<div class="row"></div>');
    const divTitle = $('<div class="center-align col s12"></div>');
    const mjsTitle=$('<h4>'+ state.material+'</h4>');
    const contMjs =$('<div class="center-align col s12">'+ state.material+'</div>');
    divTitle.append(mjsTitle,contMjs);
    const container = $('<div class="center-align col s12">2</div>');
    const btnReturn = $('<div><a class="waves-effect waves-light btn-large actions">Volver</a></div>');



    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = null;
        state.material = null;
        state.locations = null;
        updated();
    })

    row.append(divTitle);
    row.append(container);
    parent.append(row);
    parent.append(btnReturn);

    return parent;
}

'use strict';
const FormAcopio = (update) => {

  const cont_form =$('<section class="cont"></section>');
  const form =$('<div class="row">'+
    '<form class="col s12">'+
      '<div class="row">'+
      '  <div class="input-field col s10">'+
        '  <i class="material-icons prefix">account_circle</i>'+
        '  <input id="icon_prefix" type="text" class="validate">'+
        '  <label for="icon_prefix">Nombres y Apellidos</label>'+
      '  </div>'+
      '  <div class="input-field col s10">'+
        '  <i class="material-icons prefix">phone</i>'+
        '  <input id="icon_telephone" type="number"  maxlength="999999999"  class="validate">'+
        '  <label for="icon_telephone">Celular</label>'+
        '</div>'+
        '<div class="input-field col s10">'+
          '  <i class="material-icons prefix">drafts</i>'+
          '  <input id="email" type="email" class="validate">'+
          '  <label for="email" data-error="wrong" data-success="right">Email</label>'+
        '</div>'+
        '<div class="input-field col s10">'+
          '  <i class="material-icons prefix">location_city</i>'+
          '  <input id="icon_location_city" type="tel" class="validate">'+
          '  <label for="icon_location_city">Ubicación</label>'+
        '</div>'+
        '<div class="col s10"><h6>Horario de Recepción</h6></div>'+
        '<div class="col s10">'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia1"/><label for="dia1">L</label></p>'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia2" /><label for="dia2">M</label></p>'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia3" /><label for="dia3">Mi</label></p>'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia4"/><label for="dia4">J</label></p>'+
        '</div>'+
        '<div class="col s10">'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia5" /><label for="dia5">V</label></p>'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia6" /><label for="dia6">S</label></p>'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia7" /><label for="dia7">D</label></p>'+
        '</div>'+
        '<div class="input-field col s5">'+
          '  <i class="material-icons prefix">event</i>'+
          '  <input type="text" class="timepicker" required>'+
          '  <label for="icon_event">Inicio</label>'+
        '</div>'+
        '<div class="input-field col s5">'+
          '  <i class="material-icons prefix">event</i>'+
          '  <input type="text" class="timepicker" required>'+
          '  <label for="icon_event">Fin</label>'+
        '</div>'+
        '<div class="col s10"><h6>Materiales</h6></div>'+
        '<div class="col s5">'+
          '<p><input type="checkbox" class="filled-in" id="in1"/><label for="in1">Plástico</label></p>'+
          '<p><input type="checkbox" class="filled-in" id="in2" /><label for="in2">Ropa</label></p>'+
          '<p><input type="checkbox" class="filled-in" id="in3" /><label for="in3">Vidrio</label></p>'+
        '</div>'+
        '<div class="col s5">'+
          '<p><input type="checkbox" class="filled-in" id="in4"/><label for="in4">Pilas</label></p>'+
          '<p><input type="checkbox" class="filled-in" id="in5"/><label for="in5">Aceite</label></p>'+
          '<p><input type="checkbox" class="filled-in" id="in6" /><label for="in6">Papel y Carton</label></p>'+
        '</div>'+
        '<div class="input-field col s12">'+
            '<textarea id="textarea1" class="materialize-textarea" data-length="120"></textarea>'+
            '<label for="textarea1">Observación</label>'+
         '</div>'+
    '  </div>'+
  '  </form>'+
  '</div>');
  const btn_send =$('<button class="btn waves-effect waves-light" type="submit" name="action">Enviar<i class="material-icons right">send</i></button>');
  form.append(btn_send);
  cont_form.append(form);

  btn_send.on('click', (e) =>{
    e.preventDefault();
     state.pagina = 5;
     update();
  });

  $(_ => {
      $('.timepicker').pickatime({
      default: 'now', // Set default time: 'now', '1:30AM', '16:30'
      fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
      twelvehour: false, // Use AM/PM or 24-hour format
      donetext: 'OK', // text for done-button
      cleartext: 'Clear', // text for clear-button
      canceltext: 'Cancel', // Text for cancel-button
      autoclose: false, // automatic close timepicker
      ampmclickable: true, // make AM PM clickable
      aftershow: function(){} //Function for after opening timepicker
    });
  });

  return cont_form;
};

"use strict";


const Home = (updated) => {

    const parent = $('<div class="center-align"></div>');
    const btnRecicle = $('<div class="recicla"><a class="waves-effect waves-light btn-large actions">Recicla</a></div><br>');
    const btnPoint = $('<div><a class="waves-effect waves-light btn-large actions">Cargar Nuevo Punto</a></div><br>');
    const btnTips = $('<div><a class="waves-effect waves-light btn-large actions">Tips</a></div><br>');

    parent.append(btnRecicle);
    parent.append(btnPoint);
    parent.append(btnTips);

    btnRecicle.on("click", (e) => {
        e.preventDefault();
        state.pagina = 1;
        updated();
    });
    btnPoint.on("click", function (e) {
        e.preventDefault();
        state.pagina = 4;
        updated();
    });
    btnTips.on("click", function (e) {
        e.preventDefault();
        state.pagina = 6;
        updated();
    });

    return parent;

}

'use strict';

function initMap () {
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

            
            if(state.pagina == 2){
                var markers = state.locations[0].lugares_acopio.map(function (location) {
                    var contentString = '<div id = "content"><p>'+location.name+'</p><p>'+location.direccion+'</p><p>'+location.horario+'</p></div>';
                    var ruta = '<p class="ruta">Trazar Ruta</p>';
                    var infowindow = new google.maps.InfoWindow({
                        content: contentString + ruta
                    });

                    const newMarker = new google.maps.Marker({
                        position: {lat: location.latitud, lng: location.longitud},
                        map:map
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

     const directionsDisplay = new google.maps.DirectionsRenderer;
     const directionsService = new google.maps.DirectionsService;
    directionsDisplay.setMap(map);
    directionsService.route({
        origin: pos,
        destination: { lat: state.selectedLocation.latitud, lng: state.selectedLocation.longitud },
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(response);
            const distancia = ((response.routes[0].legs[0].distance.text));
            // $('#km').text(distancia);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}


"use strict";


const locationDetail = (location, updated) => {

    const parent = $('<div class="" data-lugar = ""></div>');
    const name = $('<span class="">'+ location.name + '</span>');
    const icon = $('<span class = "ruta">trazar ruta</span>');

    parent.append(name);
    parent.append(icon);

    icon.on("click", (e) => {
        e.preventDefault();
        state.selectedLocation = location;
        state.pagina = 3;
        updated();
    });

    return parent;
}

"use strict";

const MapaRecicla = (updated) => {

    const parent = $('<div class=""></div>');
    const mapa = $('<div id="mapa"></div>');
    const detail = $('<div class=""></div>');

    parent.append(mapa);
    parent.append(detail);

    state.locations[0].lugares_acopio.map(function (location) {
        parent.append(locationDetail(location, updated));
    });

    return parent;

}

"use strict";

const Recicla = (updated) => {

    const tipos = [ { name: "Plastico", img: "" },
                    { name: "Vidrio", img: "" },
                    { name: "RAEE", img: "" },
                    { name: "Aceite", img: "" },
                    { name: "Cartón y Papel", img: "" },
                    { name: "Pilas", img: "" }];

    const parent = $('<div class="container"></div>');
    const row = $('<div class="row"></div>');
    const divTitle = $('<div class="center-align col s12">Recicla</div>');
    const container = $('<div class="center-align col s12"></div>');
    const btnReturn = $('<div><a class="waves-effect waves-light btn-large actions">Volver</a></div>');

    tipos.forEach(function(type){
        const divContent = $('<div class="col s6" data-id = "'+ type.name + '"></div>');
        const img = $('<a class=""><span class=""></span></a>');
        const h5 = $('<h5 class="morado">'+ type.name + '</h5>');

        divContent.append(h5);
        divContent.append(img);
        container.append(divContent);

        divContent.on("click", (e) => {
            e.preventDefault();
            state.material = $(e.currentTarget).data("id").toLowerCase();
            state.locations = filterByMaterial(state.material);
            console.log(state.locations);
            state.pagina = 2;
            updated();
        });
    });
    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = null;
        state.material = null;
        state.locations = null;
        updated();
    });

    row.append(divTitle);
    row.append(container);
    parent.append(row);
    parent.append(btnReturn);


    return parent;

};

"use strict";

const RutaRecicla = (updated) => {

    const parent = $('<div class=""></div>');
    const mapa = $('<div id="mapa"></div>');
    const detail = $('<div class=""></div>');

    parent.append(mapa);
    parent.append(detail);

    

    return parent;

}
'use strict';
const SuccesAcopio = (update) => {

  const divCont_end = $('<div class="text-center bg_yellow"></div>');
    const row1      =$('<div class="row"></div>');
    const logo      =$('<div class="col s12 center-align"><img src="assets/img/img1.jpg" class="logo" alt="check"></div>');
    const cont_text =$('<div class="col s12"><h5 class="center-align">¡Bien!<br>Gracias por ser parte del movimiento</h5></div>');

    row1.append(logo);
    row1.append(cont_text);
    divCont_end.append(row1) ;

    setTimeout(function(){
       state.pagina=null;
       update();}, 5000);

    return divCont_end;
}

const TipsR = (updated) => {

    const tiposT = [ { name: "Plastico", img: "" },
                    { name: "Vidrio", img: "" },
                    { name: "RAEE", img: "" },
                    { name: "Aceite", img: "" },
                    { name: "Cartón y Papel", img: "" },
                    { name: "Pilas", img: "" }];

    const parent = $('<div class="container"></div>');
    const row = $('<div class="row"><div>');
    const divTitle = $('<div class="center-align col s12">Recicla</div>');
    const container = $('<div class="center-align col s12"></div>');
    const btnReturn = $('<div><a class="waves-effect waves-light btn-large actions">Volver</a></div>');

    tiposT.forEach(function(type){
        const divContent = $('<div class="col s6" data-id = "'+ type.name + '"></div>');
        const img = $('<a class=""><span class=""></span></a>');
        const h5 = $('<h5 class="morado">'+ type.name + '</h5>');

        divContent.append(h5);
        divContent.append(img);
        container.append(divContent);

        divContent.on("click", (e) => {
            e.preventDefault();
            state.material = $(e.currentTarget).data("id");
            console.log(state.material);
            // state.type = filterByMaterial(state.material);
            state.pagina = 7;
            updated();
        });
    });
    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = null;
        state.material = null;
        state.locations = null;
        updated();
    })

    row.append(divTitle);
    row.append(container);
    parent.append(row);
    parent.append(btnReturn);

    return parent;
}


"use strict";

const filterByMaterial = (key) => {
    return state.wallie.wallie.filter( (item) => {
                return item.tipos.toLowerCase() == key; 
            });
}