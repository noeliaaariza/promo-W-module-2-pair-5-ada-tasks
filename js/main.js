"use strict";

const GITHUB_USER = "noeliaaariza";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

const tasks = [];

const listTasks = document.querySelector(".list");
const spans = document.querySelectorAll(".js-span");
const checks = document.querySelectorAll(".js-check");
const inputText = document.querySelector('.js-input');
const inputButton = document.querySelector('.js-add');




function renderTasks(tareas) {
  for (const tarea of tareas) {
    listTasks.innerHTML += `
      <li class="elements">
        <input class="js-check" type="checkbox">
        <span class="js-span">${tarea.name} </span>
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

  function handleNewTask(event){
    event.preventDefault();
    const textValue = inputText.value;
    const newTask = {
      name: inputText.value, 
      completed: false,
    };
    
    tasks.push(newTask);
    for(const newTask of tasks){
      listTasks.innerHTML += `
      <li class="elements">
        <input class="js-check" type="checkbox">
        <span class="js-span">${newTask.name} </span>
      </li>
      `;
    }
 

  }

  inputButton.addEventListener('click', handleNewTask);

// check.addEventListener('click', handleclick);
