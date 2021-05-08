'use strict';

const message = document.querySelector(".message");
const name = document.querySelector(".name");
const button = document.querySelector(".button");

button.addEventListener ("click", hiMessage);

function hiMessage () {
    
    console.log ( `Hola ${name.value}`);
    message.innerHTML= `Hola ${name.value}`
}
