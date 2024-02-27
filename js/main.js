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
    completed: true,
  },
];

const listTasks = document.querySelector(".list");
const spans = document.querySelectorAll('.js-span');
const checks = document.querySelectorAll('.js-check');

function renderTasks(){

  for (let i = 0; i < tasks.length; i++) {
    listTasks.innerHTML += `
    <li class="elements">
      <input  id= ${tasks.name} class="js-check" type="checkbox">
      <span class="js-span">${tasks[i].name} </span>
    </li>
    `;
    if(tasks[i].completed === true){
      spans[i].classList.add('crossOut');
    }
  }
}











renderTasks();

// check.addEventListener('click', handleclick);
