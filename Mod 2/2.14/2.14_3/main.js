"use strict";
let counter = -2;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector(".time");
  time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 2000);
