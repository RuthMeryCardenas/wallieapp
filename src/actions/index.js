import {
  MATERIAL_SELECCIONADO
} from './types'

export const materialSeleccionado = (material) => {
  console.log('ActionCreator materialseleccionado', material)
  
  return {
    type: MATERIAL_SELECCIONADO,
    payload: material
  }
}
