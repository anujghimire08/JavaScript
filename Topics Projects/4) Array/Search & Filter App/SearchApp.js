const fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Pineapple",
  "Kiwi",
  "Grapes",
];
const userSearch = document.getElementById("userInput");
const results = document.getElementById("result");
function displayResult(list) {
  results.innerHTML = "";
  if (list.length === 0) {
    results.textContent = "Empty List";
    return;
  }
  list.forEach((list) => {
    const li = document.createElement("li");
    li.textContent = list;
    results.appendChild(li);
  });
}
function filterSearch() {
  const query = userSearch.value.toLowerCase();
  let filtered = fruits.filter((fruit) => {
    return fruit.toLowerCase().includes(query);
  });
  displayResult(filtered);
}
userSearch.addEventListener("input", filterSearch);
displayResult(fruits);
