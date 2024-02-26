"use strict";

const tasks = [
  {
    name: "Recoger setas en el campo",
    completed: true,
  },
  {
    name: "Comprar pilas",
    completed: true,
  },
  {
    name: "Poner una lavadora de blancos",
    completed: true,
  },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

const listTasks = document.querySelector(".list");

for (let i = 0; i < tasks.length; i++) {
  listTasks.innerHTML += `
  <li class="elements">
    <input type="checkbox">
    <span>${tasks[i].name}</span>
  </li>
  `;
}
