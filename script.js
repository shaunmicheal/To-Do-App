const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

let tasks = [];

addBtn.addEventListener("click", addTask);

function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    message.textContent = "Please enter a task";
    return;
  }

  message.textContent = "";
  tasks.push(text);
  taskInput.value = "";
  displayTasks();
}

function displayTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const btn = document.createElement("button");
    btn.textContent = "delete";
    btn.addEventListener("click", () => {
      tasks.splice(index, 1);
      displayTasks();
    });

    li.appendChild(btn);
    taskList.appendChild(li);
  });
}
