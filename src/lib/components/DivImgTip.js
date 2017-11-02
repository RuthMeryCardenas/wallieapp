import React from 'react'

const DivImgTip = ({ruta}) => {
    return (
        <div className="center-align col s12">
            <img src= {"assets/img/" + ruta} alt="" className="img-responsive"/>
        </div>
    )
}

export default DivImgTip