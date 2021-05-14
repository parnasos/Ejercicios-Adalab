"use strict";

/*
Proceso 1.
a. cuando cargue la pagina se tienen que pintar las tareas
b. escuchar un evento sobre las tareas pintadas.
Proces 2. qué pasa cuando hay click? 
a. recoger en qué elemento ha clickado
b.Modificar el estado de la tarea
c.Volver a mostrar las tareas
d. escuchar evento de nuevo.
*/

const list = document.querySelector(".js-list");

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

function paintTasks() {
  let html = "";
  let className = "";
  let checked = "";
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    if (task.completed === true) {
      className = "taskDone";
      checked = "checked";
    } else {
      className = "";
      checked = "";
    }
    html += `<li class = "${className}">`;
    html += `<input class="js-checkbox" type="checkbox" value="${i}" ${checked}/>`;
    html += `${task.name}</li>`;
  }
  list.innerHTML = html;
  listenClick();
}
function listenClick() {
  const checkboxElements = document.querySelectorAll(".js-checkbox");
  for (let i = 0; i < checkboxElements.length; i++) {
    checkboxElements[i].addEventListener("change", handlerCheck);
  }
}
function handlerCheck(evt) {
  console.log(evt.target.value);
  const clicked = evt.target.value;
  tasks[clicked].completed = !tasks[clicked].completed;
  paintTasks();
}
paintTasks();
