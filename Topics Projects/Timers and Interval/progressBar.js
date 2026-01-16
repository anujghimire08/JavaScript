const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");
const statusText = document.querySelector(".status");

let count = 0;

const interval = setInterval(() => {
  if (count < 100) {
    count++;
    progressBar.style.width = `${count}%`;
    progressText.textContent = `${count}%`;
  } else {
    clearInterval(interval);
  }
  if (count === 100) {
    statusText.textContent = "Completed!";
  }
}, 200);
