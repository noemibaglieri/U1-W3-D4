const form = document.querySelector("form");


form.onsubmit = function (e) {
    e.preventDefault();
    const listOfTasks = document.getElementById("list-of-tasks");
    const taskInput = document.getElementById("add-input")
    const task = document.createElement("li");
    const deleteTaskBtn = document.createElement("button")
    task.classList.add("task");

    deleteTaskBtn.type = "button"
    deleteTaskBtn.innerText = "delete"
    
    task.innerText = taskInput.value
    listOfTasks.appendChild(task)
    task.appendChild(deleteTaskBtn)
    task.onclick = function (e) {
        e.target.classList.toggle("completed-task")}
        deleteTaskBtn.className = "delete-task-button"
    

}

