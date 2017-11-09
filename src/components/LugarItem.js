import React from 'react'


const LugarItem = (props) => {
    
    console.log('lugar props', props)
    return (
        <div className="cont_detail col s10">
            <div className="name_acopio col s7"><i className="icon-feather col s2"></i><span className="col s10">{props.material.name} </span></div>
            <div className="ruta_acopio col s5">
                <i className="icon-map col s2"></i>
                <span className="ruta col s10">Trazar ruta</span>
            </div>
        </div>
    )
}



export default LugarItem