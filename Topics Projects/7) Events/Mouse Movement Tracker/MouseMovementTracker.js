const box = document.querySelector(".box");

window.addEventListener("mousemove", (info) => {
  box.style.top = `${info.clientY}px`;
  box.style.left = `${info.clientX}px`;
});
