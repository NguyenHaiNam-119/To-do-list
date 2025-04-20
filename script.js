    function addTask(task) {
    const todoList = document.getElementById("todo-list");
    const li = document.createElement("li");
    li.className = "flex justify-between items-center py-4 group border-b border-blue-100";
  
    li.innerHTML = `
      <label class="flex items-center cursor-pointer">
        <input type="checkbox" class="mr-3 w-5 h-5 text-blue-600 transition" />
        <span class="text-lg font-medium transition">${task}</span>
      </label>
      <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button class="text-red-500 hover:text-blue-700 font-medium mr-3 delete-btn">Delete</button>
        <button class="text-blue-400 hover:text-blue-600 font-medium edit-btn">Edit</button>
      </div>
    `;
  
    todoList.appendChild(li);
  
    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener("change", function () {
      const taskText = this.nextElementSibling;
      if (this.checked) {
        taskText.classList.add("completed");
      } else {
        taskText.classList.remove("completed");
      }
    });
  }
  
  document.getElementById("todo-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const taskInput = document.getElementById("todo-input");
    const task = taskInput.value.trim();
    if (task !== "") {
      addTask(task);
      taskInput.value = "";
    }
  });
  
  document.getElementById("todo-list").addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      event.target.closest("li").remove();
    }
  });
  
  document.getElementById("todo-list").addEventListener("click", function (event) {
    if (event.target.classList.contains("edit-btn")) {
      const taskText = event.target.closest("li").querySelector("span");
      const newText = prompt("Enter new task", taskText.textContent);
      if (newText !== null) {
        taskText.textContent = newText.trim();
      }
    }
  });
  