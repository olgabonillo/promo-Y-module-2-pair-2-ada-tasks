'use strict';
const formSearch = document.querySelector(".js-form-search");
const formList = document.querySelector(".js-list-tasks");
const buttonAgregar = document.querySelector(".js-button1");
const buttonBuscar = document.querySelector(".js-button2");
const listTasks = document.querySelector(".js-list");

const tasks = [
    { name: "Aprender flexbox", completed: true, id: 1},
    { name: "Maquetar la página web del proyecto", completed: true, id:2},
    { name: "Estudiar la lección invertida", completed: true, id:3},
    { name: "Aprender cómo se realizan las peticiones al servidor en JavaScript", completed: false, id:4},
    ];

    let taskHTML = '';
    tasks.forEach((task) => {
        const classli = task.completed === true ? 'tachado' : ''
        const ischecks = task.completed === true ? 'checked' : ''
        taskHTML += `<li class='${classli}'> <input type='checkbox' id='${task.id}'${ischecks}>${task.name}</li>`;
        
    });
    listTasks.innerHTML = taskHTML;

