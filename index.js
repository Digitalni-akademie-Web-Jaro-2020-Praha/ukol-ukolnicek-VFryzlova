'use strict';

let tasks = [
  "Zalít květiny",
  "Vyprat prádlo",
  "Vynést koš",
  "Vyluxovat",
];
const addBtn = document.querySelector(".btn-add");
const newTask = document.querySelector(".new-task");

const updateTasks = () => {
  const taskElm = document.querySelector(".todo__tasks");
  taskElm.innerHTML = "";
  for (let i = 0; i < tasks.length; i ++){
    taskElm.innerHTML += `<div class="task">${tasks[i]}</div>`;
  }
}
updateTasks();

const addTask = () =>{
  const newTask = document.querySelector(".new-task");
  if(newTask.value !== ""){
  tasks.push(newTask.value);
  updateTasks(tasks);
  newTask.value = "";
} else {
  alert("Nezadána hodnota");
}
}

addBtn.addEventListener("click", addTask);
updateTasks(tasks); 


