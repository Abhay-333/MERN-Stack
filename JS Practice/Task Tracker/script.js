// ## 💡 Q3: Task Tracker with Date Filter
// **Problem:** Track tasks and filter past/upcoming/all.

// **Steps:**
// 1. Inputs: task, date, status
// 2. Add task to array
// 3. Compare dates (`new Date()`)
// 4. Filter based on condition
// 5. Render filtered tasks
// 6. Use ternary or multiple filters

function customSelector(element) {
  return document.querySelector(element);
}

const pastContainer = customSelector(".past");
const presentContainer = customSelector(".present");
const futureContainer = customSelector(".future");
const form = customSelector("body form");
const taskInp = customSelector(".task");
const descInp = customSelector(".task-desc");
const dateInp = customSelector(".date");
const selectTime = customSelector("select");
const filterBtn = customSelector(".filter-btn");
const taskLists = customSelector(".taskList");
const selectStatus = customSelector("#status");

let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

if (allTasks.length > 0) {
  renderTask();
}

function addTo() {
  if (
    !taskInp.value.trim() ||
    !descInp.value.trim() ||
    !dateInp.value ||
    !selectTime.value ||
    !selectStatus.value
  ) {
    alert("Please fill all fields");
    return;
  }
  allTasks.push({
    id: Date.now(),
    title: taskInp.value,
    desc: descInp.value,
    date: dateInp.value,
    time: selectTime.value,
    status: selectStatus.value,
  });
  updateLocalStorage();
  renderTask();
}

function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(allTasks));
}

function renderTask() {
  pastContainer.innerHTML = "<h2>Past</h2> <br>";
  presentContainer.innerHTML = "<h2>Today</h2> <br>";
  futureContainer.innerHTML = "<h2>UpComing</h2> <br>";
  allTasks.forEach((elem, index) => {
    const taskElem = document.createElement("div");
    taskElem.innerHTML = `
          <div class="task-card">
            <span class="delete-btn" onclick="deleteTask(this,${elem.id})">&times;</span>
            <h3 class="task-title">Title: ${elem.title}</h3>
            <p class="task-desc">Description: ${elem.desc}</p>
            <span class="task-status">Status: <span>${elem.status.charAt(0).toUpperCase() + elem.status.slice(1)}</span></span>
              <select class="status" onchange="changeStatus(this,${elem.id})">
                  <option value="" disabled hidden selected>Change Status</option>
                  <option value="working">Working on it...</option>
                  <option value="completed">Completed</option>
                  <option value="incompleted">InComplete</option>
                  <option value="due">Due</option>
                  <option value="upcoming">UpComing</option>
              </select>
          </div>`;

    if (elem.time === "past") {
      pastContainer.appendChild(taskElem);
    }

    if (elem.time === "present") {
      presentContainer.appendChild(taskElem);
    }

    if (elem.time === "future") {
      futureContainer.appendChild(taskElem);
    }
  });
}

function filterTasks() {
  const filterStatus = customSelector(".childOverlay > .status");
  const filterResults = customSelector(".filter-results");
  filterResults.innerHTML = "";
  const filterTasks = allTasks.filter(
    (task, index) => filterStatus.value === task.status,
  );
  if (filterTasks.length <= 0) {
    const h1 = document.createElement("h1");
    h1.setAttribute("class", "empty-arr-error");
    h1.textContent = "No Task found";
    filterResults.appendChild(h1);
    return;
  }
  filterTasks.forEach((elem, index) => {
    const taskElem = document.createElement("div");

    taskElem.innerHTML += `
          <div class="task-card">
            <span class="delete-btn" onclick="deleteTask(this,${elem.id})">&times;</span>  
            <h3 class="task-title">Title: ${elem.title}</h3>
            <p class="task-desc">Description: ${elem.desc}</p>
            <span class="task-status">Status: <span>${elem.status.charAt(0).toUpperCase() + elem.status.slice(1)}</span></span>
              <select class="status" onchange="changeStatus(this,${elem.id})">
                  <option value="" disabled hidden selected>Change Status</option>
                  <option value="working">Working on it...</option>
                  <option value="completed">Completed</option>
                  <option value="incompleted">InComplete</option>
                  <option value="due">Due</option>
                  <option value="upcoming">UpComing</option>
              </select>
          </div>`;

    filterResults.appendChild(taskElem);
  });
}

function changeStatus(selectElement, id) {
  const found = allTasks.find((elem, index) => {
    return elem.id === id;
  });

  const taskStatus = selectElement.value;
  const taskStatusElem = selectElement.previousElementSibling;
  if (!found) return;
  found.status = selectElement.value;

  taskStatusElem.innerHTML =
    `<span>Status: </span>` +
    taskStatus.charAt(0).toUpperCase() +
    taskStatus.slice(1);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTo();
  form.reset();
});

filterBtn.addEventListener("click", function () {
  const childOverlay = document.createElement("div");
  const parentOverlay = document.createElement("div");
  childOverlay.setAttribute("class", "childOverlay");
  parentOverlay.setAttribute("class", "parentOverlay");

  childOverlay.innerHTML = `
      <div class="overlay-heading">
          <p>Filter tasks: </p>
          <br>
          <span>&times;</span>
      </div>
      
      <select class="status" onchange="filterTasks()">
      <option value="" disabled  hidden selected>Please Select a Filter</option>
      <option value="working">Working on it...</option>
      <option value="completed">Completed</option>
      <option value="incompleted">InComplete</option>
      <option value="due">Due</option>
      <option value="upcoming">UpComing</option>
      </select>
      
      <div class = "filter-results"></div>
      `;

  document.body.appendChild(parentOverlay);
  document.body.appendChild(childOverlay);

  const closeBtn = customSelector(".childOverlay > div > span");
  closeBtn.addEventListener("click", function () {
    parentOverlay.remove();
    childOverlay.remove();
  });
});

function deleteTask(clickedTask, id) {
  const deletedTasks = allTasks.filter((task, index) => task.id !== id);
  allTasks = deletedTasks;
  updateLocalStorage();
  renderTask();
}
