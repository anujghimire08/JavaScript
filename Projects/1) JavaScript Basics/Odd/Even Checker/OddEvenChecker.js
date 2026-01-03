const inputEL = document.getElementById("input");
const checkBtnEL = document.getElementById("check");
const ResultEL = document.getElementById("result");
function check() {
  let userInput = Number(inputEL.value);
  if (userInput === "") return;
  userInput % 2 === 0
    ? (ResultEL.innerText = "Even Number")
    : (ResultEL.innerText = "Odd Number");
}
