'use strict';


let tasks = [
  "Zalít květiny",
  "Vyprat prádlo",
  "Vynést koš",
  "Vyluxovat",
];

const updateTasks = () => {
  const taskElm = document.querySelector(".todo__tasks");
  taskElm.innerHTML = "";
  for (let i = 0; i < tasks.length; i ++){
    taskElm.innerHTML += `<div class="task">${tasks[i]}</div>`;
  }
}
updateTasks();
const addBtn = document.querySelector(".btn-add");
const addTask = () =>{
  const newTask = document.querySelector(".new-task").value;
  tasks.push(newTask);
  updateTasks(tasks);
  newTask.value = "";
}
addBtn.addEventListener("click", addTask);
updateTasks(tasks);