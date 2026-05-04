function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    li.onclick = function () {
        li.classList.toggle("complete");
    };


    let del = document.createElement("span");
    del.textContent = "❌";
    del.className = "delete";

    del.onclick = function (e) {
        e.stopPropagation();
        li.remove();
    };

    li.appendChild(del);

    document.getElementById("tasklist").appendChild(li);

    input.value = "";
}