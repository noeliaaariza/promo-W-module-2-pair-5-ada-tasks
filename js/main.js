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

function renderTasks() {
  for (const task of tasks) {
    listTasks.innerHTML += `
      <li class="elements">
        <input id="check-${task.name}" class="js-check" type="checkbox">
        <span class="js-span">${task.name}</span>
      </li>
    `;
  }

  const checks = document.querySelectorAll(".js-check");
  for (const check of checks) {
    check.addEventListener("change", handleCheckboxChange);
  }
}

function handleCheckboxChange(event) {
  const checkbox = event.target;
  const span = checkbox.nextElementSibling;

  if (checkbox.checked) {
    span.classList.add("crossOut");
  } else {
    span.classList.remove("crossOut");
  }
}

renderTasks();
