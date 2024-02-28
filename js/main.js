"use strict";

const GITHUB_USER = "noeliaaariza";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

const tasks = [];

const listTasks = document.querySelector(".list");
const spans = document.querySelectorAll(".js-span");
const checks = document.querySelectorAll(".js-check");

fetch(SERVER_URL)
  .then((response) => response.json())
  .then((data) => {
    const tasksData = data.results;
    renderTasks(tasksData);
  });

function renderTasks(tareas) {
  for (const tarea of tareas) {
    listTasks.innerHTML += `
      <li class="elements">
        <input class="js-check" type="checkbox">
        <span class="js-span">${tarea.name} </span>
      </li>
      `;
    //console.log(tarea.name);
  }
}

//Completa el código;
//Guarda la respuesta obtenida enla variable para el listado de tareas: `tasks`

// check.addEventListener('click', handleclick);
