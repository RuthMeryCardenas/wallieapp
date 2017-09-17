'use strict';
const SuccesAcopio = (update) => {

  const divCont_end = $('<div class="text-center bg_yellow"></div>');
    const row1      =$('<div class="row"></div>');
    const logo      =$('<div class="col s12 center-align"><img src="assets/img/img1.jpg" class="logo" alt="check"></div>');
    const cont_text =$('<div class="col s12"><h5 class="center-align">¡Bien!<br>Gracias por ser parte del movimiento</h5></div>');

    row1.append(logo);
    row1.append(cont_text);
    divCont_end.append(row1) ;

    setTimeout(function(){
       state.pagina=null;
       update();}, 5000);

    return divCont_end;
}
