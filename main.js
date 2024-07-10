"use strict";
const formSearch = document.querySelector(".js-form-search");
const formList = document.querySelector(".js-list-tasks");
const buttonAgregar = document.querySelector(".js-button1");
const buttonBuscar = document.querySelector(".js-button2");
const listTasks = document.querySelector(".js-list");
const tareasTotales = document.querySelector(".js-frase");

const GITHUB_USER = "olgabonillo";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

function renderTasks (tasks) {
    let taskHTML = "";
    let totalTask = "";

    tasks.forEach((task) => {
      const classli = task.completed === true ? "tachado" : "";
      const ischecks = task.completed === true ? "checked" : "";
      totalTask += `<p>Tienes X tareas</p> <input>`
      taskHTML += `<li class='${classli}'> <input type='checkbox' id='${task.id}'${ischecks}>${task.name}</li>`;
    });
    tareasTotales.innerHTML = totalTask;
    listTasks.innerHTML = taskHTML;
}

let task = [];
fetch(SERVER_URL)
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    const tasks = data.results;
    console.log(data);

  renderTasks(tasks);
  });
