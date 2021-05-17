"use strict";
//pintar el listado de nombres de todas las razas
//pintar una imagen de cada raza de perro
const breedList = document.querySelector(".js-list");

//si quiero meter en una constante la lista general de perros, creo un array vacia y las voy a introducir con un bucle y un push
const listBreed = [];
fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (const breed in data.message) {
      listBreed.push(breed);
      //breedList.innerHTML += `<li>${breed}</li>`;
      let url = `https://dog.ceo/api/breeds/${breed}/images/random`;
      console.log(url);
      fetch(url)
        .then((response) => response.json)
        .then((dataImage) => {
          breedList.innerHTML += `<li><img src="${dataImage.message}"/></li>`;
        });
    }
  });
