const valueEL = document.getElementById("value");
const resultEL = document.getElementById("result");
const toFEL = document.getElementById("toF");
const toCEL = document.getElementById("toC");
function toC() {
  const value = Number(valueEL.value);
  const result = ((value - 32) / 1.8).toFixed(2);
  resultEL.value = result;
  value = "";
}
function toF() {
  const value = Number(valueEL.value);
  const result = (value * 1.8 + 32).toFixed(2);
  resultEL.value = result;
  value = "";
}
