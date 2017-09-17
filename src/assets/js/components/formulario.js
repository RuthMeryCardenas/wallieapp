'use strict';
const FormAcopio = (update) => {

  const cont_form =$('<section class="cont"></section>');
  const form =$('<div class="row">'+
    '<form class="col s12">'+
      '<div class="row">'+
      '  <div class="input-field col s10">'+
        '  <i class="material-icons prefix">account_circle</i>'+
        '  <input id="icon_prefix" type="text" class="validate">'+
        '  <label for="icon_prefix">Nombres y Apellidos</label>'+
      '  </div>'+
      '  <div class="input-field col s10">'+
        '  <i class="material-icons prefix">phone</i>'+
        '  <input id="icon_telephone" type="number"  maxlength="999999999"  class="validate">'+
        '  <label for="icon_telephone">Celular</label>'+
        '</div>'+
        '<div class="input-field col s10">'+
          '  <i class="material-icons prefix">drafts</i>'+
          '  <input id="email" type="email" class="validate">'+
          '  <label for="email" data-error="wrong" data-success="right">Email</label>'+
        '</div>'+
        '<div class="input-field col s10">'+
          '  <i class="material-icons prefix">location_city</i>'+
          '  <input id="icon_location_city" type="tel" class="validate">'+
          '  <label for="icon_location_city">Ubicación</label>'+
        '</div>'+
        '<div class="col s10"><h6>Horario de Recepción</h6></div>'+
        '<div class="col s10">'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia1"/><label for="dia1">L</label></p>'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia2" /><label for="dia2">M</label></p>'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia3" /><label for="dia3">Mi</label></p>'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia4"/><label for="dia4">J</label></p>'+
        '</div>'+
        '<div class="col s10">'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia5" /><label for="dia5">V</label></p>'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia6" /><label for="dia6">S</label></p>'+
        '<p class="inline"><input type="checkbox" class="filled-in" id="dia7" /><label for="dia7">D</label></p>'+
        '</div>'+
        '<div class="input-field col s5">'+
          '  <i class="material-icons prefix">event</i>'+
          '  <input type="text" class="timepicker" required>'+
          '  <label for="icon_event">Inicio</label>'+
        '</div>'+
        '<div class="input-field col s5">'+
          '  <i class="material-icons prefix">event</i>'+
          '  <input type="text" class="timepicker" required>'+
          '  <label for="icon_event">Fin</label>'+
        '</div>'+
        '<div class="col s10"><h6>Materiales</h6></div>'+
        '<div class="col s5">'+
          '<p><input type="checkbox" class="filled-in" id="in1"/><label for="in1">Plástico</label></p>'+
          '<p><input type="checkbox" class="filled-in" id="in2" /><label for="in2">Ropa</label></p>'+
          '<p><input type="checkbox" class="filled-in" id="in3" /><label for="in3">Vidrio</label></p>'+
        '</div>'+
        '<div class="col s5">'+
          '<p><input type="checkbox" class="filled-in" id="in4"/><label for="in4">Pilas</label></p>'+
          '<p><input type="checkbox" class="filled-in" id="in5"/><label for="in5">Aceite</label></p>'+
          '<p><input type="checkbox" class="filled-in" id="in6" /><label for="in6">Papel y Carton</label></p>'+
        '</div>'+
        '<div class="input-field col s12">'+
            '<textarea id="textarea1" class="materialize-textarea" data-length="120"></textarea>'+
            '<label for="textarea1">Observación</label>'+
         '</div>'+
    '  </div>'+
  '  </form>'+
  '</div>');
  const btn_send =$('<button class="btn waves-effect waves-light" type="submit" name="action">Enviar<i class="material-icons right">send</i></button>');
  form.append(btn_send);
  cont_form.append(form);

  btn_send.on('click', (e) =>{
    e.preventDefault();
     state.pagina = 5;
     update();
  });

  $(_ => {
      $('.timepicker').pickatime({
      default: 'now', // Set default time: 'now', '1:30AM', '16:30'
      fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
      twelvehour: false, // Use AM/PM or 24-hour format
      donetext: 'OK', // text for done-button
      cleartext: 'Clear', // text for clear-button
      canceltext: 'Cancel', // Text for cancel-button
      autoclose: false, // automatic close timepicker
      ampmclickable: true, // make AM PM clickable
      aftershow: function(){} //Function for after opening timepicker
    });
  });

  return cont_form;
};
