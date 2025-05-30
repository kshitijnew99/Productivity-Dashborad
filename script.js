// localStorage.clear()
let currentTask = [];

if(localStorage.getItem('currentTask')){
    currentTask = JSON.parse(localStorage.getItem('currentTask'))
    
}else{
    // console.log('Local Storage is empty');
}

function renderTask() {
    let allTask = document.querySelector(".task-container .allTask");
    if (!allTask) return; 

    let sum = "";
    currentTask.forEach(function (elem,idx) {
      sum += `<div class="task">
        <h3>${elem.task}</h3>
        <button id = "${idx}">Completed</button>
      </div>`;
    });
    allTask.innerHTML = sum;

    var taskbutton = document.querySelectorAll('.task button');
    taskbutton.forEach(function(btn){
        btn.addEventListener('click',function(){
            currentTask.splice(btn.id,1);
            localStorage.removeItem('currentTask[btn.id]')
            renderTask();
        })
    })
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
        currentTask.push({ 
          task: taskInput.value, 
          details: tasktextarea.value 
        });
        localStorage.setItem('currentTask',JSON.stringify(currentTask))
        renderTask();
        // Clear the form
        taskInput.value = '';
        tasktextarea.value = '';
      }
    });
  }
});


function dailyplanner(){
    var dailyplannerdata = {}
    var dailyplannerdata = JSON.parse(localStorage.getItem('dailyplannerData'))||{}
    var dailyplanner = document.querySelector('.daily-planner')
    // let workinghour = prompt("Enter the number of working hours")
    
    var hours = Array.from({length:18},(_,idx)=>`${6+idx}:00 - ${7+idx}:00`)
    var wholeday = ''
    hours.forEach(function(elem,idx){

        var savedData = dailyplannerdata[idx] || ""
        console.log(savedData);
        
        
        wholeday = wholeday + `<div class="daily-planner-time">
            <p>${6+idx}:00 - ${7+idx}:00</p>
            <input  id="${idx}" type="text" placeholder="" value ="${savedData}">
        </div>`
    })
    // console.log(dailyplannerdata);

    dailyplanner.innerHTML = wholeday   

    var dailyplannerInput = document.querySelectorAll('.daily-planner input')
    dailyplannerInput.forEach(function(elem){
        elem.addEventListener('input',function(){
            dailyplannerdata[elem.id] = elem.value
            
            localStorage.setItem('dailyplannerData', JSON.stringify(dailyplannerdata))

        })
    })

}

dailyplanner()



