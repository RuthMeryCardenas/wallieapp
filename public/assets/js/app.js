(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])