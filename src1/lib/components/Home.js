import React from 'react'

const Home = ( { } ) => {
    return (
        <div className= "center-align fondo">
            <div className="recicla">
                <a className="waves-effect waves-light btn-large actions"><i className="icon-recycle"></i>Recicla</a>
            </div>
            
            <div className="recicla">
                <a className="waves-effect waves-light btn-large actions"><i className="icon-map-pin"></i>Cargar Nuevo Punto</a>
            </div>
            
            <div className="recicla">
                <a className="waves-effect waves-light btn-large actions"><i className="icon-lightbulb"></i>Tips</a>
            </div>
        </div>
    )
}

export default Home