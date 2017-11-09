import React from 'react'

const Formulario = ({}) => {
    return (
        <section className="cont">
            <div className="row">
                <form className="col s10 form_new push-s1">
                    <div className="row">
                        <div className="input-field col s10">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" type="text" className="validate dataMust" />
                            <label htmlFor="icon_prefix">Nombre</label>
                        </div>
                        <div className="input-field col s10">
                            <i className="material-icons prefix">phone</i>
                            <input id="icon_telephone" type="number" maxLength="999999999" className="validate" />
                            <label htmlFor="icon_telephone">Celular</label>
                        </div>
                        <div className="input-field col s10">
                          <i className="material-icons prefix">drafts</i>
                          <input id="email" type="email" className="validate" />
                          <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                        </div>
                        <div className="input-field col s10">
                            <i className="material-icons prefix">location_city</i>
                            <input id="ubicacion" type="text" placeholder="" className="validate dataMust" />
                            <label htmlFor="ubicacion">Ubicación</label>
                        </div>
                        <div className="col s10">
                            <h6>Horario de Recepción</h6>
                        </div>
                        <div className="col s12">
                            <p className="inline"><input type="checkbox" className="filled-in dataMust" id="dia1" /><label htmlFor="dia1">L</label></p>
                            <p className="inline"><input type="checkbox" className="filled-in" id="dia2" /><label htmlFor="dia2">M</label></p>
                            <p className="inline"><input type="checkbox" className="filled-in" id="dia3" /><label htmlFor="dia3">Mi</label></p>
                            <p className="inline"><input type="checkbox" className="filled-in" id="dia4" /><label htmlFor="dia4">J</label></p>
                        </div>
                        <div className="col s10">
                            <p className="inline"><input type="checkbox" className="filled-in" id="dia5" /><label htmlFor="dia5">V</label></p>
                            <p className="inline"><input type="checkbox" className="filled-in" id="dia6" /><label htmlFor="dia6">S</label></p>
                            <p className="inline"><input type="checkbox" className="filled-in" id="dia7" /><label htmlFor="dia7">D</label></p>
                        </div>
                        <div className="input-field col s5">
                          <i className="material-icons prefix">event</i>
                          <input type="text" className="timepicker dataMust" />
                          <label htmlFor="icon_event" className="active">Inicio</label>
                        </div>
                        <div className="input-field col s5">
                          <i className="material-icons prefix">event</i>
                          <input type="text" className="timepicker dataMust"/>
                          <label htmlFor="icon_event" className="active">Fin</label>
                        </div>
                        <div className="col s10">
                            <h6>Materiales</h6>
                        </div>
                        <div className="col s5">
                            <p><input type="checkbox" className="filled-in dataMust" id="in1" /><label htmlFor="in1">Plástico</label></p>
                            <p><input type="checkbox" className="filled-in" id="in2" /><label htmlFor="in2">Ropa</label></p>
                            <p><input type="checkbox" className="filled-in" id="in3" /><label htmlFor="in3">Vidrio</label></p>
                        </div>
                        <div className="col s5">
                            <p><input type="checkbox" className="filled-in" id="in4" /><label htmlFor="in4">Pilas</label></p>
                            <p><input type="checkbox" className="filled-in" id="in5" /><label htmlFor="in5">Aceite</label></p>
                            <p><input type="checkbox" className="filled-in" id="in6" /><label htmlFor="in6">Papel y Carton</label></p>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" data-length="120"></textarea>
                            <label htmlFor="textarea1">Observación</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Enviar<i className="material-icons right">send</i></button>
                </form>
                <div className="">
                    <a className="waves-effect waves-light btn-large actions">Volver</a>
                </div>
            </div>
        </section>
    )
}

export default Formulario