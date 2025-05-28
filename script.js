// Global variables
const currentTasks = [
  {
    task: "Complete homework",
    details: "Finish math and science assignments by evening",
  },
  {
    task: "Grocery shopping",
    details: "Buy milk, eggs, and vegetables from the supermarket",
  },
  {
    task: "Workout",
    details: "Go for a 30-minute run and do strength training",
  },
];

// Function to render tasks
function renderTask() {
  const allTask = document.querySelector(".task-container .allTask");
  if (!allTask) return; // Exit if element doesn't exist

  let sum = "";
  currentTasks.forEach(function (elem) {
    sum += `<div class="task">
      <h3>${elem.task}</h3>
      <button>Completed</button>
    </div>`;
  });
  allTask.innerHTML = sum;
}

// Function to handle card opening
function opencard() {
  let allElem = document.querySelectorAll(".elem");
  let forElem = document.querySelectorAll(".forElem");
  let back = document.querySelectorAll(".back");

  allElem.forEach(function (elem) {
    elem.addEventListener("click", function () {
      document.querySelector("#main1").style.display = "none";
      document.querySelector("#main2").style.display = "block";
      forElem[elem.id].style.display = "block";

      // If this is the task section (id="2"), render the tasks
      if (elem.id === "2") {
        renderTask();
      }
    });
  });

  back.forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelector("#main1").style.display = "flex";
      document.querySelector("#main2").style.display = "none";
      document
        .querySelectorAll(".forElem")
        .forEach((f) => (f.style.display = "none"));
    });
  });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  opencard();

  // Set up form handling
  const form = document.querySelector(".task-container .addTask form");
  const taskInput = document.querySelector(".task-container .addTask form #task-input");
  const tasktextarea = document.querySelector(".task-container .addTask form textarea");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (taskInput.value.trim()) {  // Only add if there's a task name
        currentTasks.push({ 
          task: taskInput.value, 
          details: tasktextarea.value 
        });
        renderTask();
        // Clear the form
        taskInput.value = '';
        tasktextarea.value = '';
      }
    });
  }
});
