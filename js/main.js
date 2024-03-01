"use strict";

const GITHUB_USER = "noeliaaariza";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

const tasks = [];

const listTasks = document.querySelector(".list");
const spans = document.querySelectorAll(".js-span");
const checks = document.querySelectorAll(".js-check");
const inputText = document.querySelector(".js-input");
const inputButton = document.querySelector(".js-add");

function renderTasks(tareas) {
  listTasks.innerHTML = "";
  for (const tarea of tareas) {
    const liElement = document.createElement("li");
    liElement.setAttribute("class", "elements");
    listTasks.appendChild(liElement);

    const inputElement = document.createElement("input");
    inputElement.setAttribute("class", "js-check");
    inputElement.setAttribute("type", "checkbox");
    liElement.appendChild(inputElement);

    const spanElement = document.createElement("span");
    spanElement.setAttribute("class", "js-span");
    liElement.appendChild(spanElement);

    const textElement = document.createTextNode(tarea.name);
    spanElement.appendChild(textElement);

    /* listTasks.innerHTML += `
      <li class="elements">
        <input class="js-check" type="checkbox">
        <span class="js-span">${tarea.name} </span>
      </li>
      `;
    */
  }
}

fetch(SERVER_URL)
  .then((response) => response.json())
  .then((data) => {
    const tasksData = data.results;
    localStorage.setItem("taskOfDevil", JSON.stringify(tasksData));
    //renderTasks(tasksData);
  });

const tasksLocalStorage = JSON.parse(localStorage.getItem("taskOfDevil"));
if (tasksLocalStorage !== null) {
  renderTasks(tasksLocalStorage);
} else {
  renderTasks();
}

function handleNewTask(event) {
  event.preventDefault();
  const newTask = {
    name: inputText.value,
    completed: false,
  };

  tasks.push(newTask);

  for (const newTask of tasks) {
    const liElement = document.createElement("li");
    liElement.setAttribute("class", "elements");
    listTasks.appendChild(liElement);

    const inputElement = document.createElement("input");
    inputElement.setAttribute("class", "js-check");
    inputElement.setAttribute("type", "checkbox");
    liElement.appendChild(inputElement);

    const spanElement = document.createElement("span");
    spanElement.setAttribute("class", "js-span");
    liElement.appendChild(spanElement);

    const textElement = document.createTextNode(newTask.name);
    spanElement.appendChild(textElement);
  }
}

inputButton.addEventListener("click", handleNewTask);
