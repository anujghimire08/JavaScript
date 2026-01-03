const output = document.getElementById("output");
function getValues() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  return { num1, num2 };
}
function add() {
  const { num1, num2 } = getValues();
  output.value = num1 + num2;
}
function sub() {
  const { num1, num2 } = getValues();
  output.value = num1 - num2;
}
function product() {
  const { num1, num2 } = getValues();
  output.value = num1 * num2;
}
function divide() {
  const { num1, num2 } = getValues();
  num2 !== 0
    ? (output.value = num1 / num2)
    : (output.value = "Error: Division by zero");
}
