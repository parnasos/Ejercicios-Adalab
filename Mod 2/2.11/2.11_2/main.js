"use strict";

const btn = document.querySelector(".js-btn");
const character = document.querySelector(".character");
const characterList = document.querySelector(".js-characters");

function findCharacter() {
  fetch(`https://swapi.dev/api/people/?search=${character.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const charactersFinded = data.results;
      //const characterList = document.querySelector(".js-characters");
      //let content = "";

      for (let i = 0; i < charactersFinded.length; i++) {
        characterList.innerHTML += `<li>Character´s name: ${charactersFinded[i].name} </li>`;
        characterList.innerHTML += `<li>Character´s gender: ${charactersFinded[i].gender} </li>`;
      }
    });
}

btn.addEventListener("click", findCharacter);
