"use strict";
const btn = document.querySelector(".js-btn");
const text = document.querySelector(".js-text");

function getProfile() {
  fetch(`https://api.github.com/users/${text.value}`)
    .then((response) => response.json())
    .then((data) => {
      document.body.innerHTML += `<p>Name: </p>${data.name}`;
      document.body.innerHTML += `<p>Número de repositorios: </p>${data.public_repos}`;

      document.body.innerHTML += `<p>Imagen avatar: </p><img src=${data.avatar_url}>`;

      /*img.src = `https://api.github.com/users/${text.value}`;
      img.alt = "avatar del perfil";*/
    });
}

btn.addEventListener("click", getProfile);
