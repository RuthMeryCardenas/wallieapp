import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

import './main.css'
// import Data from './lib/utils/GetData'

// import Home from './lib/components/Home'
// import Recicla from './lib/components/Recicla'
// import MapaRecicla from './lib/components/MapaRecicla'
// import RutaRecicla from './lib/components/RutaRecicla'
// import Formulario from './lib/components/Formulario'
// import Success from './lib/components/Success'
import DetailTips from './lib/components/DetailTips'


const App = () => (
    <div>
        <DetailTips />
    </div>
)

render(
    
    <App />,
    document.getElementById('root')
)
    


