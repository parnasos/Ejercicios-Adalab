"use strict";

const content = document.querySelector(".input");
const p = document.querySelector(".p");

function handlerChanges(event) {
  const text = event.key;

  for (let i = 0; i < text.length; i++) {
    p.innerHTML += text[i];
  }
  const textedName = p.innerHTML;
  localStorage.setItem("textedName", JSON.stringify(textedName));
}
const savedText = JSON.parse(localStorage.getItem("textedName"));
console.log(savedText);
//textedName = savedText;
content.addEventListener("keyup", handlerChanges);
