import {
  MATERIAL_SELECCIONADO
} from '../actions/types'

export default (state = null, action) => {
  switch (action.type) {
    case MATERIAL_SELECCIONADO:
      return action.payload
    default:
      return state
  }
}

