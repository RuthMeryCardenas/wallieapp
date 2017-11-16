import React from 'react'
import { connect } from 'react-redux'
import getLocation from '../reducers/ActualLocationReducer'
import DetalleLugar from './DetalleLugar'
import ReactMap from './ReactMaps'

console.log("local", getLocation());
class DetalleMaterial extends React.Component {
  renderDetalle() {
    if (!this.props.materialActivo) {
      return (
          <div className = "col s8 initial">
            <ReactMap zoom = {4} />
          </div>
      )
    }
    
    
    const { tipos, lugares_acopio } = this.props.materialActivo
    console.log('material activo', this.props.materialActivo)
    return (
      <div className="col s8">
        <ReactMap marcadores ={lugares_acopio} zoom={13}  />
        <DetalleLugar />
        
      </div>
    )
  }
  render() {
    console.log('Props Detallematerial', this.props)
    return this.renderDetalle()
  }
}

const mapStateToProps = (state) => {
  const { materialActivo } = state

  return {
    materialActivo
  }
}

const DetalleMaterialConRedux = connect(
  mapStateToProps
)(DetalleMaterial)

export default DetalleMaterialConRedux
