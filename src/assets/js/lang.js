'use strict';

$( _ => {


    $('.lang-es').on('click', e => {
        $('.black-in').addClass('animated fadeOut');
        $('.lang').addClass('animated fadeOut');
        setTimeout(function () {
            window.location.href = './es/home.html';
        }, 750);
    });
    
    $('.lang-en').on('click', e => {
        $('.black-in').addClass('animated fadeOut');
        $('.lang').addClass('animated fadeOut');
        setTimeout(function () {
            window.location.href = './en/home.html';
        }, 750);
    });


    console.log("%c¿Quieres ver más código? %cTe invito a mi repositorio en %cgithub.com/anadurand :)", "color: #059b85; font-size:15px; font-weight:bold", "color: #483e45; font-size:15px;", "color: #483e45; font-size:15px;font-weight:bold;");
});

