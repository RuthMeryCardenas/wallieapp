import {
    ACTUAL_LOCATION
} from '../actions/types'

let LOCAL;


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sendvalue, error);
    
} else {
    // Browser doesn't support Geolocation
    alert("Geolocation is not supported by this browser.");
}

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
};

function sendvalue(position) {
    const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };
    LOCAL = pos;
    console.log("fuera",LOCAL)
}

// const UBICACION = LOCAL!= undefined ? LOCAL: null;



// export default (state = UBICACION, action) => {
//     console.log("state", state)
//     switch (action.type) {
//         case ACTUAL_LOCATION:
//             return action.payload
//         default:
//             return state
//     }
// }

export default LOCAL;
