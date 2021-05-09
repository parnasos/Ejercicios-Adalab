'use strict';

const p =document.querySelector(".p");
const input = document.querySelector(".input");

input.addEventListener ("keydown", translate);

function translate(event) {
    p.innerHTML = (event.currentTarget.value);
   
}
console.log(translate)