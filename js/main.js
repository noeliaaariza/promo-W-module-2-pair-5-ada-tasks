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

for (let i = 0; i < tasks.length; i++) {
  listTasks.innerHTML += `
  <li class="elements">
    <input class="js-check" type="checkbox">
    <span class="js-tick">${tasks[i].name}</span>
  </li>
  `;
}

const tick = document.querySelector('.js-tick');
const check = document.querySelector('.js-check');

function handleclick(){

for(task of tasks){
  if(tasks.completed === true){
      tick.classList.add('crossOut');
    }
}
  // for(let i = 0; i < tasks.length; i++) 
  // if(tasks.completed === true){
  //   tick.classList.add('crossOut');
  // }
}






check.addEventListener('click', handleclick);
