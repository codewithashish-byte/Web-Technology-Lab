/*let taskInput = document.getElementById('taskInput'); 
let addButton = document.getElementById('addButton'); 
let taskList = document.getElementById('taskList'); 

let task = taskInput.value; 

addButton.addEventListener("click", function() {
 
    if (task == "") { 
    alert("Please enter the task:"); 
}
   
    let li = document.createElement('li');
    li.textContent = task;

     taskList.appendChild(li);
});*/

let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {

    let task = taskInput.value;

    if (task == "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.textContent = task;

    let completeButton = document.createElement("button");
    completeButton.textContent = "Complete";

    li.appendChild(completeButton);

    completeButton.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    taskList.appendChild(li);

    taskInput.value = "";
});

