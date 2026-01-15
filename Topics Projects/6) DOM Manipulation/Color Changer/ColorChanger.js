const p = document.getElementById("colorHex");
const div = document.querySelector("div");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  div.style.backgroundColor = colorChange();
  p.textContent = colorChange();
});

function colorChange() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
