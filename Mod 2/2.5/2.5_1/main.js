'use strict';

const message = document.querySelector(".message");
const button = document.querySelector(".button");

button.addEventListener ("click", hiMessage);

function hiMessage () {
message.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}