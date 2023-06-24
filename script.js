function addTask() {
    var input = document.getElementById("new-task");
    var task = input.value;
    if (task.trim() === "") {
        alert("할 일을 입력하세요.");
        return;
    }
    var taskList = document.getElementById("task-list");
    var li = document.createElement("li");
    li.className = "task-item";
    
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function() {
        if (this.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    };
    li.appendChild(checkbox);
    
    var taskText = document.createElement("div");
    taskText.className = "task-text";
    taskText.textContent = task;
    li.appendChild(taskText);
    
    var taskTime = document.createElement("div");
    taskTime.className = "task-time";
    taskTime.textContent = getCurrentTime();
    li.appendChild(taskTime);
    
    taskList.appendChild(li);
    input.value = "";
}

function getCurrentTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var timeString = hour + ":" + padZero(minute) + ":" + padZero(second);
    return timeString;
}

function padZero(number) {
    return (number < 10 ? "0" : "") + number;
}
