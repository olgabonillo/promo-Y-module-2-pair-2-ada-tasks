"use strict";
const formSearch = document.querySelector(".js-form-search");
const formList = document.querySelector(".js-list-tasks");
const buttonAgregar = document.querySelector(".js-button1");
const buttonBuscar = document.querySelector(".js-button2");
const listTasks = document.querySelector(".js-list");
const tareasTotales = document.querySelector(".js-frase");
const GITHUB_USER = "olgabonillo";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;


//EJERCICIO DOM
/** 
 * ul.js-list
 *   -> li
 *       -> input  (id, data-id, type, checked)
 *       -> #textNode (text)
 */
function renderTasks(tasks) {
  listTasks.innerHTML = '';
  
  tasks.forEach((task) => {
    const liElement = document.createElement('li');
    const taskInput = document.createElement('input');
    const taskText = document.createTextNode(task.name);

    taskInput.id = `task_${task.id}`;
    taskInput.dataset.id = task.id;
    taskInput.setAttribute('type', 'checkbox');
    taskInput.checked = task.completed;

    liElement.appendChild(taskInput);
    liElement.appendChild(taskText);

    listTasks.appendChild(liElement);
  });

  // data-<asdasd>=""

  //EJERCICIO FILTER- se guarda en una variable la cantidad de tareas que estan hechas y las que faltan por hacer para
  //se crea un filter y como condicion se usa task completed y no completed y luego obtengo el length.
  const completedTasks = tasks.filter((task) => task.completed).length;
  const todoTasks = tasks.length - completedTasks;

  tareasTotales.innerHTML = `Tienes ${tasks.length} tareas. ${completedTasks} completadas y ${todoTasks} por realizar.`;
}

//EJERCICIO FECHT
let task = [];
fetch(SERVER_URL)
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    const tasks = data.results;
    renderTasks(tasks);
  });

  
    /* const classli = task.completed === true ? "tachado" : "";
     const ischecks = task.completed === true ? "checked" : "";
     taskHTML += `<li class='${classli}'> <input type='checkbox' id='${task.id}'${ischecks}>${task.name}</li>`; */
    