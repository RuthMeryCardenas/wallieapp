import React from 'react'
import DivImgTip from './DivImgTip'

const DetailTips = ({name})=> {
    return (
        <div className="container">
            <div className="row">
                <div className="center-align col s12">
                    <h4>{name} </h4>
                </div>
                <div className="center-align col s12">
                    <DivImgTip ruta = ""/>
                </div>
            </div>
            <div>
                <a className="waves-effect waves-light btn-large actions">Volver</a>
            </div>
        </div>
    )
}

export default DetailTips