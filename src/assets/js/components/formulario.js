'use strict';
const Formulario = (update) => {

  console.log("Holi mundi");
  const cont_form =$('<section class="container"></section>');
  const form =$('<div class="row"> '+
                  '<form class="col s12">'+
                    '  <div class="row">'+
                      '  <div class="input-field col s12">'+
                        '  <input id="email" type="email" class="validate">'+
                        '  <label for="email" data-error="wrong" data-success="right">Email</label>'+
                        '</div>'+
                    '  </div>'+
                    '</form>'+
              '  </div>');

  return cont_form;
};
