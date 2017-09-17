"use strict";

const MapaRecicla = (updated) => {

    const parent = $('<div class="row"></div>');
    const mapa = $('<div id="mapa" class="col s10"></div>');
    const detail = $('<div class=""></div>');

    parent.append(mapa);
    parent.append(detail);

    state.locations[0].lugares_acopio.map(function (location) {
        parent.append(locationDetail(location, updated));
    });

    return parent;

}
