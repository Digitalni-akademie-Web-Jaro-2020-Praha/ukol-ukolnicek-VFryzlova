'use strict';


const tasks = [
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