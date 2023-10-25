// Get references to the HTML elements
const newTaskInput = document.querySelector("#new-task");
const addTaskButton = document.querySelector("#add-task");
const todoList = document.querySelector("#todo-list");
const clearCompletedButton = document.querySelector("#clear-completed");

// Add an event listener to the add task button
addTaskButton.addEventListener("click", function() {
  // Get the new task text from the input field
  const newTask = newTaskInput.value;

  // Create a new to-do list item element
  const todoItem = document.createElement("li");
  todoItem.textContent = newTask;

  // Add the new to-do list item element to the to-do list
  todoList.appendChild(todoItem);

  // Save the new to-do list item to local storage
  localStorage.setItem("todo-list", JSON.stringify(todoList.innerHTML));

  // Clear the new task input field
  newTaskInput.value = "";
});

// Add an event listener to the to-do list
todoList.addEventListener("click", function(event) {
  // Get the to-do list item that was clicked
  const todoItem = event.target;

  // If the to-do list item is not completed, mark it as completed
  if (!todoItem.classList.contains("completed")) {
    todoItem.classList.add("completed");
  } else {
    // If the to-do list item is completed, remove it from the to-do list
    todoItem.remove();
  }

  // Save the updated to-do list to local storage
  localStorage.setItem("todo-list", JSON.stringify(todoList.innerHTML));
});

// Add an event listener to the clear completed button
clearCompletedButton.addEventListener("click", function() {
  // Remove all completed to-do list items from the to-do list
  todoList.querySelectorAll(".completed").forEach((item) => item.remove());

  // Save the updated to-do list to local storage
  localStorage.setItem("todo-list", JSON.stringify(todoList.innerHTML));
});

// Load the to-do list from local storage
const loadedTodoList = localStorage.getItem("todo-list");
if (loadedTodoList) {
  todoList.innerHTML = loadedTodoList;
}
