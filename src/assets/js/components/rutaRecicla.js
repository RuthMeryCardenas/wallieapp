"use strict";

const RutaRecicla = (updated) => {

    const parent = $('<div class=""></div>');
    const mapa = $('<div id="mapa"></div>');
    const detail = $(`<div class="detail"><div class="cont_detail" data-lugar=""><div class="name_acopio"><i class="icon-feather "></i><span class="">${state.selectedLocation.name}</span></div><div class="ruta_acopio"><span class="ruta">${state.selectedLocation.direccion}</span></div></div></div>`);
    const btnReturn = $('<div class="back flex"><a class="waves-effect waves-light btn-large">Back</a></div>');

    console.log(state.selectedLocation);
    parent.append(mapa);
    parent.append(detail);
    parent.append(btnReturn);

    btnReturn.on("click", (e) => {
        e.preventDefault();
        state.pagina = state.pagina - 1;
        state.selectedLocation = null;
        updated();
    });

    return parent;

}
