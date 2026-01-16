const input = document.getElementById("input");
const span = document.querySelector("span");
const reset = document.getElementById("reset");

reset.disabled = true;

input.addEventListener("input", () => {
  const length = 20 - input.value.length;
  reset.disabled = false;
  span.textContent = length;
  if (length < 0) {
    span.style.color = "red";
  } else {
    span.style.color = "black";
  }
});
reset.addEventListener("click", () => {
  input.value = "";
  span.textContent = 20;
  reset.disabled = true;
});
