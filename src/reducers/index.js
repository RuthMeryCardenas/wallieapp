import { combineReducers } from 'redux'

import PlacesReducer from './PlacesReducer'
import MaterialSeleccionadoReducer from './MaterialSeleccionadoReducer'
import ActualLocationReducer from './ActualLocationReducer'


export default combineReducers({
  lugares: PlacesReducer,
  materialActivo: MaterialSeleccionadoReducer
  // actualLocation: ActualLocationReducer
})
