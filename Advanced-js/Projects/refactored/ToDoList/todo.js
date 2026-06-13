let add = document.querySelector(".add-btn");
let taskInput = document.querySelector(".task-input");
let list = document.querySelector(".task-list");

add.addEventListener("click", function () {
  if (taskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  const textnode = document.createTextNode(taskInput.value);

  // ❌ delete button for list items(li)
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.addEventListener("click", function () {
    li.remove();
  });

  // ✅ toggle done on click
  li.addEventListener("click", function (e) {
    // to avoid clicking on delete button
    if (e.target.tagName !== "BUTTON") {
      li.classList.toggle("done");
    }
  });

  li.appendChild(textnode);
  li.appendChild(delBtn);
  list.appendChild(li);

  taskInput.value = ""; // clear the input text in input area to make it more proffessional
});