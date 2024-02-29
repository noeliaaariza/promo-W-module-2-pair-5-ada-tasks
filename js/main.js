"use strict";

const GITHUB_USER = "noeliaaariza";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

const tasks = [];

const listTasks = document.querySelector(".list");
const spans = document.querySelectorAll(".js-span");
const checks = document.querySelectorAll(".js-check");

function renderTasks(tareas) {
  listTasks.innerHTML = "";
  for (const tarea of tareas) {
    const checked = tarea.completed ? "checked" : "";
    const classLi = tarea.completed ? "crossOut" : "";

    listTasks.innerHTML += `
        <li class="elements">
          <input class="js-check" type="checkbox" ${checked} id="${tarea.name}">
          <span class="js-span ${classLi}">${tarea.name} </span>
        </li>
        `;

  }
}

fetch(SERVER_URL)
  .then((response) => response.json())
  .then((data) => {
    const tasksData = data.results;
     renderTasks(tasksData);
  });



function handleClickCheckbox(event) {
  event.preventDefault();
  const inputId = event.target.id;
  console.log(inputId);
  const taskIndex = tasks.findIndex((task) => {
    return task.name === inputId;
  });
  console.log('taskIndex', taskIndex);
  tasks[taskIndex].completed = true;
  renderTasks(tasks);
}


// listTasks.addEventListener("click", handleClickCheckbox);

// método findIndex devuelve el primer resultado que coincide con la condición que devuelve el return. Siempre un método pide una función dentro, y el return recoge el valor.Pasamos el parámetro tarea, que hemos asociado con el tasks.findIndex al que se le pasa siempre una función con parámetro. Declaramos la variable inputID, que recoge el event.target.id que hemos llamado igual que el campo name de nuesrtro array.
