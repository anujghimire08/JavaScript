const p = document.getElementById("clock");
const ampm = document.getElementById("ampm");
update();

function update() {
  let time = new Date();
  let hrs = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  hrs = hrs < 10 ? `0${hrs}` : hrs;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;

  // 12hrs format
  hrs = hrs % 12 || 12;

  p.textContent = `${hrs}:${min}:${sec}`;
  ampm.textContent = hrs >= 12 ? "AM" : "PM";
}

setInterval(update, 1000);
