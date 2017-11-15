import React from 'react'
import { connect } from 'react-redux'

import MaterialItem from './MaterialItem'


class MaterialList extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <div className = "list-container col s4">
        {this.props.lugares.map(material => {
          return (
            <MaterialItem key={material.tipos} material={material} />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("materiallist", state);
  const { lugares } = state

  return {
    lugares,
  }
}

const ListaMaterialConRedux = connect(
  mapStateToProps
)(MaterialList)

export default ListaMaterialConRedux
