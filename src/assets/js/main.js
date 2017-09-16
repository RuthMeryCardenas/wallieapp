'use strict';
const root = $(".root");
const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');

    switch (state.pagina) {
       
        case 1:
            wrapper.append(DetailBrand(updated));
            break;
        case 2:
            wrapper.append(DetailType(updated));
            break;
        case 3:
            wrapper.append(DetailSubType(updated));
            break;
        case 4:
            wrapper.append(DetailProduct(updated));
            break;
        case 5:
            wrapper.append(Servicios(updated));
            break;
        case 6:
            wrapper.append(Empresa(updated));
            break;
        case 7:
            wrapper.append(Contacto(updated));
            break;
    }

    root.append(wrapper);

}

const updated = function () {
    render(root);
}
const state = {
    pagina: null,
}


$(_ => {

    const root = $(".root");
    if(state.pagina != null){
        render(root);
    }

});

$(document).ready(function () {
    var date = new Date()
    $('.slider').slider();
    $(".copy-year").text(date.getFullYear());
});
