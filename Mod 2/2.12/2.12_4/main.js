"use strict";
const pText = document.querySelector(".js-p");
const container = document.querySelector(".js-container");

console.log(pText.offsetHeight);
const ptextHeight = pText.offsetHeight;

pText.style.offsetHeight = (1 / 3) * pText.offsetHeight;
console.log(`Un tercio del <p> son: ${pText.style.offsetHeight} px`);

const containerheight = container.offsetHeight;
container.style.offsetHeight = (1 / 3) * container.offsetHeight;
console.log(
  `Un tercio del "container" son: ${container.style.offsetHeight} px`
);
