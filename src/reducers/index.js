import { combineReducers } from 'redux'

import PlacesReducer from './PlacesReducer'
import MaterialSeleccionadoReducer from './MaterialSeleccionadoReducer'

export default combineReducers({
  lugares: PlacesReducer,
  materialActivo: MaterialSeleccionadoReducer
})
