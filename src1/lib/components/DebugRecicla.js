// puede servir para diferencia en los click

import React from 'react'
import PropTypes from 'prop-types'


const DebugRecicla = (ComponenteADebugear) => {

    const tipos = [{ name: "Plastico", img: "icon-bowling-pins" },
    { name: "Vidrio", img: "icon-wine" },
    { name: "RAEE", img: "icon-megaphone" },
    { name: "Aceite", img: "icon-caution" },
    { name: "Cartón y Papel", img: "icon-box2" },
    { name: "Pilas", img: "icon-battery2" }];

    return (props) => {
        return (
            <div className="container">
                <div className="row bg_green_ligth">
                    <div className="center-align col s12 recicla">
                        <h4>Recicla</h4>
                    </div>
                    <div className="center-align col s12 cont_optciones">
                        {tipos.map((type) => {
                            return (
                                <ComponenteADebugear key={type.name} name={type.name} img={type.img} {...props} />

                            )
                        })}
                    </div>
                </div>
                <div className="bg_green_ligth1 flex">
                    <a className="waves-effect waves-light btn-large actions">Volver</a>
                </div>
            </div>
        )
    }
}

DebugComponent.propTypes = {
    ComponenteADebugear: PropTypes.element.isRequired
}


export default DebugRecicla