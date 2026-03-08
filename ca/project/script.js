// ============================================
//  INT219 — script.js
//  Covers: Variables, Functions, Arrays,
//          Objects, DOM, Event Handling
// ============================================


// --- CONCEPT 7: Variables ---
// let   → value can change later
// const → value never changes
// var   → old way, avoid it

const addBtn      = document.getElementById("add-btn");   // Points to the button
const taskInput   = document.getElementById("task-input");
const catInput    = document.getElementById("category-input");
const taskList    = document.getElementById("task-list"); // Points to <ul>


// --- CONCEPT 8: Arrays ---
// An array holds a LIST of items in order.
// Index starts at 0.
// tasks[0] = first task, tasks[1] = second task, etc.

let tasks = [];   // Start with an empty list


// --- CONCEPT 9: Objects ---
// An object holds RELATED data as key: value pairs.
// Think of it as a form filled for one task.

// Example of one task object:
// {
//   id: 1,
//   name: "Study Flexbox",
//   category: "Study",
//   done: false
// }


// --- CONCEPT 10: Functions ---
// A function is a reusable block of code.
// Define once, call many times.

function addTask() {

  // Read values from the input boxes
  const name     = taskInput.value.trim();
  const category = catInput.value.trim() || "General"; // Default if empty

  // Don't add empty tasks
  if (name === "") {
    alert("Please enter a task name!");
    return; // Stop the function here
  }

  // Create a new task OBJECT
  const newTask = {
    id:       tasks.length + 1,  // Simple unique ID
    name:     name,
    category: category,
    done:     false
  };

  // Push it into our tasks ARRAY
  tasks.push(newTask);

  // Clear the input fields
  taskInput.value = "";
  catInput.value  = "";

  // Re-render the list on screen
  renderTasks();
}


// --- CONCEPT 11: DOM Manipulation ---
// DOM = Document Object Model
// JavaScript can READ and WRITE the HTML using the DOM.
// document.getElementById()  → find an element
// element.innerHTML          → set its HTML content
// element.classList.add()    → add a CSS class

function renderTasks() {

  // Clear the current list before redrawing
  taskList.innerHTML = "";

  // Loop through each task in the array
  tasks.forEach(function(task) {

    // Create a new <li> element
    const li = document.createElement("li");
    li.className = "task-item";           // Add CSS class
    if (task.done) li.classList.add("done"); // Add .done if completed

    // Set inner HTML of the <li>
    // We use template literals (backticks) to embed variables
    li.innerHTML = `
      <span>${task.name}</span>
      <span class="task-category">${task.category}</span>
      <button class="delete-btn" onclick="deleteTask(${task.id})">✕</button>
    `;

    // Clicking the task name toggles done/not-done
    li.querySelector("span").addEventListener("click", function() {
      toggleDone(task.id);
    });

    // Append the <li> into the <ul>
    taskList.appendChild(li);
  });
}


// --- CONCEPT 12: Event Handling ---
// Events are things that happen: click, keypress, submit, etc.
// addEventListener("event", function) → run code when event fires

// When Add button is clicked → call addTask()
addBtn.addEventListener("click", addTask);

// When Enter key is pressed inside the input → also add task
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});


// --- Helper Functions ---

function toggleDone(id) {
  // Find the task with matching id and flip its done value
  tasks.forEach(function(task) {
    if (task.id === id) {
      task.done = !task.done; // true becomes false, false becomes true
    }
  });
  renderTasks(); // Redraw the list
}

function deleteTask(id) {
  // filter() creates a NEW array keeping only tasks where id does NOT match
  tasks = tasks.filter(function(task) {
    return task.id !== id;
  });
  renderTasks();
}


// --- Load a starter task so the page isn't blank ---
tasks.push({ id: 1, name: "Learn HTML Semantics", category: "Study", done: true });
tasks.push({ id: 2, name: "Practice Flexbox",     category: "Study", done: false });
tasks.push({ id: 3, name: "Build the To-Do App",  category: "Project", done: false });
renderTasks();