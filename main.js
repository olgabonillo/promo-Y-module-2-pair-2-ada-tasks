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

const list = (tasks) => {
    listTasks.innerHTML += (tasks.name)
    };
/* listTasks.innerHTML = (""); */



 console.log(tasks);

