import React from 'react'

const DetailLocation = ({ name}) => {
    return (
        <div className="cont_detail" data-lugar="">
            <div className="name_acopio"><i className="icon-feather "></i><span className="">{name} </span></div>
            <div className="ruta_acopio">
                <i className="icon-map"></i>
                <span className="ruta">Trazar ruta</span>
            </div>
        </div>
        
    )
}

export default DetailLocation