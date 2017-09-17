"use strict";

const Recicla = (updated) => {

    const tipos = [ { name: "Plastico", img: "" }, 
                    { name: "Vidrio", img: "" }, 
                    { name: "Ropa", img: "" }, 
                    { name: "Aceite", img: "" }, 
                    { name: "Cartón y Papel", img: "" }, 
                    { name: "Pilas", img: "" }];
                    
    const parent = $('<div class="container"></div>');
    const row = $('<div class="row"><div>');
    const divTitle = $('<div class="center-align col s12">Recicla</div>');

    tipos.forEach(function(type){
        const divContent = $('<div class="col s6"></div>');
        const img = $('<a class=""><span class=""></span></a>');
        const h5 = $('<h5 class="morado">'+ type.name + '</h5>');

        divContent.append(h5);
        divContent.append(img);
    });

    row.append(divTitle);    
    row.append(divConte);
    parent.append(row);
    

    return parent;

}