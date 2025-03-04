document.getElementById("discover-btn").addEventListener("click", function () {
  window.location.href = "./blogs.html";
});

// current Date showing
const today = new Date();
const formattedDate = today.toLocaleDateString("en-US", {
  weekday: "short",
  month: "short",
  day: "2-digit",
  year: "numeric",
});

document.getElementById("currentDate").innerHTML =
  formattedDate.replace(",", "<br><span class='font-bold'>") + "</span>";

const taskCompletedElement = document.getElementById("taskCompleted");
const taskAssignedElement = document.getElementById("taskAssigned");
const activityLogElement = document.getElementById("activityLog");

const completeButtons = document.querySelectorAll(".complete-task");

completeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    alert("Board updated Successfully");

    const currentTaskAssigned = parseInt(taskAssignedElement.textContent);
    taskAssignedElement.textContent = currentTaskAssigned - 1;
    const currentTaskCompleted = parseInt(taskCompletedElement.textContent);
    taskCompletedElement.textContent = currentTaskCompleted + 1;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const taskName =
      button.parentElement.parentElement.querySelector("h2").textContent;

    const logEntry = `You have completed the task ${taskName} at ${currentTime}`;
    const newLog = document.createElement("p");
    newLog.textContent = logEntry;
    newLog.classList.add(
      "mb-2",
      "bg-white",
      "p-[10px]",
      "rounded-md",
      "shadow"
    );
    activityLogElement.append(newLog);

    button.disabled = true;
    button.classList.add("opacity-[20%]");
    button.textContent = "Completed";
    if (parseInt(taskAssignedElement.textContent) === 0) {
      setTimeout(() => {
        alert("Congrats!!! You have completed all the current task");
      }, 500);
    }
  });
});

const clearLogButton = document.getElementById("clearLog");
clearLogButton.addEventListener("click", function () {
  activityLogElement.innerHTML = "";
});
