import React from 'react'
// import Data from '../utils/GetData'

const RutaRecicla = ({ key, name, direccion }) => {


    return (
        <div>
            <div id="mapa"></div>
            <div className="detail">
                <div className="cont_detail" data-lugar="">
                    <div className="name_acopio"><i className="icon-feather "></i><span className="">{name}</span></div>
                    <div className="ruta_acopio"><span className="ruta">{direccion}</span></div>
                </div>
            </div>
            <div className="back flex"><a className="waves-effect waves-light btn-large">Volver</a></div>
        </div>
    )
}

export default RutaRecicla