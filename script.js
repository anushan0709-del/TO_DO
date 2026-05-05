
document.addEventListener("DOMContentLoaded", loadTasks);


function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (!text) return alert("Please enter a task!");

    createTaskElement(text, false);

    saveTasks();
    input.value = "";
}



function createTaskElement(text, completed) {
    const li = document.createElement("li");
    li.textContent = text;

    if (completed) {
        li.classList.add("complete");
    }

    li.onclick = function () {
        li.classList.toggle("complete");
        saveTasks();
    };

    const del = document.createElement("button");
    del.textContent = "❌";

    del.onclick = function (e) {
        e.stopPropagation();
        li.remove();
        saveTasks();
    };

    li.appendChild(del);
    document.getElementById("taskList").appendChild(li);
}



function saveTasks() {
    const tasks = [];

    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.firstChild.textContent.trim(),
            completed: li.classList.contains("complete")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}



function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        createTaskElement(task.text, task.completed);
    });
}


function showAll() {
    document.querySelectorAll("#taskList li").forEach(t => t.style.display = "flex");
}

function showPending() {
    document.querySelectorAll("#taskList li").forEach(t => {
        t.style.display = t.classList.contains("complete") ? "none" : "flex";
    });
}

function showCompleted() {
    document.querySelectorAll("#taskList li").forEach(t => {
        t.style.display = t.classList.contains("complete") ? "flex" : "none";
    });
}



document.getElementById("taskInput").addEventListener("keypress", e => {
    if (e.key === "Enter") addTask();
});