const dataArr = [1, 2, 3, 4, 5];
let resultArr = [];
let index = 0;
const original = document.getElementById("original");
const result = document.getElementById("result");
function render() {
  original.innerHTML = "";
  result.innerHTML = "";
  dataArr.forEach((val, idx) => {
    const box = document.createElement("div");
    box.className = "box";
    box.textContent = val;
    if (index === idx) box.classList.add("active");
    original.appendChild(box);
  });
  resultArr.forEach((val) => {
    const box = document.createElement("div");
    box.textContent = val;
    box.className = "box";
    result.appendChild(box);
  });
}
function map() {
  resultArr = [];
  index = 0;
  render();
  let interval = setInterval(() => {
    if (index >= dataArr.length) {
      clearInterval(interval);
      return;
    } else {
      resultArr.push(dataArr[index] * 2);
      index++;
      render();
    }
  }, 1000);
}
