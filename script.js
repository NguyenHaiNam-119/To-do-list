// Thêm task mới
function addTask(task) {
  const todoList = document.getElementById("todo-list");
  const li = document.createElement("li");

  li.innerHTML = `
    <label>
      <input type="checkbox" />
      <span>${task}</span>
    </label>
    <div class="actions">
      <button class="delete-btn">Delete</button>
      <button class="edit-btn">Edit</button>
    </div>
  `;

  todoList.appendChild(li);

  const checkbox = li.querySelector('input[type="checkbox"]');
  checkbox.addEventListener("change", function () {
    const taskText = this.nextElementSibling;
    taskText.classList.toggle("completed", this.checked);
  });
}

// Xử lý submit form
document.getElementById("todo-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const taskInput = document.getElementById("todo-input");
  const task = taskInput.value.trim();
  if (task !== "") {
    addTask(task);
    taskInput.value = "";
  }
});

// Xử lý nút delete
document.getElementById("todo-list").addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.closest("li").remove();
  }
});

// Xử lý nút edit
document.getElementById("todo-list").addEventListener("click", function (event) {
  if (event.target.classList.contains("edit-btn")) {
    const taskText = event.target.closest("li").querySelector("span");
    const newText = prompt("Enter new task", taskText.textContent);
    if (newText !== null) {
      taskText.textContent = newText.trim();
    }
  }
});

// Task mẫu
const defaultTasks = ["HTML", "CSS", "JavaScript", "Tailwind"];
defaultTasks.forEach(task => addTask(task));
