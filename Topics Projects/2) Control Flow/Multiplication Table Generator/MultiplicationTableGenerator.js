const multiplicationTable = document.getElementById("multiplication-table");
function generate() {
  const input = Number(document.getElementById("input").value);
  let html = "";
  for (let i = 1; i <= 10; i++) {
    html += `<p> ${input} x ${i} = ${i * input} </p>`;
  }
  multiplicationTable.innerHTML = html;
}
