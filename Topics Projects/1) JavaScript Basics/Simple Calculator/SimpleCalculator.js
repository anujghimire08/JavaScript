const valueFirst = document.getElementById("number1");
const valueSecond = document.getElementById("number2");
const result = document.getElementById("result");
function add() {
  let num1 = Number(valueFirst.value);
  let num2 = Number(valueSecond.value);
  result.value = num1 + num2;
}
function sub() {
  let num1 = Number(valueFirst.value);
  let num2 = Number(valueSecond.value);
  result.value = num1 - num2;
}
function product() {
  let num1 = Number(valueFirst.value);
  let num2 = Number(valueSecond.value);
  result.value = num1 * num2;
}
function divide() {
  let num1 = Number(valueFirst.value);
  let num2 = Number(valueSecond.value);
  if (num2 > 0) {
    result.value = num1 / num2;
  } else {
    result.value = "Error: Divide by 0";
  }
}
