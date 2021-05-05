'use strict';

const message = document.querySelector('.content');
const title = document.querySelector('.title');
const text = document.querySelector('.text');

if (message.classList.contains('success')) {
    title.innerHTML = 'CORRECTO';
    text.innerHTML = 'Los datos son correctos';
}else if (message.classList.contains('error')){
    title.innerHTML = 'ERROR';
    text.innerHTML = 'Ha surgido un error';
}else if (message.classList.contains('warning')){
    title.innerHTML = 'AVISO';
    text.innerHTML = 'Tenga cuidado';
}

  