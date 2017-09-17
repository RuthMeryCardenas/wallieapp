"use strict";

const filterByMaterial = (key) => {
    return state.wallie.wallie.filter( (item) => {
                return item.tipos.toLowerCase() == key; 
            });
}