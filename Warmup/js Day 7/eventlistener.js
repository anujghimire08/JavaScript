const input = document.getElementById("input");
const result = document.getElementById("result");
const reset = document.getElementById("reset");

input.addEventListener("input", () => {
  result.textContent = input.value.length;
});

reset.addEventListener("click", () => {
  reset.style.backgroundColor = "red";
  reset.style.border = "1px solid black";
  input.value = "";
  result.innerText = "";
});
