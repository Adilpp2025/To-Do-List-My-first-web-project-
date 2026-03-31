let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(function(task, index) {
    let li = document.createElement("li");

    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      ${task.text}
      <div>
        <button onclick="completeTask(${index})">✔</button>
        <button onclick="deleteTask(${index})">X</button>
      </div>
    `;

    list.appendChild(li);
  });
}

function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value.trim() === "") return;

  tasks.push({
    text: input.value,
    completed: false
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value = "";

  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

function completeTask(index) {
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

// Load tasks on page start
displayTasks();
