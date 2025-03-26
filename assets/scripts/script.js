const form = document.querySelector("form");

form.onsubmit = function (e) {
    e.preventDefault();
    const listOfTasks = document.getElementById("list-of-tasks");
    const addTaskBtn = document.getElementById("add-button");
    
    const task = document.createElement("li");
    task.classList.add("task");
    task.innerText = "micio"
    listOfTasks.appendChild(task)
}






// addTaskBtn.onclick = function (e) {
//     document.createElement(task)
//     task.innerText = "test"
// }
