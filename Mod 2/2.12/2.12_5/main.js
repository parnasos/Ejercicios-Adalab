"use strict";
const form = document.querySelector(".js-form");
const surname = document.querySelector(".js-surname");
const phone = document.querySelector(".js-phone");

const contacts = [
  { name: "Ana", surname: "Lage", phone: "689878987" },
  { name: "Carolina", surname: "Ruiz", phone: "628763456" },
  { name: "Luna", surname: "Granados", phone: "686432571" },
];

function AutoCompleted(ev) {
  let idChoose = ev.target.value;
  console.log(idChoose);
  if (idChoose === "Ana") {
    surname.value = contacts[0].surname;
    phone.value = contacts[0].phone;
  } else if (idChoose === "Carolina") {
    surname.value = contacts[1].surname;
    phone.value = contacts[1].phone;
  } else if (idChoose === "Luna") {
    surname.value = contacts[2].surname;
    phone.value = contacts[2].phone;
  }
}

form.addEventListener("change", AutoCompleted);
