"use strict";
const pText = document.querySelector(".js-p");

console.log(pText.offsetHeight);
const ptextHeight = pText.offsetHeight;

pText.style.offsetHeight = (1 / 3) * pText.offsetHeight;
console.log(pText.style.offsetHeight);
