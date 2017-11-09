import React from 'react'

import MaterialList from './MaterialList'
import MaterialItem from './MaterialItem'
import DetalleMaterial from './DetalleMaterial'

const Main = () => {
  return (
    <div className = "main-container">
      <div className = "row">
        <MaterialList />        
        <DetalleMaterial />
      </div>
    </div>
  )
}

export default Main
