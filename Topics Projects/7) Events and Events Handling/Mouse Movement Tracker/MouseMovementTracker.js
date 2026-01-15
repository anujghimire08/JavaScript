const box = document.querySelector(".box");

window.addEventListener("mousemove", (info) => {
  box.style.top = `${info.clientY - box.offsetHeight / 2}px`;
  box.style.left = `${info.clientX - box.offsetWidth / 2}px`;
});
