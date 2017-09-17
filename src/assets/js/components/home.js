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