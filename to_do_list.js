const input = document.getElementById("inputTask");
const form = document.getElementById("enterTask");
const del = document.getElementById("deleteBtn");
const display = document.getElementById("display");

let index = 1;
//GET from local storage
//display on page load

let task = new Object();
let tasks = new Array();
task.taskValue = input.value;
tasks.unshift(task);

// if (localStorage.getItem("tasks")) {
//     const prevTasks = JSON.parse(localStorage.getItem("tasks"));
//     const newTasks = [...prevTasks, tasks];
//     input.value = " ";
//     localStorage.setItem("tasks", JSON.stringify(newTasks));
//   } else {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     input.value = " ";
//   }
let reloadedtask = localStorage.getItem("taskValue");  
tasks = JSON.parse(reloadedtask);

if (tasks !==null && tasks) {
    tasks.forEach(e => {
      display.innerHTML += `
          <div class="">
              <p>Task ${index}: ${task}</p>
              <form id="deleteBtn_${index}" type="submit">X</form>
          </div>
      `;
    })
  } 
// console.log("task from local storage: ", task)


form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let task = new Object();
  let tasks = new Array();
  task.taskValue = input.value;
  tasks.unshift(task);

  if (localStorage.getItem("tasks")) {
    const prevTasks = JSON.parse(localStorage.getItem("tasks"));
    const newTasks = [...prevTasks, tasks];
    input.value = " ";
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  } else {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = " ";
  }

  if (task !==null && task) {
    tasks.map((task)=>{
      display.innerHTML += `
          <div class="">
              <p>Task ${index}: ${task.taskValue}</p>
              <form id="deleteBtn_${index}" type="submit">X</form>
          </div>
      `;
    })
  }

  index++;

});

del.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.removeItem("tasks");
  display.innerHTML = "";
}); 