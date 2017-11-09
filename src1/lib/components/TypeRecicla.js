import React from 'react'

const TypeRecicla = ({ name, img }) => {

    return (
        <div className="col s6" data-id={name}>
            <a className=""><i className={img} ></i></a>
            <h6 className="morado"> {name} </h6>
        </div>
    )
}

export default TypeRecicla
