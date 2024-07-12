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

    tasks.forEach((task) => {
      console.log(task);
      const liElement = document.createElement('li');
      listTasks.appendChild(liElement);
      
      const newInput = document.createElement('formList');

     /*  const classli = task.completed === true ? "tachado" : "";
      const ischecks = task.completed === true ? "checked" : "";
      taskHTML += `<li class='${classli}'> <input type='checkbox' id='${task.id}'${ischecks}>${task.name}</li>`; */
    });
    //se guarda en una variable la cantidad de tareas que estan hechas y las que faltan por hacer para
    //se crea un filter y como condicion se usa task completed y no completed y luego obtengo el length.
    const completedTasks = tasks.filter((task) => task.completed).length;
    const todoTasks = tasks.length - completedTasks;

    tareasTotales.innerHTML = `Tienes ${tasks.length} tareas. ${completedTasks} completadas y ${todoTasks} por realizar.`;
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
