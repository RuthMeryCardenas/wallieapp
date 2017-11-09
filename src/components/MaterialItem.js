import React from 'react'
import { connect } from 'react-redux'
import { materialSeleccionado } from '../actions'

const MaterialItem = (props) => {
  const { material } = props
  const backgroundColor = material.color;
  const style = {
    backgroundColor
  }
  const styleSpan ={
    backgroundImage: `url(${material.icon})`
  }
  console.log('materialitem props', props)
  return (
    <div className="item-material col s12" style = {style}
      onClick={() => props.seleccionarMaterial(material)}
    >
      <div className = "col s2"  >
        <span className="icono " style={styleSpan}></span>
      </div>
      <div className = "col s10">{material.tipos}</div>
      
    </div>
  )
}

const ItemMaterialConRedux = connect(
  null,
  {
    seleccionarMaterial: materialSeleccionado
  }
)(MaterialItem)

export default ItemMaterialConRedux
