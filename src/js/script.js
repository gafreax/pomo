var activeCounter = 0;
var counter = 0;
var active = false;

function addSec() {
    var timeDiv = $("#sec");
    var sec = timeDiv.html();
    sec = parseInt(sec) + 1
    if (sec == 60) {
        timeDiv.html("00");
        addMin();
    } else {
        timeDiv.html(sec > 9 ? sec : "0" + sec);
    }
}

function addMin() {
    var timeDiv = $("#min");
    var min = timeDiv.html();
    min = parseInt(min) + 1;
    if (min == 25) {
        Notification.requestPermission().then(function(result) {
            active = false;
            notify = new Notification("Pomodoro", {
                body: "Finished!",
                icon: "favicon.png"
            });
        });
        timeDiv.html("00");
        doneTask(activeCounter);
    } else {
        timeDiv.html(min > 9 ? min : "0" + min);
    }
}

function timing() {
    var sec = addSec();
    if (active) window.setTimeout(timing, 1000);
}

function btnTask(id) {
    active = true;
    activeCounter = id;
    var task = $("#task-" + id);
    task.addClass("text-success");
    task.children("button").hide();
    timing();
}

function createTask(ancestor, id, text) {
    var button =
        "<button onclick=\"btnTask(" + id + ")\" type=\"button\" class=\"btn-sm btn-link\">" +
        "Start" +
        "</button>";
    $("#" + ancestor).append(
        "<li id=\"task-" + id + "\" class=\"list-group-item\">" + id + " - " +
        text + "&nbsp;" +
        button +
        "</li>"
    )
}

function doneTask(id) {
    var task = $("#task-" + id);
    task.css("text-decoration", "line-through");
    task.removeClass("text-success");
    task.addClass("text-danger");

}
$(document).ready(function() {
    $("#addTask").click(function() {
        var taskInput = $("#taskName");
        var taskName = taskInput.val();
        taskInput.val("");
        createTask("taskList", counter++, taskName);
    })
});
