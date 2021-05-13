"use strict";

/* 
Proceso 1. Enviar mensaje a usaria
1.Definir el numero RandomSource. Cuando carga la página. Solo deber haber un n. random.
2.Coger el número de la usuaria. Cuando hago click en el botón
3.Comparaciones y enviar mensaje. Una vez ya tengo el valor de la usuaria.

Proceso 2. Contar el n. de intentos.
(cont++ cont= cont+1, cont +=1)
*/
const btn = document.querySelector(".js-btn");
const inputElement = document.querySelector(".js-input");
const msj = document.querySelector(".js-msj");
const msjCounter = document.querySelector(".js-counter");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const numberRandom = getRandomNumber(100);
console.log(numberRandom);

const handleMsj = () => {
  const inputValue = parseInt(inputElement.value);
  console.log(inputElement.value);

  if (inputValue < 1 || inputValue > 100) {
    msj.innerHTML = "El número debe estar entre 1 y 100";
  } else if (inputValue < inputValue > 100) {
    msj.innerHTML = "Es muy bajo";
  } else if (inputValue > inputValue > 100) {
    msj.innerHTML = "Es muy alto";
  } else {
    msj.innerHTML = "Ganaste!";
  }
};

let cont = 0;
function counter() {
  cont++;
  console.log(cont);
  msjCounter.innerHTML = `El número de intentos es ${cont}`;
}

function handleClick(event) {
  event.preventDefault();
  handleMsj();
  counter();
}
btn.addEventListener("click", handleClick);
