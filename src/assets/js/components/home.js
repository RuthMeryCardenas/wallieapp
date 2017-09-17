"use strict";


const Home = (updated) => {

    const parent = $('<div class="container"></div>');
    const row = $('<div class="row"><div>');
    const div = $('<div class="center-align col s12"></div>');
    const btnRecicle = $('<div class="col s6><a class="waves-effect waves-light btn-large">Recicla</a></div>');
    const btnPoint = $('<div class="col s6><a class="waves-effect waves-light btn-large">Cargar Nuevo Punto</a></div>');
    const btnTips = $('<div class="col s6><a class="waves-effect waves-light btn-large">Tips</a></div>');
    

    div.append(btnRecicle);
    div.append(btnPoint);
    div.append(btnTips);    
    row.append(div);
    parent.append(row);


    return parent;

}