"use strict";


const locationDetail = (updated) => {

    const parent = $('<div class=""></div>');
    const name = $('<span class=""></span>');
    const icon = $('<span class = "ruta"></span>');

    parent.append(name);
    parent.append(icon);

    icon.on("click", (e) => {
        e.preventDefault();

    });

    return parent;
}
