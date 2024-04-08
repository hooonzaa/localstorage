let userStorage = [];

function save(){
    const text = document.getElementById("poznámky").value;
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString();
  
    userStorage.push({ text: text, timestamp: dateTimeString });
    localStorage.setItem("tasks", JSON.stringify(userStorage));
}



function updateTaskList() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const storageText = storedTasks.map((task, index) => {
        return `<div>${task.text} - ${task.timestamp} <button onclick="deleteTask(${index})">X</button> <button onclick="editTask(${index})">Edit</button></div>`;
    }).join('<br>');

    document.getElementById("show").innerHTML = storageText;
}

function deleteTask(index) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    updateTaskList();
}

function editTask(index) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTask = prompt("Edit task:", storedTasks[index].text);

    if (updatedTask !== null) {
        const timestamp = new Date().toLocaleString();
        storedTasks[index].text = updatedTask.trim();
        storedTasks[index].timestamp = timestamp;
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
        updateTaskList();
    }
}

function ulozeni() {
    const mich = document.getElementById("mich").value;
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString();
  
    userStorage.push({ text: mich, timestamp: dateTimeString });
    localStorage.setItem("tasks", JSON.stringify(userStorage));
    updateTaskList();
}
