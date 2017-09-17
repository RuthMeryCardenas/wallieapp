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
