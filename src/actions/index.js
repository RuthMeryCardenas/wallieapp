import {
  MATERIAL_SELECCIONADO
} from './types'
// import {
//   ACTUAL_LOCATION
// } from './types'

export const materialSeleccionado = (material) => {
  console.log('ActionCreator materialseleccionado', material)
  
  return {
    type: MATERIAL_SELECCIONADO,
    payload: material
  }
}

// export const actualLocation = (location) => {
//   console.log('ActionCreator actuallocation', location)

//   return {
//     type: ACTUAL_LOCATION,
//     payload: location
//   }
// }
