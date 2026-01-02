let lists = [];
function addtask() {
  const listContainer = document.getElementById("todoList");
  listContainer.innerHTML = "";
  lists.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item}`;
    listContainer.appendChild(li);
  });
}
function todo() {
  const inputEL = document.getElementById("todoInput");
  const input = inputEL.value;
  lists.push(input);
  inputEL.value = "";
  addtask();
}
