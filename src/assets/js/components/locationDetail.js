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
