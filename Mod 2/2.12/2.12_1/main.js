"use strict";

const list = document.querySelector(".js-list");

const numbers = [1, 2, 3];

for (const number of numbers) {
  const newLi = document.createElement("li");
  console.log(newLi);
  console.log(number);
  const newContent = document.createTextNode(number);
  newLi.appendChild(newContent);
  list.appendChild(newLi);
}
