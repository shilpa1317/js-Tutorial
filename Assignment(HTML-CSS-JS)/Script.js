// Select elements
var input = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");

// Add button event
addBtn.addEventListener("click", addTask);

function addTask() {

    if(input.value === ""){
        alert("Please enter a task");
        return;
    }

    // Create li
    var li = document.createElement("li");

    // Task text
    var span = document.createElement("span");
    span.innerText = input.value;

    // Click to complete
    span.addEventListener("click", function(){
        li.classList.toggle("completed");
    });

    // Delete button
    var delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.className = "delete";

    delBtn.addEventListener("click", function(event){
        event.stopPropagation();
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(delBtn);

    taskList.appendChild(li);

    input.value = "";
}