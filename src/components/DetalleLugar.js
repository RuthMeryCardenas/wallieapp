import React from 'react'
import { connect } from 'react-redux'
import LugarItem from './LugarItem'

class DetalleLugar extends React.Component {
    renderDetalle() {
        if (!this.props.materialActivo) {
            return (
                <div className="col s12">
                   
                </div>
            )
        }



        console.log('Props Detallelugar', this.props)
        return (
            <div className="col s12">
                {this.props.materialActivo.lugares_acopio.map(material => {
                    return (
                        <LugarItem key={material.name} material={material} />
                    )
                })}
            </div>
        )
    }
    render() {
        return this.renderDetalle()
    }
}

const mapStateToProps = (state) => {
    const { materialActivo } = state

    return {
        materialActivo
    }
}

const DetalleLugarConRedux = connect(
    mapStateToProps
)(DetalleLugar)

export default DetalleLugarConRedux
