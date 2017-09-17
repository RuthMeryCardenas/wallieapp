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
    const container = $('<div class="center-align col s12"></div>')
    tipos.forEach(function(type){
        const divContent = $('<div class="col s6" data-id = "'+ type.name + '"></div>');
        const img = $('<a class=""><span class=""></span></a>');
        const h5 = $('<h5 class="morado">'+ type.name + '</h5>');

        divContent.append(h5);
        divContent.append(img);
        container.append(divContent);

        divContent.on("click", (e) => {
            e.preventDefault();
            const material = $(e.currentTarget).data("id");
            state.pagina = 2;
            updated(); 
        });
    });

    row.append(divTitle);    
    row.append(container);
    parent.append(row);
    

    return parent;

}