const expenseList = [];
function addExpense() {
  const expenseName = document.getElementById("expenseName").value.trim();
  const expenseCost = Number(document.getElementById("expenseCost").value);
  if (expenseName === "" || expenseCost <= 0) {
    alert("please enter valid information!");
    return;
  }
  expenseList.push({ expenseName, expenseCost });
  document.getElementById("expenseName").value = "";
  document.getElementById("expenseCost").value = "";
}
function display() {
  const result = document.getElementById("result");
  result.innerHTML = "";
  expenseList.forEach((value) => {
    const li = document.createElement("li");
    li.textContent = `${value.expenseName} - Rs.${value.expenseCost}`;
    result.appendChild(li);
  });
}
function totalExpense() {
  let total = 0;
  expenseList.forEach((value) => {
    total += value.expenseCost;
  });
  document.getElementById("total").textContent = `Rs.${total}`;
}
