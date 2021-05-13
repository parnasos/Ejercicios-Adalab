"use strict";
const list = document.querySelector(".js-list");

function turnDONE() {
  const tasks = [
    { name: "Recoger setas en el campo", completed: true },
    { name: "Comprar pilas", completed: true },
    { name: "Poner una lavadora de blancos", completed: true },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
    },
  ];
  for (let task in tasks) {
    const liElement = document.querySelectorAll("li");
    liElement.innerText = task.name;

    if (task.completed === true) {
      task.classList.add("taskDone");
    }
  }
  console.log(`Tienes ${tasks.length} tareas pendientes.`);

  console.log(tasks);
}
turnDONE();
