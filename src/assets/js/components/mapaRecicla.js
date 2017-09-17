"use strict";


const MapaRecicla = (updated) => {

    const parent = $('<div class=""></div>');
    const mapa = $('<div id="mapa"></div>');
    const detail = $('<div class=""></div>');
    
    parent.append(mapa);
    parent.append(detail);

    state.locations.map(function (location) {
        locationDetail(detail, location);
    });
        
    return parent;
    
}

