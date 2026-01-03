let timer;
let userTime;
function start() {
  userTime = parseInt(document.getElementById("inputTime").value);
  document.getElementById("display").textContent = userTime;
  timer = setInterval(() => {
    if (userTime > 0) {
      userTime--;
      update(userTime);
    } else {
      clearInterval(timer);
      timeup();
    }
  }, 1000);
}
function pause() {
  clearInterval(timer);
}
function reset() {
  clearInterval(timer);
  userTime = 0;
  document.getElementById("display").textContent = userTime;
  update(userTime);
  document.getElementById("inputTime").value = "";
}
function update(time) {
  document.getElementById("display").textContent = time;
}
function timeup() {
  alert("Time Over!");
}
