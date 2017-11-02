import React from 'react'
import DetailLocation from './DetailLocation'
// import Data from '../utils/GetData'

const MapaRecicla = ({ key, name}) => {

    // const data = Data.wallie;
    
    return ( 
        <div className="row"><h4>{name}</h4>
            <div id="mapa" className="col s12"></div>
            <div className="col s12">
                <DetailLocation name = ""/>
            </div>
            <div className="col s5 push-s3"><a className="waves-effect waves-light btn-large">Volver</a></div>
        </div>
    )
}

export default MapaRecicla