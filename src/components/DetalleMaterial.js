import React from 'react'
import { connect } from 'react-redux'
import Map from './Mapa'
import DetalleLugar from './DetalleLugar'

class DetalleMaterial extends React.Component {
  renderDetalle() {
    if (!this.props.materialActivo) {
      return (
          <div className = "col s8 initial">
            <Map />
          </div>
      )
    }
    
    
    const { tipos } = this.props.materialActivo

    return (
      <div className="col s8">
        <Map />
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
