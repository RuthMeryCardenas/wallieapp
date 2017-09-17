'use strict';

const postWallie = (newLocation) => {
    var postData = {
        direccion: newLocation.direccion,
        horario: newLocation.hoario,
        latitud: newLocation.latitud,
        longitud: newLocation.longitud,
        name: newLocation.name
    };

    var newPostKey = firebase.database().ref().child('wallie');
    

    


   
}