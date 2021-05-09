'use strict';

const button = document.querySelector(".button");

button.addEventListener ("click", loguear);

function loguear(event) {
    console.log(event);
}